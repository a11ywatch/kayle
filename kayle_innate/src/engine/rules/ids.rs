use std::vec;

#[derive(PartialOrd, Ord, std::cmp::Eq, PartialEq, Hash, Debug)]
pub enum RuleID {
    /// no empty titles
    H25,
}

impl RuleID {
    /// get rule id to string
    pub fn as_str(&self) -> &'static str {
        match self {
            RuleID::H25 => "H25",
        }
    }
    /// get pairs for a rule
    pub fn pairs(&self) -> Vec<&'static str> {
        match self {
            RuleID::H25 => vec!["H25.1.NoTitleEl", "H25.1.EmptyTitle"],
        }
    }
    // /// get the value of the rule id with the pair
    // pub fn index(&self, i: usize) -> String {
    //     let pair = self.pairs();

    //     if pair.len() <= i {
    //         self.as_str().to_owned() + pair[i]
    //     } else {
    //         self.as_str().into()
    //     }
    // }
}
