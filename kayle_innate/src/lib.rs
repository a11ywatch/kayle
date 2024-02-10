#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
pub use wasm_bindgen::prelude::*;

#[macro_use]
extern crate lazy_static;

/// auto-kayle helpers to gather all links in a page.
mod links;
/// app utilities.
mod utils;

pub use links::get_document_links;

#[wasm_bindgen]
/// audit a web page passing the html and css rules.
pub fn audit(html: &str, css_rules: &str, clip: bool) -> Result<JsValue, JsValue> {
    use accessibility_rs::AuditConfig;
    let config = AuditConfig::new(&html, &css_rules, clip, "en");
    let audit = accessibility_rs::audit(config);

    // todo: map to JsValues instead of serde
    Ok(serde_wasm_bindgen::to_value(&audit)?)
}
