use crate::wasm_bindgen;
use crate::JsValue;

use crate::utils::{convert_abs_path, convert_base_path, domain_name, set_panic_hook};
use case_insensitive_string::CaseInsensitiveString;
use std::collections::HashSet;

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
