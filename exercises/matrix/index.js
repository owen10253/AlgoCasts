// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  var out = [];

  for (var i = 0; i < n; i++) {
    out.push([]);
  }

  var counter = 1;
  var startCol = 0;
  var startRow = 0;
  var endCol = n - 1;
  var endRow = n - 1;

  while (startCol <= endCol && startRow <= endRow && counter <= n * n) {
    // top row
    for (var i = startCol; i <= endCol; i++) {
      out[startRow][i] = counter++;
    }
    startRow++;

    // right col
    for ( var i = startRow; i <= endRow; i++) {
      out[i][endCol] = counter++;
    }
    endCol--;

    // bottom row
    for ( var i = endCol; i >= startCol; i--) {
      out[endRow][i] = counter++;
    }
    endRow--;

    // left col
    for (var i = endRow; i>= startRow; i--) {
      out[i][startCol] = counter++;
    }
    startCol++;
  }
  return out;
}

module.exports = matrix;
