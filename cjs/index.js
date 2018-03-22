var u2028 = '\u2028';
var sepa = /\u2028|\u2029/g;

var ECMAJSON = JSON.stringify(u2028) === ('"' + u2028 + '"') ?
  {
    parse: function (text, reviver) {
      return JSON.parse.apply(null, arguments);
    },
    stringify: function (value, replacer, space) {
      return JSON.stringify.apply(null, arguments).replace(sepa, rators);
    }
  } :
  JSON;

function rators(sepa) {
  return sepa === u2028 ? '\\u2028' : '\\u2029';
}

exports.parse = ECMAJSON.parse;
exports.stringify = ECMAJSON.stringify;
