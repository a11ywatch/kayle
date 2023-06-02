const failedActionElement = "Failed action: no element matching selector";

export const actions = [
  {
    name: "navigate-url",
    match: /^navigate to( url)? (.+)$/i,
    run: async (_, page, __, matches) => {
      const navigateTo = matches[2];
      try {
        await page.goto(navigateTo);
      } catch (error) {
        throw new Error(`Failed action: Could not navigate to "${navigateTo}"`);
      }
    },
  },
  {
    name: "click-element",
    match: /^click( element)? (.+)$/i,
    run: async (_, page, __, matches) => {
      const selector = matches[2];
      try {
        await page.click(selector);
      } catch (error) {
        throw new Error(`${failedActionElement} "${selector}"`);
      }
    },
  },
  {
    name: "set-field-value",
    match: /^set( field)? (.+?) to (.+)$/i,
    run: async (_, page, __, matches) => {
      const selector = matches[2];
      const value = matches[3];
      try {
        await page.evaluate(
          (targetSelector, desiredValue) => {
            const target = document.querySelector(targetSelector);

            if (!target) {
              return Promise.reject(new Error("No element found"));
            }

            const prototype = Object.getPrototypeOf(target);

            const { set: prototypeValueSetter } =
              Object.getOwnPropertyDescriptor(prototype, "value") || {};

            if (prototypeValueSetter) {
              prototypeValueSetter.call(target, desiredValue);
            } else {
              target.value = desiredValue;
            }

            target.dispatchEvent(
              new Event("input", {
                bubbles: true,
              })
            );

            return Promise.resolve();
          },
          selector,
          value
        );
      } catch (error) {
        throw new Error(`${failedActionElement} "${selector}"`);
      }
    },
  },
  {
    name: "clear-field-value",
    match: /^clear( field)? (.+?)$/i,
    run: async (_, page, __, matches) => {
      const selector = matches[2];
      try {
        await page.evaluate((targetSelector) => {
          const target = document.querySelector(targetSelector);
          if (!target) {
            return Promise.reject(new Error("No element found"));
          }
          const prototype = Object.getPrototypeOf(target);
          const { set: prototypeValueSetter } =
            Object.getOwnPropertyDescriptor(prototype, "value") || {};
          if (prototypeValueSetter) {
            prototypeValueSetter.call(target, "");
          } else {
            target.value = "";
          }
          target.dispatchEvent(
            new Event("input", {
              bubbles: true,
            })
          );
          return Promise.resolve();
        }, selector);
      } catch (error) {
        throw new Error(`${failedActionElement} "${selector}"`);
      }
    },
  },
  {
    name: "check-field",
    match: /^(check|uncheck)( field)? (.+)$/i,
    run: async (_, page, __, matches) => {
      const checked = matches[1] !== "uncheck";
      const selector = matches[3];
      try {
        await page.evaluate(
          (targetSelector, isChecked) => {
            const target = document.querySelector(targetSelector);
            if (!target) {
              return Promise.reject(new Error("No element found"));
            }
            target.checked = isChecked;
            target.dispatchEvent(
              new Event("change", {
                bubbles: true,
              })
            );
            return Promise.resolve();
          },
          selector,
          checked
        );
      } catch (error) {
        throw new Error(`${failedActionElement} "${selector}"`);
      }
    },
  },
  {
    name: "screen-capture",
    match: /^(screen[ -]?capture|capture[ -]?screen)( to)? (.+)$/i,
    run: async (_, page, __, matches) => {
      await page.screenshot({
        path: matches[3],
        fullPage: true,
      });
    },
  },
  {
    name: "wait-for-url",
    match: /^wait for (fragment|hash|host|path|url)( to (not )?be)? ([^\s]+)$/i,
    run: async (_, page, __, matches) => {
      const expectedValue = matches[4];
      const negated = matches[3] !== undefined;
      const subject = matches[1];

      let property = "";

      switch (subject) {
        case "fragment":
        case "hash":
          property = "hash";
          break;
        case "host":
          property = "host";
          break;
        case "path":
          property = "pathname";
          break;
        default:
          property = "href";
          break;
      }

      function locationHasProperty(locationProperty, value, isNegated) {
        return isNegated
          ? window.location[locationProperty] !== value
          : window.location[locationProperty] === value;
      }

      await page.waitForFunction(
        locationHasProperty,
        {},
        property,
        expectedValue,
        negated
      );
    },
  },
  {
    name: "wait-for-element-state",
    match: /^wait for( element)? (.+)( to be) (added|removed|visible|hidden)$/i,
    run: async (_, page, __, matches) => {
      const selector = matches[2];
      const state = matches[4];

      await page.waitForFunction(
        (targetSelector, desiredState) => {
          const targetElement = document.querySelector(targetSelector);

          // Check for added/removed states
          if (
            (targetElement && desiredState === "added") ||
            (!targetElement && desiredState === "removed")
          ) {
            return true;
          }

          const visible = !!(
            targetElement &&
            (targetElement.offsetWidth ||
              targetElement.offsetHeight ||
              targetElement.getClientRects().length)
          );

          // Check for visible/hidden states
          return (
            (desiredState === "visible" && visible) ||
            (desiredState === "hidden" && !visible)
          );
        },
        {
          polling: 200,
        },
        selector,
        state
      );
    },
  },
  {
    name: "wait-for-element-event",
    match: /^wait for( element)? (.+) to emit (.+)$/i,
    run: async (_, page, __, matches) => {
      const selector = matches[2];
      const eventType = matches[3];

      try {
        await page.evaluate(
          (targetSelector, desiredEvent) => {
            const target = document.querySelector(targetSelector);

            if (!target) {
              return Promise.reject(new Error("No element found"));
            }

            target.addEventListener(
              desiredEvent,
              () => {
                // @ts-ignore
                window._a11yWaitForElementEventFired = true;
              },
              {
                once: true,
              }
            );
          },
          selector,
          eventType
        );

        await page.waitForFunction(
          () => {
            // @ts-ignore
            if (window._a11yWaitForElementEventFired) {
              // @ts-ignore
              delete window._a11yWaitForElementEventFired;
              return true;
            }
            return false;
          },
          {
            polling: 200,
          }
        );
      } catch (error) {
        throw new Error(`${failedActionElement} "${selector}"`);
      }
    },
  },
];

/**
 * Run an action string as a function.
 * @param {Object} browser - A Puppeteer browser object.
 * @param {Object} page - A Puppeteer page object.
 * @param {Object} options - Options to pass into the action.
 * @param {String} act - The action string to run.
 * @param {Object[]} customActions - Optional custom actions list.
 * @returns {Promise} Returns a promise which resolves with undefined.
 */
export async function runAction(browser, page, options, act, customActions?) {
  const action = (customActions ?? actions).find((item) =>
    item.match.test(act)
  );

  if (!action) {
    throw new Error(`Failed action: "${act}" cannot be resolved`);
  }

  await action.run(browser, page, options, act.match(action.match));
}
