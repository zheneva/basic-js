const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //!n.toString().split('').sort((a,b) => b-a).splise(-1, 1);

  let str = '' + n;
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    let temp = str.split('');
    temp.splice(i, 1)
    arr.push(temp.join(''));
  }
  return (Math.max(...arr))

}

module.exports = {
  deleteDigit
};
