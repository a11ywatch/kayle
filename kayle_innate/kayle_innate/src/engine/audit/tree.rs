use scraper_forky::selector::Simple;
use scraper_forky::ElementRef;
use scraper_forky::Html;
use selectors::matching::MatchingContext;
use slotmap::DefaultKey;
use std::collections::BTreeMap;
use std::collections::HashSet;
use taffy::prelude::*;
use victor_tree::style::values::Direction;
use victor_tree::style::values::WritingMode;
use victor_tree::style::StyleSet;

lazy_static! {
    static ref NODE_IGNORE: HashSet<&'static str> =
        HashSet::from(["meta", "style", "link", "script", "head", "html"]);
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
    // // todo: use optional variable for clips or layout creation
    let mut taffy = Taffy::new();

    // let header_node: DefaultKey = taffy
    //     .new_leaf(Style {
    //         size: Size {
    //             width: points(800.0),
    //             height: points(100.0),
    //         },
    //         ..Default::default()
    //     })
    //     .unwrap();

    // let body_node = taffy
    //     .new_leaf(Style {
    //         size: Size {
    //             width: points(800.0),
    //             height: auto(),
    //         },
    //         flex_grow: 1.0,
    //         ..Default::default()
    //     })
    //     .unwrap();

    // We can get the x,y, and height, width of the element on proper tree insert

    // parse doc will start from html downwards
    // accessibility tree for ordered element mappings
    let mut accessibility_tree: BTreeMap<&str, Vec<(ElementRef<'_>, DefaultKey)>> =
        BTreeMap::from([("title".into(), Default::default())]);

    let mut layout_leafs: Vec<Node> = vec![];

    // let mut _match_context = match_context;

    let mut matching_context = match_context;
    let writing_direction = (WritingMode::HorizontalTb, Direction::Ltr);

    // push taffy layout in order from elements
    for node in document.tree.nodes() {
        match scraper_forky::element_ref::ElementRef::wrap(node) {
            Some(element) => {
                let name = element.value().name();
                // TODO: determine if children are found to get entire layout of children to vector first
                let layout_leaf = taffy
                    .new_leaf(Style {
                        // make nodes optional but, for now max out perf drawbacks
                        size: if NODE_IGNORE.contains(name) {
                            Size {
                                width: points(0.0),
                                height: points(0.0),
                            }
                        } else {
                            let style = victor_tree::style::cascade::style_for_element_ref(
                                &element,
                                &author,
                                &document,
                                &mut matching_context,
                            );
                            let style = style.as_ref();
                            let _physical_size =
                                style.box_size().size_to_physical(writing_direction);
                            // TODO: Build physical styles of each element as needed
                            // crate::console_log!("{name} {:?}", physical_size);
                            // crate::console_log!("{name} Margin {:?}", style.margin());
                            // crate::console_log!("{name} Padding {:?}", style.padding());
                            let padding_insent = style.padding().block_start;
                            // todo: make method to get entire size
                            let _padding_pxs = padding_insent.inner_px();
                            // crate::console_log!("{name} Padding Top {:?}", padding_pxs);
                            // IF the x and y is empty get the height based on the padding.
                            // If img has no height get the inherited from style width
                            // We may have to build the width/height if empty from paddings and margins
                            // TODO: use flex if element has a x or y but, not both to flex out entire layout.

                            Size {
                                width: points(800.0),
                                height: points(100.0),
                            }
                        },
                        // todo: get entire styles up front
                        flex_grow: if name == "body" { 1.0 } else { 0.0 },
                        ..Default::default()
                    })
                    .unwrap();

                layout_leafs.push(layout_leaf.clone());

                accessibility_tree
                    .entry(name)
                    .and_modify(|n| n.push((element, layout_leaf)))
                    .or_insert(Vec::from([(element, layout_leaf)]));
            }
            _ => (),
        };
    }

    // this is slow at the moment for large leafs being mocked
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

    taffy.compute_layout(root_node, Size::MAX_CONTENT).unwrap();
    // crate::console_log!("Last Element Position {:?}", taffy.layout(layout_leafs[layout_leafs.len() - 1]).unwrap());
    // console_log!("Getting tree links {:?}", accessibility_tree.get("a"));
    // console_log!("Tree {:?}", accessibility_tree);

    (accessibility_tree, taffy, matching_context)
}
