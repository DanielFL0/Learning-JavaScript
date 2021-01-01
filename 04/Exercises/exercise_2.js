// Reversing an Array
/*
Arrays have a reverse method that changes the array by inverting
the order in which its elements appear. For this exercise, write
two functions, reverseArray and reverseArrayInPlace.
The first, reverseArray, takes an array as argument and produces a
new array that has the same elements in the inverse order.
The second, reverseArrayInPlace, does what the reverse method does:
it modifies the array given as argument by reversing its elements.
*/

function reverseArray(array) {
    let newArray = []
    for (let element of array) {
        newArray.unshift(element);
    }
    return newArray;
}

function reverseArrayInPlace(array) {
    let lower = 0;
    let upper = array.length - 1;
    while (lower != upper) {
        let placeholder = array[lower];
        array.splice(lower, 1, array[upper])
        array.splice(upper, 1, placeholder);
        lower++;
        upper--;
    }
}

let numbers = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers));
console.log(numbers);
reverseArrayInPlace(numbers);
console.log(numbers);