//! Test suite for the Web and headless browsers.

#![cfg(target_arch = "wasm32")]
extern crate wasm_bindgen_test;

mod mock;

use kayle_innate::get_document_links;
use wasm_bindgen_test::*;

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn _get_document_links() {
    let links = get_document_links(
        r#"
        <html>
            <body>
                <main>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                </main>
            </body>
        </html>
    "#,
        "",
    );

    let mut found = vec![];

    found.push(wasm_bindgen::JsValue::from_str("/"));
    found.push(wasm_bindgen::JsValue::from_str("/about"));

    assert_eq!(links, found.into_boxed_slice());

    let base_domain = "https://a11ywatch.com";

    let links = get_document_links(
        r#"
        <html>
            <body>
                <main>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/magic/">Magic</a>
                    <a href="https://www.meta.com">Meta</a>
                </main>
            </body>
        </html>
    "#,
        &base_domain,
    );

    let mut found = vec![];

    found.push(wasm_bindgen::JsValue::from_str(&format!("{base_domain}/")));
    found.push(wasm_bindgen::JsValue::from_str(&format!(
        "{base_domain}/about"
    )));
    found.push(wasm_bindgen::JsValue::from_str(&format!(
        "{base_domain}/magic/"
    )));

    assert_eq!(links, found.into_boxed_slice());
}

#[wasm_bindgen_test]
#[cfg(feature = "accessibility")]
fn _audit() {
    let _ = kayle_innate::_audit_not_ready(mock::MOCK_WEBSITE_HTML, &mock::MOCK_CSS_RULES, false);
}
