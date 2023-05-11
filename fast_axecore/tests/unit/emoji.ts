import assert from 'assert';
import hasUnicode from '../../lib/commons/text/has-unicode';

assert(hasUnicode('🥳', { emoji: true }), 'emoji exist in short string');
assert(
  hasUnicode('🥳  dwdwqd', { emoji: true }),
  'emoji exist in short string'
);
assert(
  !hasUnicode('dwdwqd', { emoji: true }),
  'emoji does not exist in short string'
);
assert(
  hasUnicode('dwdwqd  [dwd]wdwd d         fefefewff    👾', { emoji: true }),
  'emoji does not exist in short string'
);
