// This logic needs refactoring.
_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_Contrast = {
  testContrastRatio: function (top, minContrast, minLargeContrast) {
    const failures = [];
    const toProcess = [];

    if (!top.ownerDocument) {
      const body = top.getElementsByTagName("body");
      if (body.length) {
        // SVG objects will not have a body element. Don't check them.
        toProcess.push(body[0]);
      }
    } else {
      toProcess.push(top);
    }

    while (toProcess.length > 0) {
      const node = toProcess.shift();

      // This is an element.
      if (
        node &&
        node.nodeType === 1 &&
        HTMLCS.util.isVisuallyHidden(node) === false &&
        HTMLCS.util.isDisabled(node) === false
      ) {
        let processNode = false;
        let bgColour = null;

        for (var i = 0; i < node.childNodes.length; i++) {
          // Load up new nodes, but also only process this node when
          // there are direct text elements.
          if (node.childNodes[i].nodeType === 1) {
            toProcess.push(node.childNodes[i]);
          } else if (node.childNodes[i].nodeType === 3) {
            if (
              node.childNodes[i].nodeValue &&
              node.childNodes[i].nodeValue.trim() !== ""
            ) {
              processNode = true;
            }
          }
        }

        if (processNode) {
          const style = HTMLCS.util.style(node);

          if (style) {
            bgColour = style.backgroundColor;
            let foreColour = style.color;
            let hasBgImg = false;
            let isAbsolute = false;
            let hasBgGradient = false;

            if (style.backgroundImage !== "none") {
              hasBgImg = true;
            }

            if (style.background && style.background.includes("gradient(")) {
              hasBgGradient = true;
              break;
            }

            if (style.position == "absolute") {
              isAbsolute = true;
            }

            let parent = node.parentNode;

            // Calculate font size. Note that CSS 2.1 fixes a reference pixel
            // as 96 dpi (hence "pixel ratio" workarounds for Hi-DPI devices)
            // so this calculation should be safe.
            const fontSize = parseFloat(style.fontSize) * (72 / 96);
            let minLargeSize = 18;

            if (
              style.fontWeight === "bold" ||
              parseInt(style.fontWeight, 10) >= 600
            ) {
              minLargeSize = 14;
            }

            let reqRatio = minContrast;

            if (fontSize >= minLargeSize) {
              reqRatio = minLargeContrast;
            }

            // Check for a solid background colour.
            while (
              bgColour === "transparent" ||
              bgColour === "rgba(0, 0, 0, 0)"
            ) {
              if (!parent || !parent.ownerDocument) {
                break;
              }

              const parentStyle = HTMLCS.util.style(parent);

              bgColour = parentStyle.backgroundColor;

              if (parentStyle.background && parentStyle.background.includes("gradient(")) {
                hasBgGradient = true;
                break;
              }
              if (parentStyle.backgroundImage !== "none") {
                hasBgImg = true;
              }
              if (parentStyle.position == "absolute") {
                isAbsolute = true;
              }

              // Search for the smooth scrolling willChange: 'transform' background hack
              // See http://fourkitchens.com/blog/article/fix-scrolling-performance-css-will-change-property
              const beforeStyle = HTMLCS.util.style(parent, ":before");

              if (beforeStyle.background.includes("gradient(")) {
                hasBgGradient = true;
                break;
              }

              if (
                beforeStyle &&
                beforeStyle.position == "fixed" &&
                beforeStyle.willChange == "transform" &&
                //Make sure it is trying to cover the entire content area
                beforeStyle.width == parentStyle.width &&
                parseInt(beforeStyle.height, 10) <=
                  parseInt(parentStyle.height, 10) && 
                  beforeStyle.backgroundImage !== "none"
              ) {
                //And finally it needs a background image
                hasBgImg = true;
                break;
              }
              parent = parent.parentNode;
            }

            const bgAlpha = HTMLCS.util.colourStrToRGB(bgColour).alpha;
            const fgAlpha = HTMLCS.util.colourStrToRGB(foreColour).alpha;

            if (hasBgGradient) {
              failures.push({
                element: node,
                colour: foreColour,
                bgColour: bgColour,
                value: undefined,
                required: reqRatio,
                hasAlpha: false,
                hasBgGradient: true
              });
              continue;
            } else if (bgColour && bgAlpha < 1.0 && bgAlpha > 0) {
              // If we have a rgba background colour, skip the contrast ratio checks,
              // and push a warning instead.
              failures.push({
                element: node,
                colour: foreColour,
                bgColour: bgColour,
                value: undefined,
                required: reqRatio,
                hasAlpha: true,
              });
              continue;
            } else if (foreColour && fgAlpha < 1.0 && fgAlpha > 0) {
              // If we have a rgba fore colour, skip the contrast ratio checks,
              // and push a warning instead.
              failures.push({
                element: node,
                colour: foreColour,
                bgColour: foreColour,
                value: undefined,
                required: reqRatio,
                hasAlpha: true,
              });
              continue;
            } else if (hasBgImg === true) {
              // If we have a background image, skip the contrast ratio checks,
              // and push a warning instead.
              failures.push({
                element: node,
                colour: foreColour,
                bgColour: undefined,
                value: undefined,
                required: reqRatio,
                hasBgImage: true,
              });
              continue;
            } else if (isAbsolute === true) {
              failures.push({
                element: node,
                colour: foreColour,
                bgColour: undefined,
                value: undefined,
                required: reqRatio,
                isAbsolute: true,
              });
              continue;
            } else if (
              bgColour === "transparent" ||
              bgColour === "rgba(0, 0, 0, 0)"
            ) {
              // If the background colour is still transparent, this is probably
              // a fragment with which we cannot reliably make a statement about
              // contrast ratio. Skip the element.
              continue;
            }

            const contrastRatio = HTMLCS.util.contrastRatio(
              bgColour,
              foreColour
            );

            if (contrastRatio < reqRatio) {
              const recommendation = this.recommendColour(
                bgColour,
                foreColour,
                reqRatio
              );

              failures.push({
                element: node,
                colour: style.color,
                bgColour: bgColour,
                value: contrastRatio,
                required: reqRatio,
                recommendation,
              });
            }
          }
        }
      }
    }

    return failures;
  },

  recommendColour: function (background, foreground, target) {
    // Canonicalise the colours.
    const fore = HTMLCS.util.RGBtoColourStr(
      HTMLCS.util.colourStrToRGB(foreground)
    );
    const back = HTMLCS.util.RGBtoColourStr(
      HTMLCS.util.colourStrToRGB(background)
    );
    const foreDiff = Math.abs(HTMLCS.util.relativeLum(fore) - 0.5);
    const backDiff = Math.abs(HTMLCS.util.relativeLum(back) - 0.5);

    let recommendation = null;
    let newCol = null;
    let change = "";
    let multiplier = 0;

    let cr = HTMLCS.util.contrastRatio(fore, back);

    if (cr < target) {
      // Work out which colour has more room to move.
      // If they are the same, prefer changing the foreground colour.
      multiplier = 1 + 1 / 400;

      if (foreDiff <= backDiff) {
        change = "back";
        newCol = back;
        if (HTMLCS.util.relativeLum(back) < 0.5) {
          multiplier = 1 / multiplier;
        }
      } else {
        change = "fore";
        newCol = fore;
        if (HTMLCS.util.relativeLum(fore) < 0.5) {
          multiplier = 1 / multiplier;
        }
      }

      let hsv: ReturnType<typeof globalThis.HTMLCS.util.sRGBtoHSV> | string =
        HTMLCS.util.sRGBtoHSV(newCol);

      // var chroma  = hsv.saturation * hsv.value;
      let newFore = fore;
      let newBack = back;
      let changed = false;

      let i = 0;

      while (cr < target) {
        if (newCol === "#fff" || newCol === "#000") {
          // Couldn't go far enough. Reset and try the other colour.
          if (changed === true) {
            // We've already switched colours, so we have to start
            // winding back the other colour.
            if (change === "fore") {
              const oldBack = newBack;
              let j = 1;
              while (newBack === oldBack) {
                newBack = this.multiplyColour(
                  newBack,
                  Math.pow(1 / multiplier, j)
                );
                j++;
              }
            } else {
              const oldFore = newFore;
              let j = 1;
              while (newFore === oldFore) {
                newFore = this.multiplyColour(
                  newFore,
                  Math.pow(1 / multiplier, j)
                );
                j++;
              }
            }
          } else {
            newFore = fore;
            newBack = back;
            multiplier = 1 / multiplier;

            if (change === "fore") {
              change = "back";
              hsv = back;
            } else {
              change = "fore";
              hsv = fore;
            }

            hsv = HTMLCS.util.sRGBtoHSV(hsv);
            // chroma  = hsv.saturation * hsv.value;
            changed = true;
          }
        }

        i++;
        newCol = HTMLCS.util.HSVtosRGB(hsv);
        newCol = this.multiplyColour(newCol, Math.pow(multiplier, i));

        if (change === "fore") {
          newFore = newCol;
        } else {
          newBack = newCol;
        }

        cr = HTMLCS.util.contrastRatio(newFore, newBack);
      }

      recommendation = {
        fore: {
          from: fore,
          to: newFore,
        },
        back: {
          from: back,
          to: newBack,
        },
      };
    }

    return recommendation;
  },

  multiplyColour: function (colour, multiplier) {
    const hsvColour = HTMLCS.util.sRGBtoHSV(colour);
    const chroma = hsvColour.saturation * hsvColour.value;

    // If we are starting from black, start it from #010101 instead.
    if (hsvColour.value === 0) {
      hsvColour.value = 1 / 255;
    }

    hsvColour.value = hsvColour.value * multiplier;
    if (hsvColour.value === 0) {
      hsvColour.saturation = 0;
    } else {
      hsvColour.saturation = chroma / hsvColour.value;
    }

    hsvColour.value = Math.min(1, hsvColour.value);
    hsvColour.saturation = Math.min(1, hsvColour.saturation);

    return HTMLCS.util.RGBtoColourStr(HTMLCS.util.HSVtosRGB(hsvColour));
  },
};
