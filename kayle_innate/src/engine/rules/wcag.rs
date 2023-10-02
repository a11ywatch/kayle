use std::collections::HashMap;

use crate::{console_log, engine::issue::Issue};

#[derive(std::cmp::Eq, PartialEq, Hash, Debug)]
enum RuleID {
    /// no empty titles
    F25,
}

/// the success criteria to use
#[derive(Debug)]
enum Criteria {
    /// a hard error that should be fixed
    Error,
    /// a warning that may be an issue
    Warning,
    /// a generic notice to help accessibility needs
    Notice,
}

/// the rule validation method that should be performed.
struct Rule {
    /// the message id of the rule to point to the locale
    pub rule_id: RuleID,
    /// the type of rule
    pub criteria: Criteria,
    /// validate a test
    pub validate:
        fn(&String, &Vec<scraper::node::Element>, css: &cssparser::Parser<'_, '_>) -> bool,
}

impl Rule {
    /// a new rule type
    pub fn new(
        rule_id: RuleID,
        criteria: Criteria,
        validate: fn(&String, &Vec<scraper::node::Element>, &cssparser::Parser<'_, '_>) -> bool,
    ) -> Rule {
        Rule {
            rule_id,
            criteria,
            validate,
        }
    }
}

lazy_static! {
    /// a list of rules that should be applied for WCAG1
    static ref RULES_A: HashMap<&'static str, Vec<Rule>> =
        vec![("title", Vec::from([Rule::new(RuleID::F25, Criteria::Error, |_rule, elements, _css_parser| {
            !elements.is_empty()
        })]))]
            .into_iter()
            .collect();
}

/// baseline for all rules
#[derive(Default)]
pub struct WCAG3AA {}

/// wcag rules to test for
impl WCAG3AA {
    /// init the rules
    pub fn audit(
        // allow tree mutation until threads or setup the tree with initial elements.
        mut tree: std::collections::BTreeMap<String, Vec<scraper::node::Element>>,
        _css: cssparser::Parser<'_, '_>,
        // todo: get configs like viewport
    ) -> Vec<Issue> {
        // pre populate must have keys
        if !tree.contains_key("title") {
            tree.insert("title".into(), Default::default());
        }

        // go through nodes and map to validation rules
        for node in tree {
            if RULES_A.contains_key(&*node.0) {
                let rules = RULES_A.get(&*node.0);
                match rules {
                    Some(rules) => {
                        for rule in rules {
                            let valid = (rule.validate)(&node.0, &node.1, &_css);
                            console_log!(
                                "RULE {:?} {:?} Valid: {:?}",
                                rule.rule_id,
                                rule.criteria,
                                valid
                            );
                        }
                    }
                    _ => (),
                }
            }
        }

        Default::default()
    }
}
