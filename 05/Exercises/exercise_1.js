// Flattening
/*
Use the reduce method in combination with the concat method
to "flatten" an array of arrays into a single array that has
all the elements of the original arrays.
*/


// Test
let arrays = [[1, 2, 3], [4, 5], [6]];
function flattening(array) {
    return array.reduce((a, b) => {
        return a.concat(b);
    });
}
console.log(flattening(arrays));
// → [1, 2, 3, 4, 5, 6]