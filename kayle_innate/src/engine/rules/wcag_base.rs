/// the success criteria to use
#[derive(Debug)]
pub enum Criteria {
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
pub enum Principle {
    /// Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.
    Perceivable,
    /// Make all functionality available from a keyboard.
    Operable,
    /// Make text content readable and understandable.
    Understandable,
    /// Maximize compatibility with current and future user agents, including assistive technologies.
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
pub enum Guideline {
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
