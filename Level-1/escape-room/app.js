const readline = require("readline-sync");
// const name = readline.question("What is your name? ");
// console.log(name)
// const greeting = `hi ${name}`
// console.log(greeting)
// const game = readline.question("would you like to play a game? ");
// const instructions = readline.question("In order to escape the room, you need to find the key in the room and then open the door ");


let alive = true
let key = false
choices = ["find the key", "open the door", "put hand in hole"]

// const findKey = readline.question("would you like to find the key?");
// const hole = readline.question("would you like to put your hand in the hole?");
// const openDoor = readline.question("would you like to open the door");


//while loop
while (alive) {
    index = readline.keyInSelect(choices, 'what would you like to do first?') 
    if (choices[index] === "put hand in hole") {
        console.log("you dead")
        alive = false
    } else if (choices[index] === "open the door" && key === false) {
        console.log(" you must find the key first")
    } else if (choices[index] === "open the door" && key === true) {
                console.log("you won")
                alive = false
    } else if (choices[index] === "find the key") {
        console.log("you found the key, now open the door")
        key = true
    
    }

}

// // put hand in hole you die"
// // "you found the key"
// // "you have to find key first before opening the door"