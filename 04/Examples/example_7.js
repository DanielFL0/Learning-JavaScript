// Rest Parameters
/*
It can be useful for a function to accept any number of arguments.
For example, Math.max computes the maximum of all the arguments
it is given.
To write such a function, you put three dots before the function's
last parameter like this:
*/
function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}
console.log(max(4, 1, 9, -2));
// → 9
/*
You can use a similar three-dot notation to call a function with an array
of arguments.
*/
let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7
// It is possible to include an array like that along with other arguments, as in max(9, ...numbers, 2)
/*
Square bracket array notation similarly allows the triple-dot operator to spread
another array into the new array.
*/
let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
// → ["will", "never", "fully", "understand"]
