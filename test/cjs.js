var JSON = require('../cjs');

console.assert(
  JSON.parse(JSON.stringify('\u2028\u2029')) === '\u2028\u2029',
  'stringified text is parsed correctly'
);

console.assert(
  JSON.stringify('\u2028\u2029') === '"\\u2028\\u2029"',
  'stringified text is properly escaped'
);
