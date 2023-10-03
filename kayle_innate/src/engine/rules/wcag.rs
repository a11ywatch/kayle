use crate::engine::rules::ids::RuleID;
use crate::i18n::locales::{get_message, Langs};
use crate::{console_log, engine::issue::Issue};
use std::collections::BTreeMap;

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

impl Criteria {
    /// get rule id to string
    pub fn as_str(&self) -> &'static str {
        match self {
            Criteria::Error => "error",
            Criteria::Warning => "warning",
            Criteria::Notice => "notice",
        }
    }
}

/// wcag principle to follow
enum Principle {
    Perceivable,
    Operable,
    Understandable,
    Robust,
}

impl Principle {
    pub fn as_str(&self) -> &'static str {
        match self {
            Principle::Perceivable => "Principle1",
            Principle::Operable => "Principle2",
            Principle::Understandable => "Principle3",
            Principle::Robust => "Principle4",
        }
    }
}

/// wcag principle to follow
enum Guideline {
    Navigable,
}

impl Guideline {
    pub fn as_str(&self) -> &'static str {
        match self {
            Guideline::Navigable => "Guideline2_4",
        }
    }
}

/// the rule validation method that should be performed.
struct Rule {
    /// the message id of the rule to point to the locale
    pub rule_id: RuleID,
    /// the type of rule
    pub criteria: Criteria,
    /// validate a test
    pub validate: fn(
        &String,
        &Vec<scraper::node::Element>,
        css: &cssparser::Parser<'_, '_>,
    ) -> (bool, &'static str),
    /// the principle type
    pub principle: Principle,
    /// the guideline to follow
    pub guideline: Guideline,
}

impl Rule {
    /// a new rule type
    pub fn new(
        rule_id: RuleID,
        criteria: Criteria,
        principle: Principle,
        guideline: Guideline,
        validate: fn(
            &String,
            &Vec<scraper::node::Element>,
            &cssparser::Parser<'_, '_>,
        ) -> (bool, &'static str),
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

lazy_static! {
    /// a list of rules that should be applied for WCAG1
    static ref RULES_A: BTreeMap<&'static str, Vec<Rule>> =
        vec![("title", Vec::from([
             Rule::new(RuleID::H25, Criteria::Error, Principle::Operable, Guideline::Navigable, |_rule, elements, _css_parser| {
                (!elements.is_empty(), "1.NoTitleEl")
             }),
            //  Rule::new(RuleID::H25, Criteria::Error, Principle::Operable, Guideline::Navigable, |_rule, elements, _css_parser| {
            //     (!elements.is_empty(), "1.EmptyTitle")
            // }),
        ]))]
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

        let mut issues: Vec<Issue> = Vec::new();

        // go through nodes and map to validation rules
        for node in tree {
            if RULES_A.contains_key(&*node.0) {
                let rules = RULES_A.get(&*node.0);
                match rules {
                    Some(rules) => {
                        for rule in rules {
                            let (valid, section) = (rule.validate)(&node.0, &node.1, &_css);

                            if !valid {
                                // get locales prior or from document
                                let message =
                                    get_message(&rule.rule_id, &section, &Langs::En.as_str());
                                // todo: add rest of properties
                                let issue = Issue::new(
                                    message,
                                    &node.0,
                                    &[
                                        "WCAGAAA",
                                        rule.principle.as_str(),
                                        rule.guideline.as_str(),
                                        rule.rule_id.as_str(),
                                    ]
                                    .join("."),
                                    rule.criteria.as_str(),
                                );
                                issues.push(issue);
                            }

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

        issues
    }
}
