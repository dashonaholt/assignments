//defining what we are going to call the array (...animals)
function collectAnimals(...animals) {
    // returning the array
return animals
}
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//Write a function that returns a food object with the array names as properties. 
//You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:


// function taking three arguements
function combineFruit(fruit, sweets, vegetables){
    // returning the name value pair
    return {
        fruit,
        sweets,
        vegetables
    };
}

console.log(combineFruit(["apple", "pear"],
            ["cake", "pie"],
            ["carrot"]))

//=> {
    //     fruit: ["apple", "pear"],
    //     sweets: ["cake", "pie"],
    //     vegetables: ["carrot"]
    // }
    

    //Use destructuring to use the property names as variables. Destructure the object in the parameter:
    // passing in the object with the properties {location, duration}
function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
}
console.log(parseSentence({
location: "Burly Idaho",
duration: "2 weeks"
}))


//Use array destructuring to make this code ES6:
function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}

//Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    [firstFav, secondFav, thirdFav]= arr;

    return `My top three favorite activities are, ${firstFav}, ${secondFav} and ${thirdFav}.`
}
console.log(returnFavorites(favoriteActivities))



// Use the Rest and Spread Operator to help take any number of arrays, and return one array. 
//You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.
function combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals) {

    return [
        ...realAnimals, ...magicalAnimals, ...mysteriousAnimals
    ]
}
const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];
console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//---------------------HELP WITH THIS ONE------------------------
//Try to make the following function more ES6y:
const product = (...numbers) => numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
    console.log(product(1, 2, 3, 4, 5))

//---------------------HELP WITH THIS ONE------------------------
//Make the following function more ES6y. Use at least both the rest and spread operators:
const unshift = (array, ...arr2) => [...arr2, ...array];
console.log(unshift([1,2,3,4,5], 4,5,6,7,8))
;


//Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:
function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        [firstName, lastName] = name
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}
console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
