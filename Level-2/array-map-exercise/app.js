// 1. Make an array of numbers that are doubles of the first arra
const arr = [2,5,100]
const newArr = arr.map(doubleNumbers);

function doubleNumbers(arr){
   return arr *2 ; 
}
console.log(newArr);

// // 2. Take an array of numbers and make them strings
const numbers = [2,5,100]
function stringItUp(arr) {
return   arr.map((number) => { 
        return number.toString()
}) 
}
console.log(stringItUp([3,334,45]))



// 3) Capitalize the first letter of each name and make the rest of the characters lowercase
names = ["john", "JACOB", "jinGleHeimer", "schmidt"]

function capitalizeNames(arr){
    return arr.map((name) => {
        const capFirst = name[0].toUpperCase()
        const lowSec = name.slice(1).toLowerCase()
        return capFirst + lowSec
    })
}
console.log(capitalizeNames(names)); 


// 4) Make an array of strings of the names

function namesOnly(arr){
    return arr.map(people => {
        return people.name
    })
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr){
    return arr.map(people => {
        if  ( people.age >= 18 ) {
            return `${people.name} is old enough to go to the movies`
        } else {
            return `${people.name} is too young to go to the movies`
        }
        
    })
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// 6) Make an array of the names in h1s, and the ages in h2s


function readyToPutInTheDOM(arr){
    return arr.map(namesAges  => {
        return`<h1>${namesAges.name}</h1> <h2>${namesAges.age}</h2>`;
    })
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));