const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let mas =matrix.flat();
  let step = matrix[0].length;
  for (let i = 0; i < mas.length; i++){
    if(mas[i]==0){
      for (let j = i; j < mas.length; j+=step){
        mas[j] = '';
      }
    }
  }
  return (mas.reduce(
    (previousValue, currentValue) => +previousValue + +currentValue,0));
}

module.exports = {
  getMatrixElementsSum
};
