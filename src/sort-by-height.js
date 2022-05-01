const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let filteredArr = arr.filter(elem => elem != -1).sort((a, b) => a - b);

  arr.forEach((item, index) => {
    if (item == -1) {
      //console.log(index);
      let tmp = filteredArr.splice(index, filteredArr.length);
      filteredArr.push(-1);
      filteredArr.push(...tmp);

    }
  });

  return (filteredArr);
}

module.exports = {
  sortByHeight
};
