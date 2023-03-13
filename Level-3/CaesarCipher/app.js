var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
console.log("Your Phrase Is " + input)

//splitting up the alphabet one letter at a time
var alphabet = "abcdefghijklmnopqrstuvwxyz". split('');

// parseInt is one of the ways to take a string a return it to a number
var shift = parseInt(readline.question('How many letters would you like to shift? '));

function position (text) {
const phrase = text.split('').map(letter => {
    if ( letter === ' ' ) {
        return ' '
    } else {
    let lettershift = alphabet.indexOf(letter) + shift
    if (lettershift > 25) {
        //divide by 26 & return the remainder
        lettershift = lettershift % 26
    }
    return alphabet[lettershift]
    }
})

return phrase.join('')
}
console.log("Your Encripted Phrase Is: " + position(input));

