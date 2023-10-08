use crate::console_log;
use ego_tree::NodeRef;
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
pub fn node_layout_style(style: Arc<ComputedValues>, element: &ElementRef) -> Style {
    let physical_size = style.box_size().size_to_physical(style.writing_mode());
    let mut size = Size {
        width: length_dimensions(&physical_size.x),
        height: length_dimensions(&physical_size.y),
    };

    // get the img raw height/width
    if element.value().name() == "img" {
        let width = element.attr("width");
        let height = element.attr("height");
        if physical_size.x.inner_px() == 0.0 {
            match width {
                Some(w) => {
                    let w = w.parse::<f32>();
                    match w {
                        Ok(w) => {
                            size.width = points(w);
                        }
                        _ => (),
                    }
                }
                _ => (),
            }
        }
        if physical_size.y.inner_px() == 0.0 {
            match height {
                Some(h) => {
                    let h = h.parse::<f32>();

                    match h {
                        Ok(h) => {
                            size.height = points(h);
                        }
                        _ => (),
                    }
                }
                _ => (),
            }
        }
    }

    // todo: determine if all children at the top level have floats set to use flex-row
    Style {
        size,
        border: points(style.border_width().inner_px()),
        padding: points(style.padding().inner_px()),
        margin: points(style.margin().inner_px()),
        ..Default::default()
    }
}

/// push leaf
pub fn push_leaf<'a, 'b, 'c>(
    node: &NodeRef<'_, scraper_forky::Node>,
    author: &StyleSet,
    document: &'a Html,
    mut matching_context: &mut MatchingContext<'c, Simple>,
    taffy: &mut Taffy,
    mut l_leafs: &mut Vec<Node>,
) {
    match ElementRef::wrap(*node) {
        Some(element) => {
            let name = element.value().name();
            if !NODE_IGNORE.contains(name) {
                console_log!("LEAFY {:?}", name);
                let style = victor_tree::style::cascade::style_for_element_ref(
                    &element,
                    &author,
                    &document,
                    &mut matching_context,
                );

                // TOOD: Only push leaf empty without children

                let leaf = taffy.new_leaf(node_layout_style(style, &element));

                l_leafs.push(leaf.unwrap());

                // TODO: If node has children push leaf with children
                // push leaf until children finished
                if node.has_children() {
                    let children = node.children();

                    // iterate all children
                    for child in children {
                        push_leaf(
                            &child,
                            author,
                            document,
                            matching_context,
                            taffy,
                            &mut l_leafs,
                        );
                    }
                }
            }
        }
        _ => (),
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
    let mut children = element.children();

    while let Some(child) = children.next() {
        push_leaf(
            &child,
            author,
            document,
            matching_context,
            taffy,
            &mut l_leafs,
        );
    }

    let style = victor_tree::style::cascade::style_for_element_ref(
        &element,
        &author,
        &document,
        &mut matching_context,
    );

    let leaf_style = node_layout_style(style, &element);

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
                        leaf(
                            &element,
                            &author,
                            document,
                            &mut matching_context,
                            &mut taffy,
                        )
                    }
                };

                // layout_leafs.push(layout_leaf.clone());

                accessibility_tree
                    .entry(name)
                    .and_modify(|n| n.push((element, layout_leaf)))
                    .or_insert(Vec::from([(element, layout_leaf)]));
            }
            _ => (),
        };
    }

    match accessibility_tree.get("body") {
        Some(node) => {
            for child in node[0].0.children() {
                match ElementRef::wrap(child) {
                    Some(element) => {
                        let name = element.value().name();

                        if !NODE_IGNORE.contains(name) {
                            console_log!("BODY {:?}", name);

                            let leaf = leaf(
                                &element,
                                &author,
                                document,
                                &mut matching_context,
                                &mut taffy,
                            );

                            layout_leafs.push(leaf)
                        }
                    }
                    _ => (),
                }
            }
        }
        _ => (),
    };

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
