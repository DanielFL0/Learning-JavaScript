/*
Bean counting
You can get the Nth character, or letter, from a string by writing "string"[N].
The returned value will be a string containing only one character
(for example, "b"). at position string.length - 1. In other words, a 
two-character string has length 2, and its characters have positions 0 and 1.
Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase "B" characters there are in the string.
Next, write a function called countChar that behaves like countBs, except it takes
a second argument that indicates the characters that is to be counted (rather than
counting only uppercase "B" characters). Rewrite countBs to make use of this new function.
*/

function countBs(string) {
    let bCount = 0;
    for (let counter = 0; counter < string.length; counter++) {
        if (string[counter] == "B") {
            bCount++;
        }
    }
    return bCount;
}

function countChar(string, char) {
    let charCount = 0;
    for (let counter = 0; counter < string.length; counter++) {
        if (string[counter] == char) {
            charCount++;
        }
    }
    return charCount;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));