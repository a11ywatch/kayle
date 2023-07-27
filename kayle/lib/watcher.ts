import { Audit } from "./common";

// watcher cycle timeout
declare class Watcher {
  timer: null | NodeJS.Timer;
  watch?(timer: number): Promise<Audit>;
}

function Watcher() {
  this.timer = null;
}

// watch until timeout
Watcher.prototype.watch = function (timeout: number): Promise<Audit> {
  return new Promise((resolve) => {
    this.timer = setTimeout(
      () =>
        resolve({
          documentTitle: "",
          pageUrl: "",
          meta: {
            errorCount: 0,
            warningCount: 0,
            noticeCount: 0,
            accessScore: 0,
          },
          automateable: {
            missingAltIndexs: [],
          },
          issues: [],
        }),
      timeout
    );
  });
};

export { Watcher };
