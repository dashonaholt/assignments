// instanciate XMLHttpRequest 
const xhr = new XMLHttpRequest()
//open the request xhr.open()
      // method           //url                 //async? 
xhr.open("GET", "https://api.vschool.io/pokemon", true)
//send it out
xhr.send()
// set up the ready state change function to listen for the state changes
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        //console.log to see the data & use type of to see the data type
        //console.log(typeof xhr.responseText)
        //convert JSON to java 
        //store into its own variable
        const JSONdata = xhr.responseText
        // create javascript data from jason data ( JSON.parse() )
        const data = JSON.parse(JSONdata)
        console.log(data)
        //pass in the function *****last step********
        showData(data.objects[0].pokemon)
        // get the array of data
        console.log(data.objects[0].pokemon)
        

    }
}

//make a function and place a for loop inside the function
function showData(arr) {
    for(let i=0; i < arr.length; i++) {
        const h1 = document.createElement('h1')
        h1.textContent = arr[i].name
        document.body.append(h1)
    }
}