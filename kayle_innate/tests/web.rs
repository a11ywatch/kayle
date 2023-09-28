//! Test suite for the Web and headless browsers.

#![cfg(target_arch = "wasm32")]
extern crate wasm_bindgen_test;

use kayle_innate::{get_document_links, parse_accessibility_tree};
use wasm_bindgen_test::*;

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn _get_document_links() {
    let links = get_document_links(
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

    let links = get_document_links(
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

#[wasm_bindgen_test]
fn _parse_accessibility_tree() {
    parse_accessibility_tree(
        r#"<!DOCTYPE html>
        <html>
            <head>
                <title>My website</title>
                <meta name="description" content="Test for parsing tree">
                <link href="main.css" rel="stylesheet">
                <style>
                    html {
                        background: black;
                        font-size: 16px;
                    }
                    input {
                        color: black;
                    }
                </style>
            </head>
            <body>
                <header>
                    <nav>
                        <a href="/";>Home</a>
                        <a href="/about";>About</a>
                    </nav>
                </header>
                <main>
                    <h1>Some nice content</h1>
                    <p>Content ipsum</p>
                    <input type="text" placeholder="Phone number"></input>
                </main>
                <footer>
                    <ul style="background: green;">
                        <li>Access</li>
                    </ul>
                </footer>
            </body>
        </html>"#
    );
}