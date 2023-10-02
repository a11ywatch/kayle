/// clip bounding box
#[derive(Default, Debug)]
pub struct Clip {
    /// the x coords
    pub x: u32,
    /// the y coords
    pub y: u32,
    /// the element height
    pub height: u32,
    /// the element width
    pub width: u32,
}

/// issue details
#[derive(Default, Debug)]
pub struct Issue {
    /// the context of the issue or raw html
    pub context: &'static str,
    /// the selector to identify the issue with css, xpath, or raw path
    pub selector: &'static str,
    /// the type of code for the issue
    pub code: &'static str,
    /// the type of issue
    pub issue_type: &'static str,
    /// the typecode of the issue 0,1,2
    pub type_code: u8,
    /// the message of the issue
    pub message: &'static str,
    /// the type of runner
    pub runner: &'static str,
    /// extra details for the runner
    pub runner_extras: std::collections::HashMap<String, String>,
    /// the amount of times the issue appeared
    pub recurrence: u32,
    /// the visual position of the element
    pub clip: Option<Clip>,
}

impl Issue {
    /// create a new issue
    pub fn new(message: &'static str) -> Issue {
        Issue {
            message,
            ..Default::default()
        }
    }
}
