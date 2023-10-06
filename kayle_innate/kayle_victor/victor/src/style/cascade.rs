use crate::dom;
use crate::style::declaration_block::DeclarationBlock;
use crate::style::properties::{ComputedValues, Phase};
use crate::style::rules::{CssRule, RulesParser};
use cssparser::{Parser, ParserInput, RuleListParser};
use scraper_forky::selectors::matching::MatchingContext;
use scraper_forky::{ElementRef, Html};
use smallvec::SmallVec;
use std::sync::Arc;

pub struct StyleSetBuilder(StyleSet);

#[derive(Clone, Debug)]
pub struct StyleSet {
    pub rules: Vec<(crate::style::selectors::Selector, Arc<DeclarationBlock>)>,
}

lazy_static::lazy_static! {
    pub static ref USER_AGENT_STYLESHEET: StyleSet = {
        let mut builder = StyleSetBuilder::new();
        builder.add_stylesheet(include_str!("user_agent.css"));
        builder.finish()
    };
}

impl StyleSetBuilder {
    pub fn new() -> Self {
        StyleSetBuilder(StyleSet { rules: Vec::new() })
    }

    pub fn add_stylesheet(&mut self, css: &str) {
        let mut input = ParserInput::new(css);
        let mut parser = Parser::new(&mut input);
        for result in RuleListParser::new_for_stylesheet(&mut parser, RulesParser) {
            match result {
                Ok(CssRule::StyleRule { selectors, block }) => {
                    for selector in selectors.0 {
                        self.0.rules.push((selector, block.clone()));
                    }
                }
                Err(_) => {
                    // FIXME: error reporting
                }
            }
        }
    }

    pub fn finish(mut self) -> StyleSet {
        // Sort stability preserves document order for rules of equal specificity
        self.0
            .rules
            .sort_by_key(|&(ref selector, _)| selector.specificity());
        self.0
    }
}

impl StyleSet {
    pub fn push_matching<'a>(
        &'a self,
        document: &dom::Document,
        node: dom::NodeId,
        into: &mut SmallVec<impl smallvec::Array<Item = &'a DeclarationBlock>>,
    ) {
        for &(ref selector, ref block) in &self.rules {
            if crate::style::selectors::matches(selector, document, node) {
                into.push(block)
            }
        }
    }
}

pub struct MatchingDeclarations<'a> {
    pub ua: SmallVec<[&'a DeclarationBlock; 8]>,
    pub author: SmallVec<[&'a DeclarationBlock; 32]>,
}

impl MatchingDeclarations<'_> {
    pub fn cascade(&self, p: &mut impl Phase) {
        // https://drafts.csswg.org/css-cascade-4/#cascade-origin
        self.ua.iter().for_each(|b| b.cascade_normal(p));
        self.author.iter().for_each(|b| b.cascade_normal(p));
        self.author.iter().for_each(|b| b.cascade_important(p));
        self.ua.iter().for_each(|b| b.cascade_important(p));
    }
}

pub fn style_for_element(
    author: &StyleSet,
    document: &dom::Document,
    node: dom::NodeId,
    parent_style: Option<&ComputedValues>,
) -> Arc<ComputedValues> {
    match document[node].as_element() {
        Some(element) => {
            let style_attr_block;
            let mut matching = MatchingDeclarations {
                ua: SmallVec::new(),
                author: SmallVec::new(),
            };
            USER_AGENT_STYLESHEET.push_matching(document, node, &mut matching.ua);
            author.push_matching(document, node, &mut matching.author);
            if let ns!(html) | ns!(svg) | ns!(mathml) = element.name.ns {
                if let Some(style_attr) = element.get_attr(&local_name!("style")) {
                    let mut input = ParserInput::new(style_attr);
                    let mut parser = Parser::new(&mut input);
                    style_attr_block = DeclarationBlock::parse(&mut parser);
                    matching.author.push(&style_attr_block);
                }
            }
            ComputedValues::new(parent_style, Some(&matching))
        }
        _ => ComputedValues::new(None, None),
    }
}

pub fn _style_for_element<'a>(
    author: &StyleSet,
    _document: &scraper_forky::Html,
    node: &ElementRef<'a>,
    parent_style: Option<&ComputedValues>,
    match_context: &mut MatchingContext<'_, scraper_forky::selector::Simple>,
) -> Arc<ComputedValues> {
    // use smallvec::SmallVec;
    let style_attr_block;
    let mut matching = crate::style::cascade::MatchingDeclarations {
        ua: SmallVec::new(),
        author: SmallVec::new(),
    };

    // let mut nth_index_cache = selectors::NthIndexCache::from(Default::default());
    // let mut match_context = selectors::matching::MatchingContext::new(
    //     selectors::matching::MatchingMode::Normal,
    //     None,
    //     Some(&mut nth_index_cache),
    //     selectors::matching::QuirksMode::NoQuirks,
    //     // selectors::matching::NeedsSelectorFlags::No,
    //     // selectors::matching::IgnoreNthChildForInvalidation::No,
    // );

    for &(ref selector, ref block) in &USER_AGENT_STYLESHEET.rules {
        if selectors::matching::matches_selector(
            selector,
            0,
            None,
            node,
            match_context,
            &mut |_, _| {},
        ) {
            matching.ua.push(block)
        }
    }

    // push author style sheet
    for &(ref selector, ref block) in &author.rules {
        if selectors::matching::matches_selector(
            selector,
            0,
            None,
            node,
            match_context,
            &mut |_, _| {},
        ) {
            matching.author.push(block)
        }
    }

    if let ns!(html) | ns!(svg) | ns!(mathml) = node.value().name.ns {
        if let Some(style_attr) = node.value().attr(&local_name!("style")) {
            let mut input = ParserInput::new(style_attr);
            let mut parser = Parser::new(&mut input);
            style_attr_block = DeclarationBlock::parse(&mut parser);
            matching.author.push(&style_attr_block);
        }
    }

    let styles = ComputedValues::new(parent_style, Some(&matching));

    styles
}

/// get the style for a node parsed with scraper
pub fn style_for_element_ref(
    node: &ElementRef,
    style_set: &StyleSet,
    document: &Html,
    mut match_context: &mut MatchingContext<'_, scraper_forky::selector::Simple>,
) -> Arc<ComputedValues> {
    let parent_styles = match node.parent() {
        Some(n) => match scraper_forky::element_ref::ElementRef::wrap(n) {
            Some(element) => {
                let _parent_styles =
                    _style_for_element(&style_set, &document, &element, None, &mut match_context);
                Some(_parent_styles)
            }
            _ => None,
        },
        _ => None,
    };
    _style_for_element(
        &style_set,
        &document,
        node,
        parent_styles.as_deref(),
        &mut match_context,
    )
}
