use super::*;
use crate::dom::NodeId;

#[derive(Debug)]
pub enum ReplacedContent {
    // Not implemented yet
}

impl ReplacedContent {
    pub fn for_element(_element: NodeId, _context: &Context) -> Option<Self> {
        // FIXME: implement <img> etc.
        None
    }
}
