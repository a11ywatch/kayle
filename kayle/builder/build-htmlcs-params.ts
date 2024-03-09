import { lstatSync, readdirSync, readFileSync } from "fs";
import { join, parse as pathParse } from "path";
import { parse } from "acorn";
import { simple } from "acorn-walk";
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

const processFile = (filePath) => {
  const code = readFileSync(filePath, "utf8");
  const ast = parse(code, { sourceType: "script", ecmaVersion: 2020 });

  simple(ast, {
    CallExpression(node) {
      if (
        node.callee.type === "MemberExpression" &&
        // @ts-ignore
        node.callee.object.name === "HTMLCS" &&
        // @ts-ignore
        node.callee.property.name === "addMessage"
      ) {
        const params = node.arguments.map((arg) => {
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

          return null;
        });

        params.push(pathParse(filePath).name);

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
