const sepa = /\u2028|\u2029/g;
const rators = $0 => $0 === '\u2028' ? '\\u2028' : '\\u2029';

const ECMAJSON = {
  parse(text, reviver) {
    return JSON.parse.apply(null, arguments);
  },
  stringify(value, replacer, space) {
    return JSON.stringify.apply(null, arguments).replace(sepa, rators);
  }
};

export default ECMAJSON;
export const parse = ECMAJSON.parse;
export const stringify = ECMAJSON.stringify;
