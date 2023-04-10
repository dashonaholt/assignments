import react from "react"
import axios from "axios"
import {useEffect, useState} from "react"
import { Link } from "react-router-dom";

export default function HouseList() {
    useEffect(()  => {
    axios.get("https://hp-api.onrender.com/api/characters/")
    .then(response => {setNames(response.data);})
    .catch(error => {console.log(error);});
    } , []);

    const [names, setNames] = useState([])
    console.log(names.filter(item => item.house.includes("Gryffindor") ? item.name : null), "test filter")
    
    return (
        
        <ul>
            <div style={{ display: 'flex', justifyContent: 'space-between', listStyleType: 'none' }}>
                <div><a className='ravenclaw' href='http://localhost:5173/houselist'><img src='https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fharrypotter%2Fimages%2F7%2F71%2FRavenclaw_ClearBG.png%2Frevision%2Flatest%2Fthumbnail%2Fwidth%2F360%2Fheight%2F360%3Fcb%3D20161020182442' style={{ width: '200px', height: '200px' }}/></a></div>
                <div><a className='slytherin' href='http://localhost:5173/houselist'><img src='https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fpotter-dictionary%2Fimages%2F4%2F45%2FSlytherin_Crest.png%2Frevision%2Flatest%3Fcb%3D20131005003705' style={{ width: '200px', height: '200px' }}/></a></div>
                <div><a className='gryffindor' href='http://localhost:5173/houselist'><img src='https://logos-world.net/wp-content/uploads/2021/08/Gryffindor-Logo-700x394.png' style={{ marginLeft: '-90px' , width: '400px', height: '200px' }}/></a></div>
                <div><a className='hufflepuff' href='http://localhost:5173/houselist'><img src='https://i.pinimg.com/originals/93/d8/42/93d8425dbc28c88332d929dc25493138.png' style={{ width: '200px', height: '200px' }}/></a></div>
            </div>
            {names.map(name => (
                <li key={name.name}>{name.name}</li>
            ))}

        </ul>
        
    )
}