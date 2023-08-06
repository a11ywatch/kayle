import { existsSync } from "fs";

const scriptPath = __dirname + "/build/HTMLCS.js";

if (existsSync(scriptPath)) {
  module.exports = require(scriptPath);
} else {
  throw new Error(
    "HTMLCS must be built using `grunt build` before it can be required in Node.js."
  );
}
