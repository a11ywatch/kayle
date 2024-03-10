import { readFileSync } from "fs";
import { parse } from "acorn";

const traverse = (node, callback) => {
  callback(node);
  for (const key in node) {
    if (node.hasOwnProperty(key)) {
      const child = node[key];
      if (typeof child === "object" && child !== null) {
        if (Array.isArray(child)) {
          child.forEach((node) => traverse(node, callback));
        } else {
          traverse(child, callback);
        }
      }
    }
  }
};

const processFile = (filePath, arr: string[]) => {
  const code = readFileSync(filePath, "utf8");
  const ast = parse(code, { sourceType: "script", ecmaVersion: 2020 });

  traverse(ast, (node) => {
    if (node.type === "Property" || node.type === "ObjectProperty") {
      const key = node.key.name || (node.key.value ? node.key.value : "");

      if (key === "sniffs") {
        if (
          node.value.type === "ArrayExpression" &&
          node.value.elements.every((ele) => ele.type === "Literal")
        ) {
          node.value.elements.forEach((element) => {
            arr.push(element.value);
          });
        } else if (node.value.type === "ArrayExpression") {
          node.value.elements.forEach((element) => {
            if (element.type === "ObjectExpression") {
              element.properties.forEach((prop) => {
                if (
                  prop.key.name === "include" &&
                  prop.value.type === "ArrayExpression"
                ) {
                  prop.value.elements.forEach((innerElement) => {
                    if (innerElement.type === "Literal") {
                      arr.push(innerElement.value);
                    }
                  });
                }
              });
            }
          });
        }
      }
    }
  });
};

// process the files by wcag code
export const processIncludeFiles = () => {
  const WCAGAAA: string[] = [];
  const WCAGAA: string[] = [];
  const WCAGA: string[] = [];

  processFile("../fast_htmlcs/dist/Standards/WCAG2AAA/ruleset.js", WCAGAAA);
  processFile("../fast_htmlcs/dist/Standards/WCAG2AA/ruleset.js", WCAGAA);
  processFile("../fast_htmlcs/dist/Standards/WCAG2A/ruleset.js", WCAGA);

  return {
    WCAGAAA,
    WCAGAA,
    WCAGA,
  };
};
