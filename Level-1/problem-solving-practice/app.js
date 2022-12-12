// Write a function that takes an array of numbers and returns the largest (without using Math.max()
const arr = [6, 13, 250, 3];
let largestNumber = 0;

function largest() {
    for (i = 0; i <= arr.length; i++) {
        if (arr[i] > largestNumber) {
        largestNumber = arr[i];
    }
}
  return largestNumber;
}
console.log(largest([6, 13, 250, 3]));

// Write a function that takes an array of numbers and returns the largest (without using Math.max())
const array = [3, 5, 2, 8, 1];
let largestNum = 0;

function biggest() {
    for (i = 0; i <= array.length; i++) {
    if (array[i] > largestNum) {
    largestNum = array[i];
    }
    }
    return largestNum;
}
console.log(biggest([3, 5, 2, 8, 1]));

// Write a function that takes an array of numbers and returns the largest (without using Math.max())
const newArr = [-13, 40, 3, 0, 19, 22];
let newLargestNumber = 0;

function newLargest() {
    for (i = 0; i <= newArr.length; i++) {
    if (newArr[i] > newLargestNumber) {
    newLargestNumber = newArr[i];
    }
    }
return newLargestNumber;
}
console.log(newLargest([-13, 40, 3, 0, 19, 22]));

// // Write a function that takes an array of words and a character and returns each word that has that character present.
// let text = (["$hello!", "%%^%%", "test!"], "!"); 
function lettersWithStrings(arr,char) {
    const words = [];
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].split("");
    for (let  a = 0; a <word.length; a++) {
        if (word[a] === char) {
            words.push(arr[i]);
        }
    }
    } 
    return words
}
console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!") ) // => ["$hello!", "test!"]
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))  // => ["C%4!", "Hey!"]
console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"))

// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
function isDivisible(num1, num2) {
    let result = num1 / num2;
    if (Number.isInteger(result)) {
    return true;
    } else {
    return false;
    }
}
console.log(isDivisible(4, 2));

function isDivisible1(num1, num2) {
    let result = num1/num2;
    if (Number.isInteger(result)) {
        return true;
    } else {
        return false;
    }
}
console.log(isDivisible1(9, 3));


function isDivisible2(num1, num2) {
    let result =num1/num2;
    if (Number.isInteger(result)) {
        return true;
    } else {
        return false;
    }
}
console.log(isDivisible2(15,4))