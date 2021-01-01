// Objects
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
/*
Values of the type object are arbitrary collections of properties.
One way to create an object is by using braces
as an expression.
*/
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.world = false;
console.log(day1.wolf);
// → false

let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true
console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}

let journal = [
    {
        events: ["work", "touched tree", "pizza",
                "running", "television"],
        squirrel: false
    },
    {
        events: ["work", "ice cream", "cauliflower",
                "lasagna", "touched tree", "brushed teeth"],
        squirrel: false
    },
    {
        events: ["weekend", "cycling", "break",
                "peanuts", "beer"],
        squirrel: true
    },
];