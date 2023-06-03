import { _log } from "../config";

type AdCheck = {
  check(url: string, domain: string, resource: string, bool: boolean);
};

const engine: unknown | AdCheck =
  process.env.KAYLE_ADBLOCK === "true"
    ? (async () => {
        try {
          // @ts-ignore module is not installed by default.
          const adblockRust = await import("adblock-rs");
          const { promises } = await import("fs");
          const { join } = await import("path");

          const filterSet = new adblockRust.FilterSet(false);

          // fetch list of resources and store inside data directory
          const resourceList = [
            "https://github.com/brave/adblock-rust/blob/master/data/brave/brave-unbreak.txt",
            "https://github.com/brave/adblock-rust/blob/master/data/brave/coin-miners.txt",
            "https://github.com/brave/adblock-rust/blob/master/data/uBlockOrigin/unbreak.txt",
          ];

          for (const adlist of resourceList) {
            const u = new URL(adlist);
            const filePath = u.pathname.split("/");
            const fileName = filePath[filePath.length - 1];
            const file = join(__dirname, "../data/", fileName);

            const fileExists = !!(await promises
              .stat(file)
              .catch((e) => false));

            if (!fileExists) {
              try {
                const req = await fetch(adlist);
                const adFilter = await req.text();

                if (adFilter) {
                  await promises.writeFile(file, adFilter);
                  filterSet.addFilters(adFilter.split("\n"));
                }
              } catch (e) {
                console.error(e);
              }
              return;
            }
            const adFilter = await promises.readFile(file, {
              encoding: "utf-8",
            });

            filterSet.addFilters(adFilter.split("\n"));
          }

          const engine = new adblockRust.Engine(filterSet, true);
          const serializedArrayBuffer = engine.serializeRaw();

          _log &&
            console.log(
              `Adblock Engine size: ${(
                serializedArrayBuffer.byteLength /
                1024 /
                1024
              ).toFixed(2)} MB`
            );

          return engine;
        } catch (_) {
          // error for now without exiting since feature is opt in
          console.error(
            "Error: adblock-rs installation missing! Run `npm i adblock-rs` or `yarn add adblock-rs` to start the adblock engine."
          );
        }
      })()
    : null;

// engine to prevent ads and bad stuff
export const adEngine = engine as AdCheck;
