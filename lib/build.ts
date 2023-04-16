import fs from "fs";

const dir = fs.opendirSync("node_modules/axe-core/locales");

// axe-core locales
const localeMap = {};

let dirEntry = null;

// gather all locales - todo: build time handle axe scripts instead along with htmlcs.
while ((dirEntry = dir.readSync())) {
  const fileName = dirEntry.name;

  if (fileName !== "_template.json") {
    const lang = fileName.replace(".json", "");

    localeMap[lang] = require(`axe-core/locales/${fileName}`);
  }
}

dir.closeSync();

export { localeMap };
