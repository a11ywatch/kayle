//! Test suite for the Web and headless browsers.

#![cfg(target_arch = "wasm32")]

extern crate wasm_bindgen_test;
use kayle::radiant_blast;
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
    );
    let mut found = vec![];

    found.push(wasm_bindgen::JsValue::from_str("/"));
    found.push(wasm_bindgen::JsValue::from_str("/about"));

    assert_eq!(links, found.into_boxed_slice());
}
