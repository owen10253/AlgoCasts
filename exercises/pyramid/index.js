// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, stair = '') {

  if (n === row) {
    return;
  }

  if (n * 2 - 1 === stair.length) {
    console.log(stair);
    return pyramid(n, row + 1);
  }

  if (stair.length === 0) {
    stair += '#';
  } else if (stair.length <= row * 2 - 1) {
    stair = '#' + stair + '#';
  } else {
    stair = ' ' + stair + ' ';
  }

  pyramid(n, row, stair);
}

module.exports = pyramid;

// function pyramid(n) {
//   for (var i = 1; i <= n; i++) {
//     var str = ''
//     for (var j = 1; j <= n; j++) {

//       if ( j === i ) {
//         str = str + '#';
//       } else if ( j < i ) {
//         str = '#' + str + '#';
//       } else {
//         str = ' ' + str + ' ';
//       }
//     }
//     console.log(str)
//   }
// }