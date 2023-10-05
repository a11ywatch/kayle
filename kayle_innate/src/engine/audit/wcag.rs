use crate::engine::rules::wcag_rule_map::RULES_A;
use crate::i18n::locales::{get_message, Langs};
use crate::{console_log, engine::issue::Issue};
use scraper_forky::ElementRef;

/// baseline for all rules
#[derive(Default)]
pub struct WCAG3AA;

/// wcag rules to test for
impl WCAG3AA {
    /// init the rules
    pub fn audit(
        // allow tree mutation until threads or setup the tree with initial elements.
        tree: &std::collections::BTreeMap<&str, Vec<ElementRef<'_>>>,
        // _css: cssparser::Parser<'_, '_>,
        // todo: get configs like viewport
    ) -> Vec<Issue> {
        let mut issues: Vec<Issue> = Vec::new();

        // go through nodes and map to validation rules
        for node in tree {
            if RULES_A.contains_key(&*node.0) {
                let rules = RULES_A.get(&*node.0);
                match rules {
                    Some(rules) => {
                        for rule in rules {
                            let (valid, section, selector) =
                                (rule.validate)(&node.0, &node.1);

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
