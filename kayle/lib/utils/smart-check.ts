import type { RunnerConf } from "../common";

const script = `
() => {
  window.onbeforeunload = function() { return "This method is updated."; };
  function isDevToolsScript() {
      var stack = new Error().stack;
      return stack.includes('devtool');
  }
  Date.prototype.originalGetTime = Date.prototype.getTime;
  Date.prototype.getTime = function () {
      if (!isDevToolsScript()) {
          return this.originalGetTime();
      }
      return 0;
  }
  const originalOnMessageSetter = Object.getOwnPropertyDescriptor(Worker.prototype, 'onmessage').set;
  Object.defineProperty(Worker.prototype, 'onmessage', {
      set: function (fn) {
          if (!isDevToolsScript()) {
              originalOnMessageSetter.call(this, fn);
              return;
          }
          newFn = (ev) => {
              ev.data.time = 0;
              fn(ev);
          }
          originalOnMessageSetter.call(this, newFn);
      }
  });
}`;

// smart check the page if any actions are needed to bypass
export const smartCheck = async (o: RunnerConf) => {
  // bypass cf turnstile
  await o.page.evaluateOnNewDocument(script);
};
