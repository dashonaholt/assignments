const square = document.getElementById('square')
square.addEventListener('mouseover', function(){
    square.style.backgroundColor = 'blue'
})
square.addEventListener('mousedown', function(){
    square.style.backgroundColor = 'red'
})
square.addEventListener('mouseup', function(){
    square.style.backgroundColor = 'yellow'
})
square.addEventListener('dblclick', function(){
    square.style.backgroundColor = 'green'
})
document.addEventListener('wheel', function(){
    square.style.backgroundColor = 'orange' 
})

document.addEventListener("keyup", e => {
    if (e.key === "b") {
        square.style.backgroundColor = "blue";
    } else if (e.key === "r") {
        square.style.backgroundColor = "red";
    } else if (e.key === "y") {
        square.style.backgroundColor = "yellow";
    } else if (e.key === "g") {
        square.style.backgroundColor = "green";
    } else if (e.key === "o") {
        square.style.backgroundColor = "orange";
    }
})
