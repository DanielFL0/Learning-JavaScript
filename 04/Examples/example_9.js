// Destructuring
// Destructuring
function phi_2([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) /
        Math.sqrt((n10 + n11) * (n00 + n01) *
                  (n01 + n11) * (n00 + n10))
}

let {name} = {name: "Daniel", age: 21}
console.log(name);
// → Daniel