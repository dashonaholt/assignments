import React from "react"

export default function Friend({friends}) {
    return (
        <div>
            {friends.map((friend, i) => {
                return <div key={i} id={`personDiv${i}`}>
                    <h1>{friend.name}</h1>
                    <h1>{friend.age}</h1>
                    <div id={`petDiv${i}`}>

                    {friend.pets.map((pet,index) => {
                        return <div><span key={index} > {pet.name}</span><span key={index} > {pet.breed}</span></div>
                    })} 
                    </div>
                </div>
            })}
        </div>
    )
}

// return ( 
//     <div> 
//     {friends.map(friend) => {
//         return <div key={friends.name}>
//             <h1>{fr(iends.age}</h1>
//         {friends.pets.map((pet,index)=>
//             return <span>key={index}>{pet}</span>
//             )}
//         </div>
//     })}