_global.HTMLCS_Section508 = {
  name: "Section508",
  description: "U.S. Section 508 Standard",
  sniffs: [
    "A",
    "B",
    "C",
    "D",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
  ],
  getMsgInfo: (code) => [
    ["Section", "1194.22 (" + code.split(".", 3)[1].toLowerCase() + ")"],
  ],
};
