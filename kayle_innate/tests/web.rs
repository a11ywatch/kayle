//! Test suite for the Web and headless browsers.

#![cfg(target_arch = "wasm32")]

extern crate wasm_bindgen_test;

use kayle_innate::radiant_blast;
use wasm_bindgen_test::*;

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn pass() {
    assert_eq!(1 + 1, 2);
}

#[wasm_bindgen_test]
fn _radiant_blast() {
    let links = radiant_blast(
        r#"
        <html>
            <body>
                <main>
                    <a href="/";>Home</a>
                    <a href="/about";>About</a>
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

    let links = radiant_blast(
        r#"
        <html>
            <body>
                <main>
                    <a href="/";>Home</a>
                    <a href="/about";>About</a>
                    <a href="/magic/";>Magic</a>
                    <a href="https://www.meta.com";>Meta</a>
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
