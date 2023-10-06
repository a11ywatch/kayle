pub mod errors;
pub mod rules;
use crate::console_log;
use cssparser::{Parser, ParserInput};
use markup5ever::local_name;
use markup5ever::namespace_url;
use markup5ever::ns;
use scraper_forky::selector::Simple;
use scraper_forky::{ElementRef, Html};
use selectors::matching::MatchingContext;
use std::sync::Arc;
use victor_tree::style::cascade::USER_AGENT_STYLESHEET;
use victor_tree::style::declaration_block::DeclarationBlock;
use victor_tree::style::values::{Direction, WritingMode};
use victor_tree::style::{ComputedValues, StyleSet};

/// get the style for an element
pub fn style_for_element<'a>(
    author: &StyleSet,
    _document: &Html,
    node: ElementRef<'a>,
    parent_style: Option<&ComputedValues>,
    match_context: &mut MatchingContext<'_, Simple>,
) -> Arc<ComputedValues> {
    use smallvec::SmallVec;
    let style_attr_block;
    let mut matching = victor_tree::style::cascade::MatchingDeclarations {
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
            &node,
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
            &node,
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

    console_log!(
        "{:?}",
        styles
            .box_size()
            .size_to_physical((WritingMode::SidewaysLr, Direction::Ltr))
    );

    styles
}
