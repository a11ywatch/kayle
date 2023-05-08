// all API conventions base mapped from https://www.leagueoflegends.com/en-pl/champions/kayle/

mod utils;
use wasm_bindgen::prelude::*;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
/// perform an audit based on tree rules using dom APIs at runtime with speed.
pub fn kayle() {
    alert("Kayle!");
}

#[wasm_bindgen]
/// setup a structure tree alg for parsing.
pub fn radiant_blast() {
    alert("Radiant blast from kayle!");
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