/*
The previous chapter introduced the standard function Math.min
that returns the smallest argument. We can build something like that
now. Write a function min that takes two arguments and returns
their minimum.
*/

function minimum(x, y) {
    return x < y ? x : y;
}

console.log(minimum(0, -10));