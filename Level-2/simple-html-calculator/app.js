// pulling display from html page 
let display = document.getElementById('display');
//pulling buttons from html page
// using array.from to make an array, to be able to use array functions
let buttons = Array.from(document.getElementsByClassName('button'));
console.log(buttons);
// .map to create a new array containing square roots of the numbers in the first array
buttons.map( button => {
    //adding click event to every button in the array
    button.addEventListener('click', (e) => {
// switch statement to select one of many code blocks to be executed
        switch(e.target.innerText) {
            case 'C':
            display.innerText = '';
            // add break statement to end execution
            break;
            case '=':
                //eval() evaluates JavaScript code represented as a string and returns its completion value 
            display.innerText = eval(display.innerText)
            break;
            // by default
            default:
            // add innertext of button to inner text of display to diplay in the calculator
            display.innerText += e.target.innerText;
        }
    })
});
