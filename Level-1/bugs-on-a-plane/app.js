var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");

// var query = document.querySelector;

function formAlert() {
    // console.log("is button triggered?")
    var firstName = form.elements['first-name'].value;
    // console.log (firstName);
    var lastName = form.elements['last-name'].value;
    // console.log (lastName);
    var age = form.elements.age.value;
    // console.log (age);
    var gender = form.elements.gender.value;
    // console.log (gender);
    var location = form.elements['travel-location'].value;
    // console.log(location)

    var diet = [];
    function isChecked() {
    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById('vegan').value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }
    }
    //calling the function
    isChecked()
// console.log(diet)
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
    
}
submit.addEventListener("click", formAlert) 
