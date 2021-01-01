// Mutability
/*
We saw that object values can be modified. The types of values
discussed in earlier chapters, such as numbers, strings and Booleans,
are all immutable-it is impossible to change values of those
types. You can combine them and derive new values from them,
but when you take a specific string value, that value will always
remain the same.
Objects work differently. You can change their properties, causing
a single object value to have different content at different times.
*/
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10

const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
score = {visitors: 1, home: 1};
// This isn't allowed

console.log(score);