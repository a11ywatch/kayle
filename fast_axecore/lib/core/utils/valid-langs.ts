/**
 * Determine if a string is a valid language code
 * @method isValidLang
 * @memberof axe.utils
 * @param {String} lang String to test if a valid language code
 * @returns {Boolean}
 */
function isValidLang(lang) {
  try {
    return !!Intl.Collator.supportedLocalesOf(lang, {
      localeMatcher: 'lookup'
    }).length;
  } catch (_) {}
}

export default isValidLang;
