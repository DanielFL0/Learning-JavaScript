/*
We've seen that % (the remainder operator) can be used to test
whether a number is even or odd by using % 2 to see whether it's
divisible by two. Here's another way to define whether a positive
whole number is even or odd:
-Zero es even.
-One is odd.
-For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description.
The function should accept a single parameter (a positive, whole number)
and return a Boolean.
*/

function isEven(target) {
    if (target < 0) {
        return undefined;
    } else if (target == 0) {
        return true;
    } else if (target == 1) {
        return false;
    } else {
        return isEven(target - 2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));