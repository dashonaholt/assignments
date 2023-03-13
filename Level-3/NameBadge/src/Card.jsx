import React from "react"

export default function Card(props) {
    console.log('props in card component', props)
    const {item: {firstName, lastName, Email, placeOfBirth, Phone, favoriteFood, Comments}} = props
    return (
    <div className='badge-box'>
        <div className = 'badge-header'> Badge: </div>
        <div className = 'column-one'>
            <p>Name: {firstName} {lastName}</p>
            <p> Email: {Email}</p>
            <p>Place of birth: {placeOfBirth}</p>
        </div>
        <div className='column-two'>
            <p>Phone: {Phone}</p>
            <p>Favorite food: {favoriteFood}</p>
        </div>
        <div className='column-three'>
        <p>{Comments}</p>
        </div>


    </div>
    )
}