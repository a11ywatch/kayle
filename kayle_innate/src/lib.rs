// all API conventions base mapped from https://www.leagueoflegends.com/en-pl/champions/kayle/

mod utils;
use select::document::Document;
use select::predicate::Name;
use utils::set_panic_hook;
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
pub fn radiant_blast(res: &str) -> Box<[JsValue]> {
    set_panic_hook();
    let links = Document::from(res)
        .find(Name("a"))
        .filter_map(|n| match n.attr("href") {
            Some(link) => Some(JsValue::from_str(link)),
            _ => None,
        })
        .collect::<Vec<_>>();

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
