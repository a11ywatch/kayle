use scraper_forky::ElementRef;
use scraper_forky::Html;
use victor_tree::style::StyleSet;

use super::tree::parse_accessibility_tree;

/// the intro to an audit
pub struct Auditor<'a> {
    /// the html document
    pub document: &'a Html,
    /// the tree to map to nodes
    pub tree: std::collections::BTreeMap<&'a str, Vec<ElementRef<'a>>>,
    /// styles for the audit
    pub author: StyleSet,
    // /// the matching context for css selectors
    pub match_context: selectors::matching::MatchingContext<'a, scraper_forky::selector::Simple>,
}

impl<'a> Auditor<'a> {
    pub fn new(
        document: &'a Html,
        css_rules: &str,
        match_context: selectors::matching::MatchingContext<'a, scraper_forky::selector::Simple>,
    ) -> Auditor<'a> {
        use crate::{console_log, now};
        let t = now();
        let tree = parse_accessibility_tree(&document);
        console_log!("Tree Build Time {:?}", now() - t);
        let tt = now();

        // TODO: make stylesheet building optional and only on first requirement
        let author = {
            let mut author = victor_tree::style::StyleSetBuilder::new();
            if !css_rules.is_empty() {
                author.add_stylesheet(css_rules);
            } else {
                use markup5ever::local_name;
                match tree.get("style") {
                    Some(styles) => {
                        for node in styles {
                            // https://html.spec.whatwg.org/multipage/semantics.html#update-a-style-block
                            if let Some(type_attr) = node.attr(&local_name!("type")) {
                                if !type_attr.eq_ignore_ascii_case("text/css") {
                                    continue;
                                }
                                author.add_stylesheet(&node.inner_html())
                            }
                        }
                    }
                    _ => (),
                }
            }
            author.finish()
        };

        console_log!("StyleSheets Build Time {:?}", now() - tt);

        Auditor {
            document,
            tree,
            author,
            match_context,
        }
    }
}
