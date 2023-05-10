import { Audit } from "./kayle";

// watcher cycle timeout
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
