import {
  getUnicodeNonBmpRegExp,
  getSupplementaryPrivateUseRegExp,
  getPunctuationRegExp,
  emojiRegexText
} from './unicode';

const hasEmoji = (text: string) => {
  if (text.length > 25) {
    return emojiRegexText.test(text);
  }
  for (let i = 0; i < text.length; i++) {
    const content = text.codePointAt(i);

    if (content && content > 0x10000 && content <= 0x1f9ff) {
      return true;
    }
  }

  return false;
};

/**
 * Determine if a given string contains unicode characters, specified in options
 *
 * @method hasUnicode
 * @memberof axe.commons.text
 * @instance
 * @param {String} str string to verify
 * @param {Object} options config containing which unicode character sets to verify
 * @property {Boolean} options.emoji verify emoji unicode
 * @property {Boolean} options.nonBmp verify nonBmp unicode
 * @property {Boolean} options.punctuations verify punctuations unicode
 * @returns {Boolean}
 */
function hasUnicode(str, options) {
  const { emoji, nonBmp, punctuations } = options;

  if (emoji) {
    return hasEmoji(str);
  }

  if (nonBmp) {
    return (
      getUnicodeNonBmpRegExp().test(str) ||
      getSupplementaryPrivateUseRegExp().test(str)
    );
  }

  if (punctuations) {
    return getPunctuationRegExp().test(str);
  }
  return false;
}

export default hasUnicode;
