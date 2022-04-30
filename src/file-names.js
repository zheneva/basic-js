const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(mas) {
  arr_temp = [];
  let cnt = 0;

  for (let i = 0; i < mas.length; i++) {
    cnt = 0;
    mas = mas.map((item, index, arr) => {
      //!if(i == index) return item;
      if (item == mas[i] & i != index) {

        item += `(${++cnt})`
      }

      return item;
    });
  };
  return mas;
}

module.exports = {
  renameFiles
};
