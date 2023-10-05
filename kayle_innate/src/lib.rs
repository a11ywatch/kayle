#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
use wasm_bindgen::prelude::*;

#[macro_use]
extern crate lazy_static;

mod engine;
mod i18n;
mod utils;

use case_insensitive_string::CaseInsensitiveString;
#[cfg(feature = "accessibility")]
use scraper_forky::ElementRef;
#[cfg(feature = "accessibility")]
use std::collections::BTreeMap;
use std::collections::HashSet;
use utils::{convert_abs_path, convert_base_path, domain_name, set_panic_hook};

#[cfg(feature = "accessibility")]
#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_u32(a: u32);
    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_many(a: &str, b: &str);
    #[wasm_bindgen(js_namespace = Date)]
    fn now() -> u32;
}

#[cfg(feature = "accessibility")]
#[macro_export]
macro_rules! console_log {
    ($($t:tt)*) => (crate::log(&format_args!($($t)*).to_string()))
}

#[wasm_bindgen]
/// setup a structure tree alg for parsing and find links in document. Allow user to perform hybrid audits realtime.
pub fn get_document_links(res: &str, domain: &str) -> Box<[JsValue]> {
    set_panic_hook();

    lazy_static! {
        /// include only list of resources
        static ref ONLY_RESOURCES: HashSet<CaseInsensitiveString> = {
            let mut m: HashSet<CaseInsensitiveString> = HashSet::with_capacity(14);

            m.extend([
                "html", "htm", "asp", "aspx", "php", "jps", "jpsx",
                // handle .. prefix for urls ending with an extra ending
                ".html", ".htm", ".asp", ".aspx", ".php", ".jps", ".jpsx",
            ].map(|s| s.into()));

            m
        };
    }

    let links = match url::Url::parse(domain) {
        Ok(base) => {
            let base_url = convert_base_path(base);
            let base_domain = domain_name(&base_url);
            let parent_host_scheme = base_url.scheme();
            let parent_host = base_url.host_str().unwrap_or_default();

            let h = scraper_forky::Html::parse_fragment(res);

            h.tree
                .into_iter()
                .filter_map(|node| {
                    if let Some(element) = node.as_element() {
                        if element.name() == "a" {
                            match element.attr("href") {
                                Some(link) => {
                                    let mut abs = convert_abs_path(&base_url, link);
                                    let mut can_process = match abs.host_str() {
                                        Some(host) => parent_host.ends_with(host),
                                        _ => false,
                                    };

                                    let process = if can_process {
                                        if abs.scheme() != parent_host_scheme {
                                            let _ = abs.set_scheme(parent_host_scheme);
                                        }

                                        let hchars = abs.path();

                                        if let Some(position) = hchars.find('.') {
                                            let resource_ext = &hchars[position + 1..hchars.len()];

                                            if !ONLY_RESOURCES.contains::<CaseInsensitiveString>(
                                                &resource_ext.into(),
                                            ) {
                                                can_process = false;
                                            }
                                        }

                                        if can_process
                                            && (base_domain.is_empty()
                                                || base_domain == domain_name(&abs))
                                        {
                                            Some(JsValue::from_str(&abs.as_str()))
                                        } else {
                                            None
                                        }
                                    } else {
                                        None
                                    };

                                    process
                                }
                                _ => None,
                            }
                        } else {
                            None
                        }
                    } else {
                        None
                    }
                })
                .collect::<Vec<_>>()
        }
        _ => {
            let h = scraper_forky::Html::parse_fragment(res);

            h.tree
                .into_iter()
                .filter_map(|node| {
                    if let Some(element) = node.as_element() {
                        if element.name() == "a" {
                            match element.attr("href") {
                                Some(link) => {
                                    // TODO: validate only web links
                                    Some(JsValue::from_str(&link))
                                }
                                _ => None,
                            }
                        } else {
                            None
                        }
                    } else {
                        None
                    }
                })
                .collect::<Vec<_>>()
        }
    };

    links.into_boxed_slice()
}

// RUST_LOG=info wasm-pack test --firefox --headless --features accessibility --release
#[cfg(feature = "accessibility")]
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

    let t = now();
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

    console_log!("Scraper Parser: duration {:?}ms", now() - t);
    // console_log!("Getting tree links {:?}", accessibility_tree.get("a"));
    // console_log!("Tree {:?}", accessibility_tree);

    accessibility_tree
}

#[wasm_bindgen]
#[cfg(feature = "accessibility")]
/// audit a web page passing the html and css rules.
pub fn _audit_not_ready(html: &str, _css_rules: &str) -> Result<JsValue, JsValue> {
    let html = scraper_forky::Html::parse_document(html);
    let _tree = parse_accessibility_tree(&html);
    // TODO: if the css rules are empty extract the css from the HTML
    // let css_rules = &mut cssparser::ParserInput::new(&_css_rules);
    // TODO: build the rules to css blocks that selectors can be used to find the element of the style.
    // let mut _css_parser = cssparser::Parser::new(css_rules);
    // let css_rules_parser = cssparser::RuleListParser::new_for_stylesheet(
    //     &mut _css_parser,
    //     crate::engine::styles::rules::RulesParser,
    // );
    let _author = if !_css_rules.is_empty() {
        let mut author = victor_tree::style::StyleSetBuilder::new();
        author.add_stylesheet(_css_rules);
        author.finish()
    } else {
        let mut author = victor_tree::style::StyleSetBuilder::new();
        author.add_stylesheet("");
        author.finish()
    };   

    // console_log!("CSS RULES: {:?}", author);

    let _audit = engine::audit::wcag::WCAG3AA::audit(&_tree);

    // // TODO: build struct that can keep lifetimes
    let mut nth_index_cache = selectors::NthIndexCache::from(Default::default());
    let mut match_context = selectors::matching::MatchingContext::new(
        selectors::matching::MatchingMode::Normal,
        None,
        Some(&mut nth_index_cache),
        selectors::matching::QuirksMode::NoQuirks,
        // selectors::matching::NeedsSelectorFlags::No,
        // selectors::matching::IgnoreNthChildForInvalidation::No,
    );

    for item in _tree {
        for node in item.1 {
            let id = node.id();
            // todo: use the css block style to get computations
            for &(ref selector, ref _block) in &_author.rules {
                if selectors::matching::matches_selector(
                    selector,
                    0,
                    None,
                    &node,
                    &mut match_context,
                    &mut |_, _| {},
                ) {
                    // build all the styles for the element based on the match
                    // into.push(_block)
                    let _style = crate::engine::styles::style_for_element(&_author, &html, node, None);
                    console_log!("Style Match {:?} - Style {:?}", id, _style);
                }
            }
        }
    }

    // todo: map to JsValues instead of serde
    Ok(serde_wasm_bindgen::to_value(&_audit)?)
}
