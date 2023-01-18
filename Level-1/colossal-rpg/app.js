const readline = require('readline-sync');
// 1. Console must greet player with a fun message
const fun = readline.question(" I hope you have been practicing your skills! The time has come for you to protect and defend yourself from the enemies!");
console.log(fun)
// 2. Console must ask for the player's name and store it
const name = readline.question("what is your name?")
console.log(name)
const greeting = `hi ${name}`
console.log(greeting)
const player = new Character(`${name}`, 100, 20, "blade")
console.log(player)
// constructor function
function Character (name, healthpoints, attackpoints, inventory) {
    this.name = name;
    this.healthpoints = healthpoints;
    this.attackpoints = attackpoints;
    this.inventory = [inventory]
}
var witch = new Character("witch",50,5, "gun") // change healthpoint number to Number, not string
var wizzard = new Character("wizzard",50,5, "sword")
var vampire = new Character("vampire",50,5, "axe")

let enemies = [vampire, wizzard, witch];
const index = readline.keyIn("press the key 'w' to walk or 'e' to end the game", {limit: "we"});
let isAlive = true 
while(isAlive) {
    if(index === 'w') {
        walking()
    } else if ( index === 'e') {
        console.log("you quit")
    }
    // break
}
//create a walking function
function walking (walk) {
    // if the enemies array is less than 0, console.log "you win"
    if (enemies.length <= 0) {
                console.log("you win!")
                // to exit the game
                process.exit()
    }
    console.log("you are now walking") 
    // number between 0 and 3
    let num = randomFraction(0, 3)
    // if the number is equal to 1 run random enemy function
        if (num === 1) {
            // assign random enemy to variable index enemy
            let indexEnemy = randomEnemy()
            console.log("indexEnemy: ",indexEnemy)
            console.log(`you've encountered ${indexEnemy.name}`)
            // run the enemy encounter function
            enemyEncounter(indexEnemy)
            // if it doesnt return a one, then you continue walking safely
        } else {
            console.log("you continued walking safely")
        }
}
// function for when we encounter the enemy
    function enemyEncounter(indexEnemy) {
        // allowing the user to determine if they want to fight or run
        let fightOrRun = readline.keyIn("would you like to 'fight' ? or 'run' ?", {limit: "fr"}); {
            if ( fightOrRun === 'f') {
                fight(indexEnemy) 
            } else if (fightOrRun === "r") {
                run(indexEnemy)
            }
        }  

    }
    // 
    function randomFraction(min, max) {
        // giving me a whole number from the enemies array between 0 and 3
        return Math.floor(Math.random() * 3);
    }
    // trying to generate random enemy
    function randomEnemy() {
        // enemies.length number of enemies
        let randomNumber = Math.floor(Math.random() * enemies.length)
        console.log(randomNumber)
        // enemies array at the index of 
        // returning new array of enemies array
            return enemies[randomNumber];
    //     if (enemies.length <= 0) {
    //         console.log("you win!")
    //         process.exit()
    //     } else {
    // }
    }
function run(indexEnemy) { 
    let getAway = Math.random() 
    // let getAway = .67
    // is random number greater than or equal to .05
    if (getAway >= 0.5) {
        console.log("you got away")
    } else {
        console.log("sorry not fast enough, you have to fight")
        fight(indexEnemy)
    }
    
}

//  random attack number for the damage
    function randomAttackNumber() { 
        // generate a rabdom number between 1 and 3
        return Math.floor((Math.random() * 3 )+ 1);
    }

// while loop runs for as long as the enemies and players health is greater than zero
function fight(indexEnemy) {
    let indexAttack = randomAttackNumber()
    // index position saved as a variable
    let indexOfEnemey = enemies.indexOf(indexEnemy)
    let isFighting = true
    while (isFighting) { 
    if (player.healthpoints > 0 && indexEnemy.healthpoints > 0) {
    const playerDamage = player.healthpoints - indexEnemy.attackpoints
    const enemyDamage = indexEnemy.healthpoints - player.attackpoints
    player.healthpoints = playerDamage
    indexEnemy.healthpoints = enemyDamage
    console.log("you now have:" + player.healthpoints)
    console.log("your enemy has:" + indexEnemy.healthpoints)

        } else  if (player.healthpoints <= 0 ) {
        console.log("player healthpoints: " , player.healthpoints) 
        console.log("you have died")
        // to close the game
        process.exit()
        } else if ( indexEnemy.healthpoints <= 0 ) {
    console.log(" enemey healthpoints: " , indexEnemy.healthpoints)
    console.log("you have killed" + indexEnemy.name)
    player.inventory.push(indexEnemy.inventory[0])
    console.log('you have taken the enemies ' + indexEnemy.inventory[0])
    const option = readline.keyIn("Would you like to see the players information? if yes, press 'p' if not press 'n'" , {limit: "pn"}); {
        if( option === 'p' ) {
            console.log(player)
        }
    } 
    // remove enemey from array when defeated (.splice)
    enemies.splice(indexOfEnemey, 1)
    // console.log(enemies)
    isFighting = false
        // continueOrQuit()
    }
}
}
/// continue or quit function
function continueOrQuit() {
    let playAgain = readline.keyIn("would you like to 'continue' ? or 'quit' ?", {limit: "cq"}); 
    if ( playAgain === "q") {
        isAlive = false
    }
}

    // if the enemy has died 
        // give player health points 
        // player.healthpoints = player.healthpoints + NUMBER
