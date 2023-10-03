use crate::engine::rules::ids::RuleID;
use std::collections::BTreeMap;

/// messages to display for issues
#[derive(std::cmp::Eq, PartialEq, PartialOrd, Ord)]
pub struct Messages {
    /// english
    en: &'static str,
    /// spanish
    es: &'static str,
    /// german
    de: &'static str,
    /// japanese
    ja: &'static str,
    /// portugese portugal
    pt_pt: &'static str,
    /// portugese brazil
    pt_br: &'static str,
    /// chinese cantanese
    zh_cn: &'static str,
    /// chinese traditional
    zh_tw: &'static str,
    /// hindi
    hi: &'static str,
}

pub enum Langs {
    /// english
    En,
    /// spanish
    Es,
    /// german
    De,
    /// japanese
    Ja,
    /// portugese portugal
    PtPt,
    /// portugese brazil
    PtBr,
    /// chinese cantanese
    ZhCn,
    /// chinese traditional
    ZhTw,
    /// hindi
    HI,
}

impl Langs {
    /// get the lang as a string
    pub fn as_str(&self) -> &'static str {
        match self {
            Langs::En => "en",
            Langs::Es => "es",
            Langs::De => "de",
            Langs::Ja => "ja",
            Langs::PtPt => "pt_pt",
            Langs::PtBr => "pt_br",
            Langs::ZhCn => "zh_cn",
            Langs::ZhTw => "zh_tw",
            Langs::HI => "hi",
        }
    }
}

/// the context of the issue
impl Messages {
    /// create a new message
    pub fn new(en: &'static str, es: &'static str, de: &'static str) -> Messages {
        Messages {
            en,
            es,
            de,
            ja: &"",
            pt_pt: &"",
            pt_br: &"",
            zh_cn: &"",
            zh_tw: &"",
            hi: &"",
        }
    }
}

/// parse
pub fn get_message(rule_id: &RuleID, section: &str, lang: &str) -> &'static str {
    let k = &[rule_id.as_str(), section].join(".");
    let message = LOCALES.get(&k.as_str());

    match message {
        Some(m) => match lang {
            "en" => m.en,
            "es" => m.es,
            _ => Default::default(),
        },
        _ => Default::default(),
    }
}

lazy_static! {
    /// message for an issue
    pub static ref LOCALES: BTreeMap<&'static str, Messages> = {
        BTreeMap::from([
            // empty titles
            (RuleID::H25.pairs()[0], Messages::new(&"A title should be provided for the document, using a non-empty title element in the head section.", "", "")),
            (RuleID::H25.pairs()[1], Messages::new(&"The title element in the head section should be non-empty.", "", ""))
        ])
    };
}
