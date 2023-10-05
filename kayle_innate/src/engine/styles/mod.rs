pub mod errors;
pub mod rules;
use std::sync::Arc;
use scraper_forky::{Html, ElementRef};
use victor_tree::style::{StyleSet, ComputedValues};

/// get the style for an element
pub fn style_for_element<'a>(
    author: &StyleSet,
    document: &Html,
    node: ElementRef<'a>,
    parent_style: Option<&ComputedValues>,
) -> Arc<ComputedValues> {
    // use smallvec::SmallVec;
    // let style_attr_block;
    // let mut matching = MatchingDeclarations {
    //     ua: SmallVec::new(),
    //     author: SmallVec::new(),
    // };

    for &(ref selector, ref block) in &author.rules {
        // if selectors::matches(selector, document, node) {
        //     into.push(block)
        // }
    }

    ComputedValues::new(None, None)
    // USER_AGENT_STYLESHEET.push_matching(document, node, &mut matching.ua);
    // author.push_matching(document, node, &mut matching.author);
    // if let ns!(html) | ns!(svg) | ns!(mathml) = element.name.ns {
    //     if let Some(style_attr) = element.get_attr(&local_name!("style")) {
    //         let mut input = ParserInput::new(style_attr);
    //         let mut parser = Parser::new(&mut input);
    //         style_attr_block = DeclarationBlock::parse(&mut parser);
    //         matching.author.push(&style_attr_block);
    //     }
    // }
    // ComputedValues::new(parent_style, Some(&matching))


    // match node.as_element() {
    //     Some(element) => {
            // let style_attr_block;
            // let mut matching = MatchingDeclarations {
            //     ua: SmallVec::new(),
            //     author: SmallVec::new(),
            // };
            // // USER_AGENT_STYLESHEET.push_matching(document, node, &mut matching.ua);
            // author.push_matching(document, node, &mut matching.author);
            // if let ns!(html) | ns!(svg) | ns!(mathml) = element.name.ns {
            //     if let Some(style_attr) = element.get_attr(&local_name!("style")) {
            //         let mut input = ParserInput::new(style_attr);
            //         let mut parser = Parser::new(&mut input);
            //         style_attr_block = DeclarationBlock::parse(&mut parser);
            //         matching.author.push(&style_attr_block);
            //     }
            // }
            // ComputedValues::new(parent_style, Some(&matching))
        // }
        // _ => ComputedValues::new(None, None),
    // }
}