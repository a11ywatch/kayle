use crate::engine::rules::ids::Techniques;
use crate::i18n::locales::{get_message, Langs};
use crate::{console_log, engine::issue::Issue};
use scraper::Selector;
use scraper::{ElementRef, Html};
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
    /// Provide ways to help users navigate, find content, and determine where they are.
    Navigable,
    /// Make Web pages appear and operate in predictable ways.
    Predictable,
}

impl Guideline {
    pub fn as_str(&self) -> &'static str {
        match self {
            Guideline::Navigable => "Guideline2_4",
            Guideline::Predictable => "Guideline3_2",
        }
    }
}

/// the rule validation method that should be performed.
struct Rule {
    /// the message id of the rule to point to the locale
    pub rule_id: Techniques,
    /// the type of rule
    pub criteria: Criteria,
    /// validate a test returns (valid, rule, selectors)
    pub validate: fn(
        &String,
        &Vec<ElementRef<'_>>,
        css: &cssparser::Parser<'_, '_>,
    ) -> (bool, &'static str, Vec<&'static str>),
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
            &String,
            &Vec<ElementRef<'_>>,
            &cssparser::Parser<'_, '_>,
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

// todo: validate each element and add a shape that can prevent repitiion
lazy_static! {
    /// a list of rules that should be applied for WCAG1
    static ref RULES_A: BTreeMap<&'static str, Vec<Rule>> =
        vec![
            // empty titles
            ("title", Vec::from([
                Rule::new(Techniques::H25, Criteria::Error, Principle::Operable, Guideline::Navigable, |_rule, nodes, _css_parser| {
                    (!nodes.is_empty(), "1.NoTitleEl", Default::default())
                }),
                Rule::new(Techniques::H25, Criteria::Error, Principle::Understandable, Guideline::Predictable, |_rule, nodes, _css_parser| {
                    (nodes.is_empty() || nodes[0].html().is_empty(), "2", Default::default())
                }),
            ])),
            // missing label
            ("form", Vec::from([
                Rule::new(Techniques::H32, Criteria::Error, Principle::Operable, Guideline::Predictable, |_rule, nodes, _css_parser| {
                    // check the first element for now
                    let mut valid = false;

                    for ele in nodes {
                        let selector = unsafe { Selector::parse("button[type=submit]").unwrap_unchecked() };
                        valid = match ele.select(&selector).next() {
                            Some(_) => true,
                            _ => false
                        };
                    }

                    (valid, "2", Default::default())
                }),
            ]))
        ]
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
        mut tree: std::collections::BTreeMap<String, Vec<ElementRef<'_>>>,
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
                            let (valid, section, selector) =
                                (rule.validate)(&node.0, &node.1, &_css);

                            if !valid {
                                // get locales prior or from document
                                let message =
                                    get_message(&rule.rule_id, &section, &Langs::En.as_str());
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
                                    selector,
                                );
                                issues.push(issue);
                            }

                            console_log!(
                                "RULE {:?} {:?} {:?} Valid: {:?}",
                                rule.rule_id,
                                rule.criteria,
                                section,
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
