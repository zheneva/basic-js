const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let tmp = n + '';

  let sumary = tmp.split('').reduce(function(sum, elem) {
  return (sum + (+elem));
  }, 0);
  
  if (tmp.length == 1) {
    return (sumary);
  }
  else{return getSumOfDigits(sumary);}
}

module.exports = {
  getSumOfDigits
};
