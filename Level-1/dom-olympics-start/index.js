const header = document.getElementById("header");
header.textContent = "JavaScript Made This!!";
header.style.textAlign = "center";
header.style.fontSize = "x-large";
header.style.fontWeight = "bold";

const brk = document.createElement("br");
header.appendChild(brk)

const span = document.createElement("span");
span.textContent = "Dashona Holt";
span.style.fontSize = "medium";
span.style.color = "peachpuff";
header.appendChild(span); 

const spann = document.createElement("span");
spann.textContent = " wrote the JavaScript";
spann.style.fontSize = "medium";
header.appendChild(spann)

const messages = document.getElementsByClassName("message")
messages[0].textContent = " Hey, do not forget to take the meat out of the freezer."
messages[1].textContent = "Thank you for reminding me, I almost forgot."
messages[2].textContent = "I figured."
messages[3].textContent = "You are a life saver!"

const buttonclear = document.getElementById('clear-button')
document.getElementsByClassName('message')

buttonclear.addEventListener('click', () => {
    for (var i = 0; i < messages.length; i++) {
        // if ( i % 2 === 0) {
        //     messages[i].textContent = ''
        //     messages[i].remove("style")
        // } else if (i % 2 === 1) {
        //     messages[i].textContent = ''
        //     messages[i].remove("style")
        // }
        messages[i].textContent = ''
        messages[i].style.backgroundColor = 'white'
    }
    });
    let dropDown = document.getElementById("theme-drop-down")
    dropDown.addEventListener("click", colorChange)

    let messageLeft = document.getElementsByClassName("message left")
    let messageRight = document.getElementsByClassName("message right")

    function colorChange() {
        if (dropDown.value === "theme-one") {
            //use another for loop to loop over left messages
            for (var i = 0; i < messageLeft.length; i++){
                messageLeft[i].style.backgroundColor = "burlywood";
            }
            //use a for loop to loop over right messages
            for (var i = 0; i < messageRight.length; i++){
                messageRight[i].style.backgroundColor = "lightblue"
            }

        } else if ( dropDown.value === "theme-two") {
            //use a for loop to loop over right messages
            for (var i = 0; i < messageRight.length; i++ ) {
                messageRight[i].style.backgroundColor = "red"
            }
            //use another for loop to loop over left messages
            for ( var i = 0; i < messageLeft.length; i++ ) {
                messageLeft[i].style.backgroundColor = "black"
                messageLeft[i].style.color = "white"
            }

        }
    }
    //grabbing input from html file
const input = document.getElementById("input")
    //grabbing submit button from html file
const submit = document.getElementById("submit")
    // I added an id to the div
const messagesDiv = document.getElementById('messagesDiv')
submit.addEventListener('click', submitMessage)
//Here is initializing a counter. The counter will count the messages that are created. The counter will begin 
//counting from 1.
let messageCount = 1
function submitMessage (e) {
    e.preventDefault()
//If the count is an even number, then a div for the right side of the messages will be created.
  //That div will contain an input value and it will be appended to the messagesDiv.
  //Each time the submit button is triggered, a new  message is created, and the messageCount is keeping 
  //track of how many messages are created. 
  //The messageCount is keeping track by incrementing by 1 each time the submit button is triggered.
  //Here is where the modulo operator also known as the remainder operator is being used. If the value of messageCount is divisible by 2, then
  //the value of the messageCount is even. 
  //So, if it's even, then this if statement is true and the messages for the right side will be created.
  if (messageCount % 2 === 0) {
    //creating div for right side of messages
    const rightDiv = document.createElement("div")
//adding the class message right from the html file to the rightDiv by using the className property
rightDiv.className = "message right"
//displaying the input value by using textContent and appending the rightDiv to the messagesDiv
rightDiv.textContent = input.value
messagesDiv.append(rightDiv)
//counting the messages
messageCount++; 
//taking a look at the messageCount in the console to get a better idea of what it's doing
console.log(messageCount, "rightCount")
    } else { 
        //this else statement is for when the messageCount is not even(meaning the number is odd)
    
     //If the count is not even number(meaning it's odd), then a div for the left side of the messages will be created.
     //That div will contain an input value and it will be appended to the messagesDiv.
     //Each time the submit button is triggered, a new  message is created, and the messageCount is
     //keeping track of how many messages are created. 
     //The messageCount is keeping track by incrementing by 1 each time the submit button is triggered.
    
      //creating div for left side of messages
    const leftDiv = document.createElement("div") 
//adding the class message left from the html file to the rightDiv by using the className property
    leftDiv.className = "message left"
    
//displaying the input value by using textContent and appending the leftDiv to the messagesDiv
    leftDiv.textContent = input.value
    messagesDiv.append(leftDiv)

//counting the messages
    messageCount++;            
 
//taking a look at the messageCount in the console to get a better idea of what it's doing
    console.log(messageCount, "leftCount")

    }
}
