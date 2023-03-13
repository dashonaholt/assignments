import React from "react"

export default function Card({place, price, timeToGo}){
    return(
<div className="vacation">
    <h1 className="place">{place}</h1>
    <p className="price">{price}</p>
    <p className="season">{timeToGo}</p>
</div>
    )
}