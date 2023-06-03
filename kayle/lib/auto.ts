import { _log } from "./config";
import { Audit, kayle, RunnerConf } from "./kayle";

let write;
let extractLinks;

/**
 * Run accessibility tests for page auto running until all pages complete.
 * @param {Object} [config={}] config - Options to change the way tests run.
 * @returns {Promise} Returns a promise which resolves with array of results.
 */
export async function autoKayle(
  o: RunnerConf & {
    log?: boolean;
    store?: string;
    cb?: ((result: Audit) => Promise<void>) | ((result: Audit) => void);
  } = {},
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
    ignoreSet = new Set([o.page.url()]);
  }

  const links: string[] = await extractLinks(o);

  // persist html file to disk
  if (o.store) {
    await write(
      `${o.store}/${encodeURIComponent(o.page.url())}`,
      await o.page.content()
    );
  }

  try {
    await o.page.close();
  } catch (e) {
    console.error(e);
  }

  await Promise.all(
    links.map(async (link) => {
      if (ignoreSet.has(link)) {
        return await Promise.resolve();
      }

      if (_log.enabled) {
        console.log(`Processing: ${link}`);
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
      ).catch((e) => {
        console.error(e);
      });
    })
  );

  return _results;
}
