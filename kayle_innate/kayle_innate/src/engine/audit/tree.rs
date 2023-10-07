use crate::console_log;
use scraper_forky::selector::Simple;
use scraper_forky::ElementRef;
use scraper_forky::Html;
use selectors::matching::MatchingContext;
use slotmap::DefaultKey;
use std::collections::BTreeMap;
use std::collections::HashSet;
use std::sync::Arc;
use taffy::prelude::*;
use taffy::style::Dimension;
use victor_tree::style::values::LengthOrPercentageOrAuto;
use victor_tree::style::ComputedValues;
use victor_tree::style::StyleSet;

lazy_static! {
    static ref NODE_IGNORE: HashSet<&'static str> =
        HashSet::from(["meta", "style", "link", "script", "head", "html", "body"]);
}

/// length to taffy dimensions
pub fn length_dimensions(v: &LengthOrPercentageOrAuto) -> Dimension {
    match v {
        LengthOrPercentageOrAuto::Length(l) => Dimension::Points(l.px),
        LengthOrPercentageOrAuto::Percentage(l) => Dimension::Percent(l.unit_value),
        LengthOrPercentageOrAuto::Auto => Dimension::Auto,
    }
}

/// layout style
pub fn node_layout_style(style: Arc<ComputedValues>) -> Style {
    let physical_size = style.box_size().size_to_physical(style.writing_mode());
    // todo: determine if all children at the top level have floats set to use flex-row
    Style {
        // compute the default layout from CDP
        size: Size {
            width: length_dimensions(&physical_size.x),
            height: length_dimensions(&physical_size.y),
        },
        border: points(style.border_width().inner_px()),
        padding: points(style.padding().inner_px()),
        margin: points(style.margin().inner_px()),
        ..Default::default()
    }
}

/// get a layout leaf a new leaf
pub fn leaf<'a, 'b, 'c>(
    element: &ElementRef,
    author: &StyleSet,
    document: &'a Html,
    mut matching_context: &mut MatchingContext<'c, Simple>,
    taffy: &mut Taffy,
) -> DefaultKey {
    let mut l_leafs: Vec<Node> = vec![];

    for child in element.children() {
        match ElementRef::wrap(child) {
            Some(element) => {
                let name = element.value().name();

                if !NODE_IGNORE.contains(name) {
                    let style = victor_tree::style::cascade::style_for_element_ref(
                        &element,
                        &author,
                        &document,
                        &mut matching_context,
                    );
                    let leaf = taffy.new_leaf(node_layout_style(style));

                    l_leafs.push(leaf.unwrap())
                }
            }
            _ => (),
        }
    }

    let style = victor_tree::style::cascade::style_for_element_ref(
        &element,
        &author,
        &document,
        &mut matching_context,
    );

    let leaf_style = node_layout_style(style);

    // build leaf with children
    if l_leafs.len() > 0 {
        taffy.new_with_children(leaf_style, &l_leafs)
    } else {
        taffy.new_leaf(leaf_style)
    }
    .unwrap()
}

/// try to fix all possible issues using a spec against the tree.
pub fn parse_accessibility_tree<'a, 'b, 'c>(
    document: &'a Html,
    author: &StyleSet,
    match_context: MatchingContext<'c, Simple>, // todo: return the nodes with a tuple of the layout node and the element node
) -> (
    BTreeMap<&'a str, Vec<(ElementRef<'a>, slotmap::DefaultKey)>>,
    Taffy,
    MatchingContext<'c, Simple>,
) {
    // TODO: make layout optional
    let mut taffy = Taffy::new();
    let mut accessibility_tree: BTreeMap<&str, Vec<(ElementRef<'_>, DefaultKey)>> =
        BTreeMap::from([("title".into(), Default::default())]);
    let mut matching_context = match_context;
    let mut layout_leafs: Vec<Node> = vec![];

    // push taffy layout in order from elements
    for node in document.tree.nodes() {
        match ElementRef::wrap(node) {
            Some(element) => {
                let name = element.value().name();
                // TODO: determine if children are found to get entire layout of children to vector first
                let layout_leaf = {
                    if NODE_IGNORE.contains(name) {
                        taffy.new_leaf(Default::default()).unwrap()
                    } else {
                        // all leafs created must be put into the body node at the end
                        console_log!("{name}");
                        leaf(
                            &element,
                            &author,
                            document,
                            &mut matching_context,
                            &mut taffy,
                        )
                    }
                };

                layout_leafs.push(layout_leaf.clone());

                accessibility_tree
                    .entry(name)
                    .and_modify(|n| n.push((element, layout_leaf)))
                    .or_insert(Vec::from([(element, layout_leaf)]));
            }
            _ => (),
        };
    }

    let root_node = taffy
        .new_with_children(
            Style {
                flex_direction: FlexDirection::Column,
                // compute the default layout from CDP
                size: Size {
                    width: points(800.0),
                    height: points(600.0),
                },
                ..Default::default()
            },
            &layout_leafs,
        )
        .unwrap();

    console_log!("Layout leafs {:?}", layout_leafs.len());

    // TODO: set the root node to html, body in the accessibility_tree
    taffy.compute_layout(root_node, Size::MAX_CONTENT).unwrap();

    for lea in layout_leafs {
        crate::console_log!("Leaf Position {:?}", taffy.layout(lea).unwrap());
    }
    // console_log!("Getting tree links {:?}", accessibility_tree.get("a"));
    // console_log!("Tree {:?}", accessibility_tree);

    (accessibility_tree, taffy, matching_context)
}
