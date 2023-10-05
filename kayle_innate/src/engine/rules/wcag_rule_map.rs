use crate::console_log;
use crate::engine::rules::ids::Techniques;
use crate::engine::rules::rule::Rule;
use crate::engine::rules::wcag_base::{Criteria, Guideline, Principle};
use cssparser::ParserInput;
use std::collections::BTreeMap;

// todo: validate each element and add a shape that can prevent repitiion
lazy_static! {
    /// a list of rules that should be applied for WCAG1
    pub static ref RULES_A: BTreeMap<&'static str, Vec<Rule>> =
        vec![
            // empty titles
            ("title", Vec::from([
                Rule::new(Techniques::H25, Criteria::Error, Principle::Operable, Guideline::Navigable, |_rule, nodes, _document| {
                    (!nodes.is_empty(), "1.NoTitleEl", Default::default())
                }),
                Rule::new(Techniques::H25, Criteria::Error, Principle::Understandable, Guideline::Predictable, |_rule, nodes, _document| {
                    (nodes.is_empty() || nodes[0].html().is_some(), "2", Default::default())
                }),
            ])),
            // missing label
            ("form", Vec::from([
                Rule::new(Techniques::H32, Criteria::Error, Principle::Operable, Guideline::Predictable, |_rule, nodes, document| {
                    // check the first element for now
                    let mut valid = false;

                    for ele in nodes {
                        // valid styles for node
                        // match ele.as_element() {
                        //     Some(e) => {
                        //         let name = e.name.expanded().local;

                        //         if !name.is_empty() {
                        //             let parent_style = match ele.parent {
                        //                 Some(parent) =>  Some(victor::style::style_for_element(&document.style_set.as_ref().unwrap(), &document, parent, Default::default())),
                        //                 _ => None
                        //             };
                        //             match ele.node_id {
                        //                 Some(c) => {
                        //                     let s = victor::style::style_for_element(&document.style_set.as_ref().unwrap(), document, c, parent_style.as_deref());
                        //                     console_log!("computed style height {:?} - width {:?}", s.box_.height, s.box_.width);
                        //                 }
                        //                 _ => ()
                        //             }
                        //         }
                        //     }
                        //     _ => ()
                        // };

                        // todo: impl scraper select for elements or custom find.

                        match ele.as_element() {
                            Some(_) => {
                                match victor_tree::style::selectors::Selector::parse(&victor_tree::style::selectors::Parser, &mut cssparser::Parser::new(&mut ParserInput::new("button[type=submit]"))) {
                                    Ok(list) => {
                                        valid = match ele.node_id {
                                            Some(f) => {
                                                ele.matches(&list, &document, f)
                                            }
                                            _ => false
                                        }

                                    }
                                    _ => ()
                                };
                            }
                            _ => ()
                        }



                    }

                    (valid, "2", Default::default())
                }),
            ]))
        ]
        .into_iter()
        .collect();
}
