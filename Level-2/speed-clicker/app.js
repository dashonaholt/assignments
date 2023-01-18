const button = document.querySelector('.countbutton button')
const countNumb = document.querySelector('.countNumb h1')


// adding event to listen to (click) 
// making count up function
button.addEventListener("click", countUp) 

function countUp() {
    countNumb.innerHTML ++;
    localStorage.setItem("clickcount", countNumb.innerHTML)


}








// localStorage can be used to store the amount of clicks. So, you can use the localStorage method setItem to help do so.