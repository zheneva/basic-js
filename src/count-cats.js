const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(...args) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  let str = '^^';
  let count = 0;

  // console.log(args[0][2])
  args[0].map(elem => {
    console.log(elem);
    elem.forEach(elemItem => {
      if (elemItem == str) count++;
    });
  })

  return count;

};


module.exports = {
  countCats
};
