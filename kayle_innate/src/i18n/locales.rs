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
pub fn get_message(rule_id: &RuleID, lang: &str) -> &'static str {
    let message = LOCALES.get(&rule_id);

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
    pub static ref LOCALES: BTreeMap<RuleID, Messages> = {
        BTreeMap::from([
            // empty titles
            (RuleID::F25, Messages::new(&"Failure of Success Criterion 2.4.2 due to the title of a Web page not identifying the contents", "", ""))
        ])
    };
}
