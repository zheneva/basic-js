const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(field) {
  // var field = [
  //   [0, 0, 0, 1, 0],
  //   [0, 1, 0, 0, 0],
  //   [0, 0, 1, 0, 1],
  //   [1, 0, 0, 1, 0],
  //   [0, 0, 1, 0, 0]
  // ];
  
  var mark = [];
  for (var i = 0; i < field.length; i++) {
    mark[i] = [];
    for (var j = 0; j < field[i].length; j++) {

        var counter = 0;
        if (field[i - 1] && field[i - 1][j - 1] == 1) counter++;
        if (field[i - 1] && field[i - 1][j] == 1) counter++;
        if (field[i - 1] && field[i - 1][j + 1] == 1) counter++;
        if (field[i][j - 1] == 1) counter++;
        if (field[i][j + 1] == 1) counter++;
        if (field[i + 1] && field[i + 1][j - 1] == 1) counter++;
        if (field[i + 1] && field[i + 1][j] == 1) counter++;
        if (field[i + 1] && field[i + 1][j + 1] == 1) counter++;
        mark[i][j] = counter;
    }
  }
  // for (i = 0; i < mark.length; i++)
  //   console.log(JSON.stringify(mark[i]));
  return mark;
}

module.exports = {
  minesweeper
};
