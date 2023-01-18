// You should use multiple array methods to solve these problems. Don't use `for` loops!

// Using the provided `peopleArray` (bottom of this article), write a function that:

// 1. Returns a list of everyone older than 18, which is
// 2. sorted alphabetically by last name, and where
// 3. each name and age is embedded in a string that looks like an HTML `<li>` element


// html <li> element ------ .map()
//  sort alphabetically ------ .sort()
// returns a list of everyone older than 18 .filter()
var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
    function sortedOfAge(arr){
        // Returns a list of everyone older than 18, .filter()
        const filter = arr.filter(older => older.age > 18)
        //  sorted alphabetically by last name, and where .sort()
        const sort = filter.sort((a,b) => {
            if (a.lastName <b.lastName) {
                return -1;
            } 
            if (a.lastName > b.lastName) {
                return 1;
            }
            return 0
        })
        console.log(sort)
        // each name and age is embedded in a string that looks like an HTML `<li>` element .map()
        return sort.map( age => {
            return  `<li> ${age.firstName} ${age.lastName} is ${age.age}</li>`
        })

}

console.log(sortedOfAge(peopleArray)); 


/*
Output:
[
    "<li>Kyle Mooney is 27</li>",
    "<li>Sarah Palin is 47</li>",
    "<li>Rick Sanchez is 78</li>",
    "<li>Morty Smith is 29</li>",
    "<li>Lev Tolstoy is 82</li>"
]
 */

