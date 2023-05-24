let _cache = new Map();

const cache = {
  /**
   * Set an item in the cache.
   * @param {String} key - Name of the key.
   * @param {*} value - Value to store.
   */
  set: (key, value) => _cache.set(key, value),
  /**
   * Retrieve an item from the cache.
   * @param {String} key - Name of the key the value was stored as.
   * @param {Function} [creator] - Default value to set if there is a cache miss. Functions are evaluated before caching. To override a value already saved, use `set()`.
   * @returns {*} The item stored
   */
  get: (key, creator?: () => void) => {
    if (_cache.has(key)) {
      return _cache.get(key);
    }

    if (typeof creator === 'function') {
      const value = creator();
      cache.set(key, value);

      return _cache.get(key);
    }
  },
  /**
   * Clear the cache.
   */
  clear() {
    _cache.clear();
  }
};

export default cache;
