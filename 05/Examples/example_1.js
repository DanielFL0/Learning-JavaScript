// Abstraction
/*
In the context of programming, these kinds of vocabularies are usually
called abstracionts. Abstracions hide details and give us the ability to
talk about problems at a higher (or more abstract) level.
Example:
*/

let total = 0, count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}
console.log(total);

// or

console.log(sum(range(1, 10)));

// Abstracting Repetition
for (let i = 0; i < 10; i++) {
    console.log(i);
}

function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
}

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log);
// → 0
// → 1
// → 2

let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
});
console.log(labels);
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]