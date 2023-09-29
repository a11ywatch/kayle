#[macro_use]
extern crate lazy_static;

mod utils;
use case_insensitive_string::CaseInsensitiveString;
use std::collections::HashSet;
use utils::{convert_abs_path, convert_base_path, domain_name, set_panic_hook};
use wasm_bindgen::prelude::*;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

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

            let h = scraper::Html::parse_fragment(res);

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
            let h = scraper::Html::parse_fragment(res);

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
    html: &str,
) -> std::collections::BTreeMap<String, Vec<scraper::node::Element>> {
    set_panic_hook();
    use std::collections::BTreeMap;

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

    macro_rules! console_log {
        ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
    }

    console_log!("Starting accessibility tree parsing. This is incomplete and should not be used in production.");

    // STAPLE get the following for selecting
    // Element name.
    // Element siblings.
    // Element descendant.
    // Element props.
    // Challenges in binding css to nodes arise from external sheets.
    // The chrome browser we can set to ignore all assets and fetch them here but, it would be re-doing the wheel.
    // If we can send the Stylesheets from node to rust this could leverage the sheets attached since we just need the node references.

    let t = now();
    // parse doc will start from html downwards
    let h = scraper::Html::parse_document(html);
    // accessibility tree for ordered element mappings
    let mut accessibility_tree: BTreeMap<String, Vec<_>> = BTreeMap::new();
    let mut hh = h.tree.nodes();

    // measure select parsing doc 1:1 around 10ms
    while let Some(node) = hh.next() {
        if let Some(element) = node.value().as_element() {
            let element_name = element.name();
            // console_log!("{:?}", element_name);
            accessibility_tree
                .entry(element_name.to_string())
                .and_modify(|n| n.push(element.to_owned()))
                .or_insert(Vec::from([element.to_owned()]));
        }
    }

    console_log!("Scraper Parser: duration {:?}ms", now() - t);
    console_log!("Getting tree links {:?}", accessibility_tree.get("a"));
    // console_log!("Tree {:?}", accessibility_tree);

    accessibility_tree
}

#[wasm_bindgen]
/// audit a web page passing the html and css rules.
pub fn audit(html: &str, _css_rules: &str) {
    let _tree = parse_accessibility_tree(&html);
}

/// parse css tree to maps
pub fn parse_css(_css: &str) {
    // parse the css to a list of nodes capable of o1 getting results
}
