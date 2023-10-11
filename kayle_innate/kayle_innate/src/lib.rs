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
pub fn _audit_not_ready(html: &str, css_rules: &str, clip: bool) -> Result<JsValue, JsValue> {
    use accessibility_rs::AuditConfig;
    let config = AuditConfig::new(&html, &css_rules, clip, "en");
    let audit = accessibility_rs::audit(config);

    // todo: map to JsValues instead of serde
    Ok(serde_wasm_bindgen::to_value(&audit)?)
}
