import { _log } from "./config";
import { Audit, kayle, RunnerConf } from "./kayle";

let write;
let extractLinks;

// on autoKayle link find callback
declare function callback(audit: Audit): Audit;
declare function callback(audit: Audit): Promise<Audit>;

/**
 * Run accessibility tests for page auto running until all pages complete.
 * @param {Object} [config={}] config - Options to change the way tests run.
 * @returns {Promise} Returns a promise which resolves with array of results.
 */
export async function autoKayle(
  o: RunnerConf & { log?: boolean; store?: string; cb?: typeof callback } = {},
  ignoreSet?: Set<String>,
  _results?: Audit[]
): Promise<Audit[]> {
  if (!write) {
    const { writeFile } = await import("fs/promises");
    write = writeFile;
  }
  // pre init list
  if (!_results) {
    _results = [];
  }

  const result = await kayle(o, true);

  _results.push(result);

  if (o.cb && typeof o.cb === "function") {
    await o.cb(result);
  }

  // auto run links until finished.
  if (!extractLinks) {
    extractLinks = (await import("./wasm/extract")).extractLinks;
  }

  if (!ignoreSet) {
    ignoreSet = new Set();
  }

  const links: string[] = await extractLinks(o);

  // persist html file to disk
  if (o.store) {
    await write(
      `${o.store}/${encodeURIComponent(o.page.url())}`,
      await o.page.content()
    );
  }

  await o.page.close();

  await Promise.all(
    links.map(async (link) => {
      if (ignoreSet.has(link)) {
        return await Promise.resolve();
      }

      if (_log.enabled) {
        console.log(`Running: ${link}`);
      }

      ignoreSet.add(link);

      return await autoKayle(
        {
          ...o,
          page: await o.browser.newPage(),
          html: null,
          origin: link,
        },
        ignoreSet,
        _results
      );
    })
  );

  return _results;
}
