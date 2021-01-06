// Everything
/*
Analogous to the some method, arrays also have an every method.
This one returns true when the given function returns true for
every element in the array. In a way, some is a version of the 
|| operator that acts on arrays, and every is like the && operator.
Implement every as a function that takes an array and a predicate
function as parameters. Write two versions, one using a loop and one
using the some method.
*/
function every(array, test) {
    let validElements = [];
    for (let element of array) {
        if (test(element)) {
            validElements.push({element, valid: true});
        }
    }
    // console.log(validElements);
    if (validElements.length == array.length) {
        return true;
    }
    return false;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// every version with some
function everyV2(array, test) {
    let filteredArray = array.filter((a) => !test(a));
    return !filteredArray.some(n => n);
}

console.log(everyV2([1, 3, 5], n => n < 10));
// → true
console.log(everyV2([2, 4, 16], n => n < 10));
// → false
console.log(everyV2([], n => n < 10));
// → true

// every version with some
function everyV3(array, test) {
    return !array.some(n => !test(n));

}

console.log(everyV3([1, 3, 5], n => n < 10));
// → true
console.log(everyV3([2, 4, 16], n => n < 10));
// → false
console.log(everyV3([], n => n < 10));
// → true