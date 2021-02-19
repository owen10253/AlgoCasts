// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  str = str.toLowerCase();
  return str.length - (str.replace('a', '').replace('e', '').replace('i', '').replace('o', '').replace('u', '')).length
}

module.exports = vowels;
