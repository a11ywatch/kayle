#[derive(PartialOrd, Ord, std::cmp::Eq, PartialEq, Hash, Debug)]
pub enum RuleID {
    /// no empty titles
    F25,
}

impl RuleID {
    /// get rule id to string
    pub fn as_str(&self) -> &'static str {
        match self {
            RuleID::F25 => "F25",
        }
    }
}
