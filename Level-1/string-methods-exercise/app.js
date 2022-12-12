//Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.
// capilizeAndLowercase("HelLo") 

function capilizeAndLowercase(string){
   //capatilize hello
var capLtr = string.toUpperCase()
//lowercase hello
var lowLtr = string.toLowerCase()
//concat(
return capLtr.concat(lowLtr)
}
console.log(capilizeAndLowercase("hello"))

// //Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
// //Hint: You'll need to use Math.floor().

function findMiddleIndex (string) {
    var middleIndex = Math.floor(string.length / 2)
    return middleIndex 
}
console.log(findMiddleIndex("hello"))

// Write a function that uses slice() and the other functions you've written to return the first half of the given string
function returnFirstHalf (string) {
    var middleIndex = findMiddleIndex(string)
 var returnFirstHalf = string.slice(0,middleIndex)
 return returnFirstHalf
}
console.log(returnFirstHalf("hello"))

// Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
// Hint: If your string length is odd, use Math.floor() to round down.

function capilizeAndLowercase (string) {
    var middleIndex = findMiddleIndex(string)
    var returnFirstHalf = string.slice(0,middleIndex).toUpperCase()
    var returnSecondHalf = string.slice(middleIndex).toLowerCase()
return returnFirstHalf.concat(returnSecondHalf)
}
console.log(capilizeAndLowercase("HELLO"))