// Deep Comparison
/*
The == operator compares objects by identity. But sometimes you'd
prefer to compare the values of their actual properties.
Write a function deepEqual that takes two values and returns true
only if they are the same value or are objects with the same properties,
where the values of the properties are equal when compared with a recursive
call to deepEqual.
*/

function stringifyObject(object) {
    let objString = JSON.stringify(object);
    return objString;
}

function deepEqual(val1, val2) {
    console.log(`${stringifyObject(val1)}\t${stringifyObject(val2)}`);
    if (val1 === val2) {
        return true;
    } else if (typeof(val1) == "object" && val1 != null) {
        if (Object.keys(val1).length != Object.keys(val2).length) {
            return false;
        }
        for (let key in val1) {
            if (key in val2) {
                if (!deepEqual(val1[key], val2[key])) {
                    return false;
                }
            } else {
                return false;
            }
        }
        return true; // This was missing
    } else {
        return false;
    }
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true