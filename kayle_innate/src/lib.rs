// all API conventions base mapped from https://www.leagueoflegends.com/en-pl/champions/kayle/

#[macro_use]
extern crate lazy_static;

mod utils;
use case_insensitive_string::CaseInsensitiveString;
use select::document::Document;
use select::predicate::Name;
use std::collections::HashSet;
use utils::{convert_abs_path, convert_base_path, set_panic_hook};
use wasm_bindgen::prelude::*;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
/// perform an audit based on tree rules using dom APIs at runtime with speed.
pub fn kayle() {
    set_panic_hook();
    alert("Kayle!");
}

#[wasm_bindgen]
/// setup a structure tree alg for parsing and find links in document. Allow user to perform hybrid audits realtime.
pub fn radiant_blast(res: &str, domain: &str) -> Box<[JsValue]> {
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
            let parent_host_scheme = base_url.scheme();
            let parent_host = base_url.host_str().unwrap_or_default();

            Document::from(res)
                .find(Name("a"))
                .filter_map(|n| match n.attr("href") {
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

                            let h = abs.as_str();
                            let hlen = h.len();

                            if hlen > 4 && !h.ends_with("/") {
                                let hchars = &h[hlen - 5..hlen];
                                if let Some(position) = hchars.find('.') {
                                    let resource_ext = &hchars[position + 1..hchars.len()];

                                    if !ONLY_RESOURCES.contains(&resource_ext.into()) {
                                        can_process = false;
                                    }
                                }
                            }

                            if can_process {
                                Some(JsValue::from_str(&h.to_string()))
                            } else {
                                None
                            }
                        } else {
                            None
                        };

                        process
                    }
                    _ => None,
                })
                .collect::<Vec<_>>()
        }
        _ => Document::from(res)
            .find(Name("a"))
            .filter_map(|n| match n.attr("href") {
                Some(link) => Some(JsValue::from_str(link)),
                _ => None,
            })
            .collect::<Vec<_>>(),
    };

    links.into_boxed_slice()
}

#[wasm_bindgen]
/// try to fix all possible issues using a spec against the tree.
pub fn celestial_blessing() {
    alert("Celestial blessing from kayle!");
}

#[wasm_bindgen]
/// use gpu to accelerate layout rendering or workers.
pub fn starfire_spellblade() {
    alert("Starfire Spellblase from kayle!");
}

#[wasm_bindgen]
/// Perform the a judgement against a page to determine effort, access, and more.
pub fn divine_judgement() {
    alert("Divine judgement from kayle!");
}
