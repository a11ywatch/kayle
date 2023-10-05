use super::*;

#[derive(Default, Debug)]
pub struct LayoutDataForElement {
    pub self_box: Option<LayoutBox>,
    pub pseudo_elements: Option<Box<PseudoElementBoxes>>,
}

#[derive(Default, Debug)]
pub struct PseudoElementBoxes {
    pub before: Option<LayoutBox>,
    pub after: Option<LayoutBox>,
}

#[derive(Debug)]
pub enum LayoutBox {
    DisplayContents,
    BlockLevel(Arc<BlockLevelBox>),
    InlineLevel(Arc<InlineLevelBox>),
}
