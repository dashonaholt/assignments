//Create a new JavaScript file and put these two arrays at the beginning. You will write a single function that performs many operations on them.
//After every command, use console.log() to inspect your arrays. 
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1. Remove the last item from the vegetable array.
vegetables.pop()
console.log(vegetables)
// 2. Remove the first item from the fruit array.
fruit.shift()
console.log(fruit)
// 3. Find the index of "orange."
var fruitIndex = fruit.indexOf("orange")
console.log(fruitIndex)
// 4. Add that number to the end of the fruit array.
var fruitArr = fruit.push("1")
console.log(fruitArr)
// 5. Use the length property to find the length of the vegetable array.
var arrayLength = vegetables.length;
console.log(vegetables.length)
// 6. Add that number to the end of the vegetable array.
vegetables.push("3")
console.log(vegetables)
// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables)
console.log(food)
// // 8. Remove 2 elements from your new array starting at index 4 with one method.
var newArray = food.splice(4, 2)
console.log(newArray)
// 9. Reverse your array.
var reverseArray = food.reverse()
console.log(reverseArray)
// 10. Turn the array into a string and return it.
var revArr = reverseArray.toString()
console.log(revArr)