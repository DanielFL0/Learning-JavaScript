//  A List
/*
Objects, as generic blobs of values, can be used to build all
sorts of data structures. A common data structure is the list
(not to be confused with array). A list is a nested set of objects,
with the first object holding a reference to the second, the
second to the third, and so on.
let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};
→ [1, 2, 3]
*/

function arrayToList(array) {
    let rest = {};
    for (let counter = array.length - 1; counter >= 0; counter--) {
        let value = array[counter];
        rest = {value: value, rest: counter == array.length - 1 ? null : rest};
    }
    return rest;
}

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(element, list) {
    let rest = {value: element, rest: list};
    return rest;
}

function nth(list, index) {
    let counter = 0;
    for (let node = list; node; node = node.rest) {
        if (index == counter) {
            return node.value;
        }
        counter++;
    }
    return undefined;
}

function printList(list) {
    let listString = JSON.stringify(list);
    console.log(listString);
}

let numbers = [1, 2, 3, 4, 5];
let list = arrayToList(numbers);
printList(list);
console.log(listToArray(list));
// TEST
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20