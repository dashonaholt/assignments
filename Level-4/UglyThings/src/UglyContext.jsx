import React, { useEffect, useState } from "react";
import axios from "axios"

const UglyContext = React.createContext() // creating context because it is a a direct way to pass down data to children components without having to pass props multiple times

 function UglyContextProvider(props){ //context provider function is passing though props to components

    const [thingList, setThingList] = useState([]) // initial value is an empty array
    const [newInput, setNewInput] = useState({
        title: "",
        description: ""
    })
    //fetchind data from the api
    useEffect(()  => {
        axios.get("https://api.vschool.io/dashonaholt/thing" ) //  making a get  request to get  the data froom my api 
        .then(res => setThingList(res.data)) // then is setting the array to the res.data value which is the data being returned from the api
        .catch(error => console.log(error)) //catch is used if an error occurs and console logs error
    }, []) // second arguement empty array [] is to help the api run once when it is updated
    
    
//creating a post request function taking the newArray parameter
function addToApi(newArray)  {
    axios.post("https://api.vschool.io/dashonaholt/thing" , newArray) // where to send, what to send
    .then(res => setThingList(prevArray => [...prevArray, res.data])) // set array used the previous arrays data to spread in the new arrays data
    .catch(error => console.log(error)) // catching an error, if there's an error the error is logged
}


function editUglyThing(id, newInput){ //updating an existing thing with a specific id with the newInput values in newInput 
    let update = { //creating an object named update with title and description props set to the values from newInput
        title: newInput.title, 
        description: newInput.description
    }
    axios.put(`https://api.vschool.io/dashonaholt/thing/${id}`, update) //(where to send, what to send) update the ugly thing with the given id with the update object using Axios. 
        .then(res => console.log(res.data)) //logging that the response worked
        .catch(err => console.log(err)) //logging if there are any errors 
        setThingList(prevList => prevList.map(item => (item._id === id ?  //updating the state of things list by mapping over the previous list. checking if the id of the items in the array matches the specified id
            {...item, title: newInput.title, description: newInput.description} : item))) //spreading in the items to update the title and description with the new values from the newInput(line 9)
}

function deleteUglyThing(id){ //created a function passing in id as the arguement
    console.log(id)
    axios.delete(`https://api.vschool.io/dashonaholt/thing/${id}`) //where to go, what specified end point (id)
    .then(res => console.log(res.data)) //logging that the response worked
    .catch(err => console.log(err)) //logging if there are any errors 
    setThingList(thingList.filter(listItem => ( listItem._id !== id))) // updating the thing list by filtering out the deleted item with the specific id
                                                                      //checking to see if the id property of each item in the thingList is not equal to the id arguement passed to the function
}

    return ( //making values available to its child component by using -> UglyContext.(Provider)
        <UglyContext.Provider value={{  //value prop is set to an object containing the variables and functions thats being shared through context
            thingList, //array is being passed down to the child components
            addToApi,
            setThingList,
            editUglyThing,
            deleteUglyThing,
            newInput, 
            setNewInput

        }}>
             {props.children} {/*so that the children components can access data from the context parent */}
        </UglyContext.Provider>
    )
}

export {UglyContext, UglyContextProvider}