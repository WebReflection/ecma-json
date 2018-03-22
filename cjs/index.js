var sepa = /\u2028|\u2029/g;

var ECMAJSON = {
  parse: function (text, reviver) {
    return JSON.parse.apply(null, arguments);
  },
  stringify: function (value, replacer, space) {
    return JSON.stringify.apply(null, arguments).replace(sepa, rators);
  }
};

function rators(sepa) {
  return sepa === '\u2028' ? '\\u2028' : '\\u2029';
}

exports.parse = ECMAJSON.parse;
exports.stringify = ECMAJSON.stringify;
