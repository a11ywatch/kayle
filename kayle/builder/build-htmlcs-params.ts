import { lstatSync, readdirSync, readFileSync } from "fs";
import { join, parse as pathParse } from "path";
import { parse } from "acorn";
import { simple } from "acorn-walk";
import { generate } from "escodegen";
import type { ParamList } from "./build-types";
import { processIncludeFiles } from "./build-htmlcs-rule-list";

const processDirectory = (directory, paramList: ParamList[]) => {
  readdirSync(directory).forEach((file) => {
    const fullPath = join(directory, file);
    if (lstatSync(fullPath).isDirectory()) {
      processDirectory(fullPath, paramList);
    } else if (fullPath.endsWith(".js")) {
      processFile(fullPath, paramList);
    }
  });
};

const isHTMLCSAddMessageCall = (node) => {
  if (
    node.type === "MemberExpression" &&
    node.object &&
    node.object.name === "HTMLCS" &&
    node.property &&
    node.property.name === "addMessage"
  ) {
    return true;
  } else if (node.type === "CallExpression" && node.callee) {
    return isHTMLCSAddMessageCall(node.callee);
  } else if (node.type === "MemberExpression" && node.object) {
    return isHTMLCSAddMessageCall(node.object);
  }
  return false;
};

// get the add Message call directly
const extractPureAddMessageArgs = (s: string) =>
  s.replace(/\.replace\(.*?\)/, "").replace(/^_global\./, "");

const processFile = (filePath, paramList: ParamList[]) => {
  const code = readFileSync(filePath, "utf8");
  const ast = parse(code, { sourceType: "script", ecmaVersion: 2020 });

  let guide: RegExpMatchArray | null = null;

  simple(ast, {
    CallExpression(node) {
      if (isHTMLCSAddMessageCall(node)) {
        const params = node.arguments.map((arg, index) => {
          if (arg.type === "Literal") {
            return arg.value;
          }
          if (arg.type === "Identifier") {
            return arg.name;
          }

          if (
            arg.type === "MemberExpression" &&
            arg.property &&
            arg.property.type === "Identifier"
          ) {
            return arg.property.name.toLowerCase();
          }

          if (arg.type === "CallExpression" && arg.callee) {
            return extractPureAddMessageArgs(generate(arg));
          }

          if (
            index === 2 &&
            arg.type === "CallExpression" &&
            arg.callee &&
            arg.arguments.length
          ) {
            return extractPureAddMessageArgs(generate(arg));
          }

          return null;
        });

        params.push(pathParse(filePath).name);

        if (!guide) {
          guide = code.match(
            /(_global\.HTMLCS_WCAG2AAA_Sniffs_)([A-Za-z0-9_]+)/
          );
          if (guide && guide[2]) {
            const end = guide[2].length - 23;
            guide[2] = guide[2].slice(0, guide[2].length - end);
          }
        }

        if (guide && guide[2]) {
          params.push(guide[2]);
        }

        paramList.push(params as ParamList);
      }
    },
  });
};

// process the params to a list
export const processParams = () => {
  const paramList: ParamList[] = [];

  const { WCAGAAA, WCAGAA, WCAGA } = processIncludeFiles();

  processDirectory("../fast_htmlcs/dist/Standards", paramList);

  return {
    WCAGAAA,
    WCAGAA,
    WCAGA,
    paramList,
  };
};
