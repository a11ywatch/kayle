const fs = require("fs");

const dir = fs.opendirSync("node_modules/axe-core/locales");

// axe-core locales
const localeMap = {};

let dirEntry;

// gather all locales - todo: build time handle axe scripts instead along with htmlcs.
while ((dirEntry = dir.readSync())) {
  const fileName = dirEntry.name;

  if (fileName !== "_template.json") {
    localeMap[
      fileName.replace(".json", "")
    ] = require(`axe-core/locales/${fileName}`);
  }
}

dir.closeSync();

fs.writeFile(
  "./lib/locales.ts",
  `export const localeMap = ${JSON.stringify(localeMap)}`,
  (error) => {
    if (error) {
      console.error(error);
    }
  }
);
