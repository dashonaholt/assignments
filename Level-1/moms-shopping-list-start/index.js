// get elements to interact with JS
const form = document['addItem']
const input = document.getElementById('inputfield')
const submitButton = document.getElementById('myButton')
const list = document.getElementById('list')


// add event listener 
submitButton.addEventListener('click', function(event) { 
    //prevent form from submitting
    event.preventDefault()
    console.log(input.value)
    //creating a li
    const listItems = document.createElement("li")
    //creating a div 
    const itemDiv = document.createElement("div")
    // setting text content to the value of the forms name
    itemDiv.textContent = form.title.value
    //appending the div to the list item
    listItems.append(itemDiv)
    //creating delete button
    const deleteButton = document.createElement('button');
    // giving the delete button text
    deleteButton.innerText = "X"
    // appending the listItems to the list
    list.append(listItems)
    // appending the delete button to the listItems
    listItems.append(deleteButton);
    // to ensure the textbox clears after submitting
    form.title.value = "" 
// adding event listener to delete button for it to actually delete things
deleteButton.addEventListener('click', (event) => listItems.remove())
});


