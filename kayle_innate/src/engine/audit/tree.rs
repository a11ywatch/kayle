use scraper_forky::ElementRef;
use std::collections::BTreeMap;

/// try to fix all possible issues using a spec against the tree.
pub fn parse_accessibility_tree(
    html: &scraper_forky::Html,
    // todo: return the nodes with a tuple of the layout node and the element node
) -> std::collections::BTreeMap<&str, Vec<ElementRef<'_>>> {
    // use taffy::prelude::*;
    // // todo: use optional variable for clips or layout creation
    // let mut taffy = Taffy::new();

    // let header_node = taffy
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

    // let root_node = taffy
    //     .new_with_children(
    //         Style {
    //             flex_direction: FlexDirection::Column,
    //             size: Size {
    //                 width: points(800.0),
    //                 height: points(600.0),
    //             },
    //             ..Default::default()
    //         },
    //         &[header_node, body_node],
    //     )
    //     .unwrap();

    // // Call compute_layout on the root of your tree to run the layout algorithm
    // taffy.compute_layout(root_node, Size::MAX_CONTENT).unwrap();
    // console_log!("Header Layout {:?}", taffy.layout(header_node).unwrap());
    // We can get the x,y, and height, width of the element on proper tree insert

    // parse doc will start from html downwards
    // accessibility tree for ordered element mappings
    let mut accessibility_tree: BTreeMap<&str, Vec<ElementRef<'_>>> =
        BTreeMap::from([("title".into(), Default::default())]);

    for node in html.tree.nodes() {
        match scraper_forky::element_ref::ElementRef::wrap(node) {
            Some(element) => {
                accessibility_tree
                    .entry(element.value().name())
                    .and_modify(|n| n.push(element))
                    .or_insert(Vec::from([element]));
            }
            _ => (),
        };
    }

    // console_log!("Getting tree links {:?}", accessibility_tree.get("a"));
    // console_log!("Tree {:?}", accessibility_tree);

    accessibility_tree
}
