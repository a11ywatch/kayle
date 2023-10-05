use crate::engine::styles::errors::RuleParseErrorKind;
use cssparser::{AtRuleParser, ParseError, QualifiedRuleParser};
use scraper::selector::Simple;
use selectors::parser::ParseRelative;
use std::sync::Arc;

#[derive(Debug)]
pub enum CssRule {
    StyleRule {
        selectors: selectors::SelectorList<Simple>,
        block: Arc<String>,
    },
}

pub struct Parser;

impl<'i> selectors::parser::Parser<'i> for Parser {
    type Impl = Simple;
    type Error = RuleParseErrorKind<'i>;
}

pub type SelectorList = selectors::SelectorList<Simple>;
// pub type Selector = selectors::parser::Selector<Simple>;

pub struct RulesParser;

impl<'i> QualifiedRuleParser<'i> for RulesParser {
    type Prelude = SelectorList;
    type QualifiedRule = CssRule;
    type Error = RuleParseErrorKind<'i>;

    fn parse_prelude<'t>(
        &mut self,
        parser: &mut cssparser::Parser<'i, 't>,
    ) -> Result<Self::Prelude, ParseError<'i, Self::Error>> {
        SelectorList::parse(&Parser, parser, ParseRelative::No)
    }

    fn parse_block<'t>(
        &mut self,
        prelude: Self::Prelude,
        _location: &cssparser::ParserState,
        _parser: &mut cssparser::Parser<'i, 't>,
    ) -> Result<Self::QualifiedRule, ParseError<'i, Self::Error>> {
        Ok(CssRule::StyleRule {
            selectors: prelude,
            block: Arc::new(String::new()),
        })
    }
}

impl<'i> AtRuleParser<'i> for RulesParser {
    type Prelude = ();
    type AtRule = CssRule;
    type Error = RuleParseErrorKind<'i>;
}
