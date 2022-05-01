const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(adress) {
  alphabet = ['A', 'B', 'C', 'D', 'E', 'F','1','2','3','4','5',
  '6','7','8','9','0']
  let flag = 1;
  adress.split('-').forEach(elem => {
    elem.split('').forEach(elem => {
      if(!alphabet.includes(elem)) {
        flag = 0;
      }
    });
  });
  if (flag) return true
  else return false;
}
module.exports = {
  isMAC48Address
};
