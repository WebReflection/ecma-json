var ECMAJSON = (function (sepa, rators) {
  var u2028 = '\u2028';
  return JSON.stringify(u2028) === ('"' + u2028 + '"') ?
    {
      parse: function (text, reviver) {
        return JSON.parse.apply(null, arguments);
      },
      stringify: function (value, replacer, space) {
        return JSON.stringify.apply(null, arguments).replace(sepa, rators);
      }
    } :
    JSON;
}(
  /\u2028|\u2029/g,
  function (sepa) {
    return sepa === '\u2028' ? '\\u2028' : '\\u2029';
  }
));
