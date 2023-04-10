import React, {useState, useContext} from "react";

import { UglyContext}  from "./UglyContext";


//1. Add comments to code to understand what's happenning
//2. Pseudocode the new parts that we are trying to add
//3. Write the new code
//4. Test the new code
//5. Repeat


// created a new array so i can allow users to input information in the form fields
export default function Forms(){
    
    const {addToApi} = useContext(UglyContext) //accessing addToApi from UglyContext component

    //creating a new state called inputs with three properties that have their initial value as empty strings
const [inputs, setInputs] = useState({ 
        title: "",
        description: "",
        imgUrl: "",
})


//created a function to handle the change event
function handleChange(event) {
    const {name, value} = event.target //destructured name and value input fields
    setInputs(prevInputs => ({...prevInputs, [name]: value})) //creating a new object by spreading in the prevInputs and updating the property with the [name] to have the new [value]
}

function handleSubmit(event) { // adding a submit function to submit the form data to the api
    event.preventDefault() // preventing page reloads
    addToApi(inputs) //calling the addtoapi function passing in (inputs) in order to add new items to the list
    setInputs({      //resetting the input fields by setting the inputs state to a object with empty properties
        title: "",
        description: "",
        imgUrl: "",
    })
}

// returning the form and form inputs with type, names, values and an handle change to handle the change of the input fields
    return (
        <form onSubmit={handleSubmit} className="form">
            <label htmlFor="imgUrl">Image Url:</label>
            <input
                type="text"
                name="imgUrl"
                value={inputs.imgUrl}
                onChange={handleChange}
            />
            <label htmlFor="Title">Title:</label>
            <input
                type="text"
                name="title"
                value={inputs.title}
                onChange={handleChange}
            />
            <label htmlFor="Description">Description:</label>
            <input
                type="text"
                name="description"
                value={inputs.description}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}