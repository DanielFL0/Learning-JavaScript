// Arrays & Strings
let todoList = [];
function remember(task) {
    todoList.push(task);
}
function getTask() {
    return todoList.shift();
}
function rememberUrgently(task) {
    todoList.unshift(task);
}
remember("Lunch with friends");
remember("Movies with family");
remember("Buy arduino");
console.log(todoList);
console.log(getTask());
console.log(todoList);
rememberUrgently("Buy christmas presents");
console.log(todoList);
console.log(getTask());

console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3

console.log([1, 2, 3, 2, 1].slice(2, 4));
// → [2, 3]
console.log([1, 2, 3, 2, 1].slice(2));
// → [2, 3, 4]

// concat and slice example
function remove(array, index) {
    return array.slice(0, index)
        .concat(array.slice(index + 1))
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

/*
Values of type string, number and Boolean are not
objects, and though the language doesn't complain
if you try to set new properties on them, it doesn't
actually store those properties.
*/
console.log("coconuts".slice(4, 7));
// → nut
console.log("coconuts".indexOf("u"));
// → 5
/*
One difference is that a string's indexOf can search
for a string containing more than one character, whereas
the corresponding.
*/
console.log("one two three".indexOf("ee"));
// → 11
/*
The trim method removes whitespace (spaces, newlines, tabs and
similar characters) from the start and end of a string.
*/
console.log("   okay \n".trim());
// → okay
/*
The zeroPad function from the prevous chapter also exists as a method.
It is called padStart and takes the desired length and pading character
as arguments.
*/
console.log(String(6).padStart(3, "0"));
// → 006
/*
You can split a string on every occurence of another string with
split and join it again with join.
*/
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → "Secretarybirds. specialize. in. stomping"
/*
A string can be repeated with the repeat method, which creates a new
string containing multiple copies of the original string, glued together.
*/
console.log("LA".repeat(3));
// → LALALA