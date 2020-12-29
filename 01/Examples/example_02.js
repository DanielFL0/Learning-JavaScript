// Simple program that computes the factorial of a given argument n

function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return factorial(n - 1) * n;
    }
}

console.log(factorial(10));