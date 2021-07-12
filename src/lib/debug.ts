// const debug = require('debug');
// debug.enable('*');

// module.exports = (...args) => {
//   const namespaces = [];
//   if (args && args.length) {
//     namespaces.push(...args.filter((str) => typeof str === 'string'));
//   }
//   return debug(namespaces.join(':'));
// };
import debug from 'debug'

debug.enable('*')

export const getDebug = (...namespaces: string[]): debug.Debugger => debug(namespaces.length ? namespaces.join(':') : 'Playgroud')