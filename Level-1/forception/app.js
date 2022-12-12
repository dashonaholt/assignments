var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var newArr = []

function forception(people, alphabet){
    for(var i = 0; i <people.length; i++) {
        console.log(people[i], "i")
        newArr.push(people[i])
        console.log(newArr, "newArr")
        for(var j = 0; j <alphabet.length; j++) {
            console.log(alphabet[j], "j")
            //use the toUpperCase() capitalize the letters
            var capLtr = alphabet.toUpperCase()
            console.log(capLtr)
            //use the spit method to split the strings
            var splitLtr = capLtr.split("")
            console.log(splitLtr)
            //push result inside of the newAr
            newArr.push(splitLtr[j])
        }
    } 
         console.log(newArr)
    }

forception(people,alphabet)