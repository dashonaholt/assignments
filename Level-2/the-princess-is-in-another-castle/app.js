let playerStatus = ["Powered Up",  "Big", "Small" , "Dead"]

class Character{ 
    constructor(name, status, totalCoins, hasStar) {
        this.name = name
        this.status = status
        this.totalCoins = totalCoins
        this.hasStar = hasStar
    }
    namePicked() {
            this.name = "Luigi"
        
    }
    gotHit() {
        if (this.status === "Powered Up") {
            this.status = playerStatus[1]
            // telling java we are done & to save and submit the value
            this.hasStar = false
            return
        }
        if ( this.status === "Big") {
            this.status = playerStatus[2]
            return
        } 
        if (this.status === "Small") {
            this.status = playerStatus[3]
            console.log("you are dead!")
            clearInterval(intervalId)
            return
        } 
    }
    gotPowerup() {
        if ( this.status === "Small") {
            this.status = "Big"
            return
        } 
        if (this.status === "Big") {
            this.status = "Powered Up"
            return
        } 
        if (this.status === "Powered Up") {
            this.hasStar = true
            return
        }
    }
    addCoin() {
        this.totalCoins ++
    }
    print() {
        console.log (`Name: ${this.name} \n Status: ${this.status} \n Total Coins: ${this.totalCoins} \n Has Star?: ${this.hasStar}`)
    }
}
const Luigi = new Character("Luigi", "Big", 0, false)
Luigi.namePicked()
console.log(Luigi)

function range() {
    // random number between 0 ans 2 (3 because it will always round down to the next lowest integer)
    let randomNumber = Math.floor(Math.random() * 3) + 0;
    if (randomNumber === 0) {
        Luigi.gotHit()
    } else if ( randomNumber === 1) {
        Luigi.gotPowerup()
    } else if ( randomNumber === 2) {
        Luigi.addCoin()
    }
    // for the information to print
    Luigi.print()
    console.log(randomNumber)
}

let intervalId = setInterval(range, 1000)


