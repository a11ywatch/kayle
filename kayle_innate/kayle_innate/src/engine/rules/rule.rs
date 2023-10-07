use slotmap::DefaultKey;

use crate::engine::rules::ids::Techniques;
use crate::engine::rules::wcag_base::{Criteria, Guideline, Principle};
use crate::ElementRef;

/// the rule validation method that should be performed.
pub struct Rule {
    /// the message id of the rule to point to the locale
    pub rule_id: Techniques,
    /// the type of rule
    pub criteria: Criteria,
    /// validate a test returns (valid, rule, selectors)
    pub validate:
        fn(&str, &Vec<(ElementRef<'_>, DefaultKey)>) -> (bool, &'static str, Vec<&'static str>),
    /// the principle type
    pub principle: Principle,
    /// the guideline to follow
    pub guideline: Guideline,
}

impl Rule {
    /// a new rule type
    pub fn new(
        rule_id: Techniques,
        criteria: Criteria,
        principle: Principle,
        guideline: Guideline,
        validate: fn(
            &str,
            &Vec<(ElementRef<'_>, DefaultKey)>,
        ) -> (bool, &'static str, Vec<&'static str>),
    ) -> Rule {
        Rule {
            rule_id,
            criteria,
            guideline,
            principle,
            validate,
        }
    }
}
