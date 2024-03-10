import { lstatSync, readdirSync, readFileSync } from "fs";
import { join, parse as pathParse } from "path";
import { parse } from "acorn";
import { simple } from "acorn-walk";
import { generate } from "escodegen";
import type { ParamList } from "./build-types";

const paramList: ParamList[] = [];

const processDirectory = (directory) => {
  readdirSync(directory).forEach((file) => {
    const fullPath = join(directory, file);
    if (lstatSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith(".js")) {
      processFile(fullPath);
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

const processFile = (filePath) => {
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

          if (arg.type === "MemberExpression") {
            // @ts-ignore
            return arg.property.name?.toLowerCase();
          }

          if (
            index === 2 &&
            arg.type === "CallExpression" &&
            // @ts-ignore
            arg.callee?.object?.object?.name === "_global" &&
            // @ts-ignore
            arg.callee?.object?.property?.name === "HTMLCS" &&
            // @ts-ignore
            arg.callee?.property?.name === "getTranslation"
          ) {
            if (arg.arguments.length) {
              return generate(arg).replace("_global.", "");
            }
          }

          return null;
        });

        params.push(pathParse(filePath).name);

        // run regex on first match
        if (!guide) {
          guide = code.match(
            /(_global\.HTMLCS_WCAG2AAA_Sniffs_)([A-Za-z0-9_]+)/
          );
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
  processDirectory("../fast_htmlcs/dist/Standards");
  return paramList;
};
