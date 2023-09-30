/// clip bounding box
pub struct Clip {
    /// the x coords
    x: u32,
    /// the y coords
    y: u32,
    /// the element height
    height: u32,
    /// the element width
    width: u32,
}

/// issue details
pub struct Issue {
    /// the context of the issue or raw html
    pub context: String,
    /// the selector to identify the issue with css, xpath, or raw path
    pub selector: String,
    /// the type of code for the issue
    pub code: String,
    /// the type of issue
    pub issue_type: String,
    /// the typecode of the issue 0,1,2
    pub type_code: u8,
    /// the message of the issue
    pub message: String,
    /// the type of runner
    pub runner: String,
    /// extra details for the runner
    pub runner_extras: std::collections::HashMap<String, String>,
    /// the amount of times the issue appeared
    pub recurrence: u32,
    /// the visual position of the element
    pub clip: Option<Clip>,
}
