import React, {useContext} from 'react'
import { UglyContext } from './UglyContext'
import Uglylist from './Uglylist'

export default function List() { 

    //thingslist, deletething, edituglything are all descructured from UglyContext object created by using useContext
    const {thingList, deleteThing, editUglyThing} = useContext(UglyContext) 

    function updateUglyThing(id, newInput){ //function taking in two parameters
        editUglyThing(id, newInput) // provide a way to update an existing item in the thingList by passing the id and new input data to the editUglyThing function.
    }

    function deleteUglyThing(id){ 
        deleteThing(id) //deleting the item with the given id from the API server
    }

    return( 
        <div className='list-item'>
            {thingList.map(thing => ( //map through  thinglist 
                <Uglylist {...thing} //taking the  values from uglylist component and spreading in the values 
                key={thing.title} 
                deleteUglyThing={deleteUglyThing} // context to delete items from the list
                updateUglyThing={updateUglyThing} // context to update items from the list
                />
            ))}
        </div>
    )
}