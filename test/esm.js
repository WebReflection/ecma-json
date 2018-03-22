import JSON from '../esm/index.js';

if (typeof console === 'undefined')
  console = {assert(expression, description) {
    if (!expression) throw new Error(description);
  }};

console.assert(
  JSON.parse(JSON.stringify('\u2028\u2029')) === '\u2028\u2029',
  'stringified text is parsed correctly'
);

console.assert(
  JSON.stringify('\u2028\u2029') === '"\\u2028\\u2029"',
  'stringified text is properly escaped'
);
