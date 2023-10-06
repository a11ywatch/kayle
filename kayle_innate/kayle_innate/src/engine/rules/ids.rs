use std::vec;

#[derive(PartialOrd, Ord, std::cmp::Eq, PartialEq, Hash, Debug)]
/// techniques for WCAG https://www.w3.org/TR/WCAG20-TECHS/
pub enum Techniques {
    H25,
    H32,
}

impl Techniques {
    /// get rule id to string
    pub fn as_str(&self) -> &'static str {
        match self {
            Techniques::H25 => "H25",
            Techniques::H32 => "H32",
        }
    }
    /// get pairs for a rule
    pub fn pairs(&self) -> Vec<&'static str> {
        match self {
            Techniques::H25 => vec!["H25.1.NoTitleEl", "H25.1.EmptyTitle"],
            Techniques::H32 => vec!["H32.2"],
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
