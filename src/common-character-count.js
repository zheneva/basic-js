const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {

  let count = 0;
  let s2Copy = s2.split('');
  s1.split('').forEach(elem => {
    if (s2Copy.indexOf(elem) != -1) {
      count++;
      s2Copy.splice(s2Copy.indexOf(elem), 1);
      console.log(s2Copy);
    }
  });
  return count;
}

module.exports = {
  getCommonCharacterCount
};
