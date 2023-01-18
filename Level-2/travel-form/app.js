const form = document.getElementById("myForm");
const submit = document.getElementById("submit");

form.addEventListener("submit", (event) => {
event.preventDefault()
// radio Inputs
console.log(form.gender.value)
//create variables
firstName = form.firstName.value
lastName = form.lastName.value
age = form.age.value
gender = form.gender.value
city = form.city.value
diet = form.diet.value

//checkbox Inputs
//new array
const checkedDiet = []
// loop through each check box
for (let i =0; i < form.diet.length; i++) {
    if(form.diet[i].checked) {
        // add values to our new array
        checkedDiet.push(form.diet[i].value)
    }
}
console.log(checkedDiet)
// select options inputs
console.log(form.city.value)
//alert box
alert(`First Name:  ${firstName}   \nLast Name:  ${lastName}  \nAge:  ${age}  \nGender:  ${gender}  \nLocation:  ${city}  \nDiet:  ${checkedDiet}`);
})






//form.diet.value
// assign  Diet to a variable
// var  restrictions = document.restrictions.diet
// // create a new array that we can fill eith the values (as strings) of our checkboxes
// var checkedDiet = []
// // loop through each check box
// for (var i = 0; i < form.restrictions.length; i++) {
//     // check to see if the check box is checked
//     if(restrictions[i].checked) {
//         // add values to our new array
//         checkedDiet.push(restrictions[i].value)
//     }
// }
// console.log(checkedDiet)
// })

