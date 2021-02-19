// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

const cleanString = (str) => {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;


// function anagrams(stringA, stringB) {
//   var strMapA = mapString(stringA);
//   var strMapB = mapString(stringB);

//   if (Object.keys(strMapA).length !== Object.keys(strMapB).length) {
//     return false;
//   }

//   for (var charA in strMapA) {
//     if (strMapA[charA] !== strMapB[charA]){
//       return false;
//     }
//   }

//   return true;
// }

// const mapString = (str) => {
//   var strClean = str.replace(/[^\w]/g, '').toLowerCase();
//   var strMap = {};

//   for (var char of strClean) {
//     strMap[char] = strMap[char] + 1 || 1;
//   }

//   return strMap;
// }