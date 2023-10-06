use crate::style::errors::PropertyParseError;
use crate::style::properties::ComputedValues;
use crate::style::properties::{ComputedValuesForEarlyCascade, ComputedValuesForLateCascade};
use cssparser::Parser;

mod background;
mod border;
mod box_;
mod color;
mod fonts;
mod generic;
mod length;
mod writing_modes;

pub use self::{background::*, generic::*};
pub use self::{border::*, box_::*, color::*, fonts::*, length::*, writing_modes::*};

pub trait Parse: Sized {
    fn parse<'i, 't>(parser: &mut Parser<'i, 't>) -> Result<Self, PropertyParseError<'i>>;
}

pub struct CascadeContext<'a> {
    pub inherited: &'a ComputedValues,
    pub this: ComputedValuesForLateCascade<'a>,
}

pub struct EarlyCascadeContext<'a> {
    pub inherited: &'a ComputedValues,
    pub this: ComputedValuesForEarlyCascade<'a>,
}

pub trait SpecifiedValue {
    type SpecifiedValue;
}

pub trait FromSpecified: SpecifiedValue {
    fn from_specified(specified: &Self::SpecifiedValue, context: &CascadeContext) -> Self;
}

pub trait EarlyFromSpecified: SpecifiedValue {
    fn early_from_specified(
        specified: &Self::SpecifiedValue,
        context: &EarlyCascadeContext,
    ) -> Self;
}

#[derive(Copy, Clone, Parse)]
pub enum CssWideKeyword {
    Inherit,
    Initial,
    Unset,
}
