//Write a for loop that prints to the console the numbers 0 through 9.
const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for(var i = 0; i < myArray.length; i++) {
console.log(myArray[i])
}
//Write a for loop that prints to the console 9 through 0.
const myArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
for(var i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
    }

//Write a for loop that prints these fruits to the console.
const fruit = ["banana", "orange", "apple", "kiwi"]
for(var i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
  }

//Bronze Medal
//Write a for loop that will push the numbers 0 through 9 to an array.
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for(var i = 0; i < numbers.length; i++); {
    console.log(numbers[i])
}
//Write a for loop that prints to the console only even numbers 0 through 100.
for (var i = 0; i < 100; i++) {
    if (i % 2 === 0)
    console.log(i)
}

// Write a for loop that will push every other fruit to an array.
const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for(var i = 0; i <fruit.length; i++) {
    if(i % 2 === 0 ) {
        console.log(fruit[i])
    }
}