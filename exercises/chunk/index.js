// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    var output = [];
    var arrTemp = []
    var s = 0;
    for (var i in array) {
        if (s < size) {
            s++;
        } else {
            output.push(arrTemp);
            s = 0;
            arrTemp = [];
        }
        arrTemp.push(array[i]);
    }
    if (arrTemp.length > 0) {
        output.push(arrTemp);
    }
    return output;
}

module.exports = chunk;
