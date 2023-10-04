#[derive(Debug, Copy, Clone, PartialEq, Parse)]
pub enum Direction {
    Ltr,
    Rtl,
}

#[derive(Debug, Copy, Clone, PartialEq, Parse)]
pub enum WritingMode {
    HorizontalTb,
    VerticalRl,
    VerticalLr,
    SidewaysRl,
    SidewaysLr,
}
