/*
Write a loop that makes seven calls to console.log to output
the following triangle:
#
##
###
####
#####
######
It may be useful to know that you can find the length of a string
by writing .length after it.
*/

let message = '#';
// Starts the triangle with only '#'
while (message.length <= 7) {
    console.log(message);
    message += '#';
    // Keeps adding '#' to the message
}