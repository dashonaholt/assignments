const readline = require('readline-sync')
// Defining our variables and parameters for use in global functions
const num1 = readline.question('Please enter yout first number: ');
const num2 = readline.question('Please enter your second number: ');

const operations = ['add', 'sub', 'mul', 'div'];
let userInput = readline.keyInSelect(operations, 'Please enter the operation to perform: add, sub, mul, or div')


// building the global functions like add, sub , etc
function add(num1, num2) {
    console.log('The result is: ' + (Number(num1) + Number(num2)))
}
function sub(num1, num2) {
    console.log('The result is: ' + (Number(num1) - Number(num2)))
}
function mul(num1, num2) {
    console.log('The result is: ' + (Number(num1) * Number(num2)))
}
function div(num1, num2) {
    console.log('The result is: ' + (Number(num1) / Number(num2)))
}


// is creating the requirements for the global functions to run. 
if(userInput === 0) {
    add(num1, num2);
} else if (userInput === 1) {
    sub(num1, num2);
} else if (userInput === 2) {
    mul(num1, num2);
} else { 
    div(num1, num2);
}

