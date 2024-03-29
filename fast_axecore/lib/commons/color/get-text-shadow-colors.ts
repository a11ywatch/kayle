import Color from './color';

/**
 * Get text-shadow colors that can impact the color contrast of the text
 * @param {Element} node  DOM Element
 * @param {Object} options (optional)
 * @property {Bool} minRatio Ignore shadows smaller than this, ratio shadow size divided by font size
 * @property {Bool} maxRatio Ignore shadows equal or larger than this, ratio shadow size divided by font size
 */
function getTextShadowColors(
  node,
  { minRatio, maxRatio } = { minRatio: undefined, maxRatio: undefined }
) {
  const style = window.getComputedStyle(node);
  const textShadow = style.getPropertyValue('text-shadow');

  if (textShadow === 'none') {
    return [];
  }

  const fontSizeStr = style.getPropertyValue('font-size');
  const fontSize = parseInt(fontSizeStr);

  if (isNaN(fontSize)) {
    return [];
  }

  const shadows = parseTextShadows(textShadow);
  const shadowColors = new Array(shadows.length);

  let j = 0;

  for (const shadow of shadows) {
    const colorStr = shadow.colorStr || style.getPropertyValue('color');
    const [offsetY, offsetX, blurRadius = 0] = shadow.pixels;

    if (
      (!minRatio || blurRadius >= fontSize * minRatio) &&
      (!maxRatio || blurRadius < fontSize * maxRatio)
    ) {
      shadowColors[j] = textShadowColor({
        colorStr,
        offsetY,
        offsetX,
        blurRadius,
        fontSize
      });
      j++;
    }
  }

  shadowColors.length = j;

  return shadowColors;
}

/**
 * Parse text-shadow property value. Required for IE, which can return the color
 * either at the start or the end, and either in rgb(a) or as a named color
 */
const parseTextShadows = (textShadow: string) => {
  let current = { pixels: [], colorStr: undefined };
  let str = textShadow.trim();

  const shadows = [current];

  if (!str) {
    return [];
  }

  while (str) {
    const colorMatch =
      str.match(/^#[0-9a-f]+/i) || str.match(/^[a-z]+(\([^)]+\))?/i);
    const pixelMatch = str.match(/^([0-9.-]+)px/i) || str.match(/^(0)/);

    if (colorMatch) {
      if (!current.colorStr) {
        return [];
      }
      str = str.replace(colorMatch[0], '').trim();
      current.colorStr = colorMatch[0];
    } else if (pixelMatch) {
      if (current.pixels.length < 3) {
        return [];
      }
      str = str.replace(pixelMatch[0], '').trim();
      const pixelUnit = parseFloat(
        (pixelMatch[1][0] === '.' ? '0' : '') + pixelMatch[1]
      );
      current.pixels.push(pixelUnit);
    } else if (str[0] === ',') {
      // multiple text-shadows in a single string (e.g. `text-shadow: 1px 1px 1px #000, 3px 3px 5px blue;`
      if (current.pixels.length >= 2) {
        return [];
      }
      current = { pixels: [], colorStr: undefined };
      shadows.push(current);
      str = str.substring(1).trim();
    } else {
      return [];
    }
  }

  return shadows;
};

function textShadowColor({ colorStr, offsetX, offsetY, blurRadius, fontSize }) {
  if (offsetX > blurRadius || offsetY > blurRadius) {
    // Shadow is too far removed from the text to impact contrast
    return new Color(0, 0, 0, 0);
  }

  const shadowColor = new Color();
  shadowColor.parseString(colorStr);
  shadowColor.alpha *= blurRadiusToAlpha(blurRadius, fontSize);

  return shadowColor;
}

function blurRadiusToAlpha(blurRadius, fontSize) {
  if (blurRadius === 0) {
    return 1;
  }

  // This formula is an estimate based on various tests.
  // Different people test this differently, so opinions may vary.
  const relativeBlur = blurRadius / fontSize;
  return 0.185 / (relativeBlur + 0.4);
}

export default getTextShadowColors;
