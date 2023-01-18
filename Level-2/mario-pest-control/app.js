const form = document.pest
const total = document.getElementById('total')

//creating functions
function baddiePrice (num1, num2) {
    return (num1 * num2);
}

function totalCost(event) {
    event.preventDefault();

    //create varaibles
    
    
    // document.get
    
    
    
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let goombas = form.goombas.value*5;
    let bobombs =form.bobombs.value*7;
    let cheep = form.cheep.value*11;
    
    //A total price at the bottom that adds sums the total cost of baddies caught
    let result = (goombas + bobombs + cheep);
    const span = document.createElement('span')
    span.textContent = ' ' + result 
    total.appendChild(span)
    console.log(result)

})