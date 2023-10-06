#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
pub use wasm_bindgen::prelude::*;

#[macro_use]
extern crate lazy_static;

/// the main engine for audits
mod engine;
/// locales
mod i18n;
/// used for auto-kayle to gather all links in a page.
mod links;
/// helpers
mod utils;

#[cfg(feature = "accessibility")]
use crate::engine::audit::auditor::Auditor;
#[cfg(feature = "accessibility")]
use scraper_forky::ElementRef;

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
#[cfg(feature = "accessibility")]
/// audit a web page passing the html and css rules.
pub fn _audit_not_ready(html: &str, css_rules: &str) -> Result<JsValue, JsValue> {
    let t = now();
    let document = scraper_forky::Html::parse_document(html);
    console_log!("Parse Document Time {:?}", now() - t);
    let mut nth_index_cache = selectors::NthIndexCache::from(Default::default());
    let auditor = Auditor::new(
        &document,
        &css_rules,
        engine::styles::css_cache::build_matching_context(&mut nth_index_cache),
    );
    let ttt = now();
    let _audit = engine::audit::wcag::WCAG3AA::audit(&auditor);
    console_log!("Audit Time {:?}", now() - ttt);
    
    // let mut _match_context = auditor.match_context;

    // for item in auditor.tree {
    //     for node in item.1 {
    //         let _style = victor_tree::style::cascade::style_for_element_ref(
    //             &node,
    //             &auditor.author,
    //             &document,
    //             &mut _match_context,
    //         );
    //         console_log!("{:?}", _style.as_ref().box_size())
    //     }
    // }

    // todo: map to JsValues instead of serde
    Ok(serde_wasm_bindgen::to_value(&_audit)?)
}
