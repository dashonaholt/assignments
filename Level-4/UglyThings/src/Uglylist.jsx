import React, {useContext, useState} from "react"
import { UglyContext } from "./UglyContext"

import Forms from "./Forms"


//created a function called Ugly list
export default function Uglylist(props){ // recieving peops
    
const [editToggle, setEditToggle] = useState(false)  // setting my initial value to false
const {thingList, setThingList, newInput, setNewInput, deleteUglyThing, } = useContext(UglyContext) // use context is used to access these functions/states/variables
const  {title, description, imgUrl, _id, updateUglyThing} = props // using props to pass these values in

    function editBtn() { // toggling the value of the edit button when the edit button is clicked
        setEditToggle(prevState => !prevState)  // updating the state  variable using the previous state which will toggle from true to false (line 10)
    }

    function editThing (e){   
    e.preventDefault()

    updateUglyThing(_id, newInput) //calling the update UglyThing function from the UglyContext, passing in the item's id and the updated title and description values from the newInput state variable.
    setNewInput({
        title: "",
        description: "",
    })                       //setNewInput is called to reset the newInput state variable to an empty title and description 
    setEditToggle(false)  //setEditToggle is called to set the component back to view mode
}

function handleChange(e){ //created a function that updates the newInput state variable with the current value of the input field
    const {name, value} = e.target
    setNewInput(prevThing => ({...prevThing, [name]: value}))
}

//rendering the mode based on the value of my editToggle(line10)
//if edit toggle is false the component displays the image,title and description and the buttons to edit or delete
//if editToggle is true the component displays title fields with the image and save button
return (
    <>
    {!editToggle &&
    <div>
        <h1 className='title'>{title}</h1>
        <img src={imgUrl} alt=''></img>
        <h3 className="description">{description}</h3>
        <div className="button-con">
            <button onClick={setEditToggle}>Edit</button>
            <button onClick={() => deleteUglyThing(_id)}>Delete</button>
        </div>
    </div>
    } 

    {editToggle &&
    <div> 
        <input 
        name="title"
        onChange={handleChange}
        placeholder={title}
        value={newInput.title}
        />
        <img src={imgUrl} alt=''></img>
        <input
        name="description"
        onChange={handleChange}
        placeholder={description}
        value={newInput.description}
        />
        <button onClick={editThing}>Save</button>
    </div>}
    </>
)
}