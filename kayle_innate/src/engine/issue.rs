use serde::{Deserialize, Serialize};

/// clip bounding box
#[derive(Default, Debug, Serialize, Deserialize)]
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
#[derive(Default, Debug, Serialize, Deserialize)]
pub struct RunnerExtras {
    /// the url to get more information on the issue
    pub help_url: &'static str,
}

/// issue details
#[derive(Default, Debug, Serialize, Deserialize)]
pub struct Issue {
    /// the context of the issue or raw html
    pub context: String,
    /// the selector to identify the issue with css, xpath, or raw path
    pub selectors: Vec<&'static str>,
    /// the type of code for the issue
    pub code: String,
    /// the type of issue
    pub issue_type: &'static str,
    /// the typecode of the issue 0,1,2
    pub type_code: u8,
    /// the message of the issue
    pub message: &'static str,
    /// the type of runner
    pub runner: &'static str,
    /// extra details for the runner
    pub runner_extras: RunnerExtras,
    /// the amount of times the issue appeared
    pub recurrence: u32,
    /// the visual position of the element
    pub clip: Option<Clip>,
}

impl Issue {
    /// create a new issue
    pub fn new(
        message: &'static str,
        context: &str,
        code: &str,
        issue_type: &'static str,
        selectors: Vec<&'static str>,
    ) -> Issue {
        Issue {
            message,
            context: context.into(),
            runner: "kayle",
            code: code.into(),
            issue_type,
            type_code: match issue_type {
                "error" => 0,
                "warning" => 1,
                _ => 2,
            },
            selectors,
            ..Default::default()
        }
    }
}
