import react from "react"
import axios from "axios"
import {useEffect, useState} from "react"

export default function HouseList() {
    useEffect(()  => {
        axios.get("https://hp-api.onrender.com/api/characters/")
        .then(response => {setNames(response.data);})
        .catch(error => {console.log(error);});
    } , []);

    const [names, setNames] = useState([])

    //create state based on which house is selected. when the user clicks on the image, the name of the house is passed into selectedHouse state and the list of character names return for that house

    const [selectedHouse, setSelectedHouse] = useState(null)

    //This is filtering the names based on which house is selected. Using null will display nothing if the image isn't clicked yet.
    const filteredNames = selectedHouse ? names.filter(item => item.house.includes(selectedHouse)) : null
    
    return (
        
        <ul className="SecondLink" style={{ display: 'flex', flexDirection: 'column'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between', listStyleType: 'none' , marginTop: '30px'}}>
                <div className='ravenclaw' onClick={() => setSelectedHouse("Ravenclaw")}>
                    <img src='https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fharrypotter%2Fimages%2F7%2F71%2FRavenclaw_ClearBG.png%2Frevision%2Flatest%2Fthumbnail%2Fwidth%2F360%2Fheight%2F360%3Fcb%3D20161020182442' style={{ width: '200px', height: '200px' }}/>
                </div>
                <div className='slytherin' onClick={() => setSelectedHouse("Slytherin")}>
                    <img src='https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fpotter-dictionary%2Fimages%2F4%2F45%2FSlytherin_Crest.png%2Frevision%2Flatest%3Fcb%3D20131005003705' style={{ width: '200px', height: '200px' }}/>
                </div>
                <div className='gryffindor' onClick={() => setSelectedHouse("Gryffindor")}>
                    <img src='https://logos-world.net/wp-content/uploads/2021/08/Gryffindor-Logo-700x394.png' style={{ marginLeft: '-90px' , width: '400px', height: '200px' }}/>
                </div>
                <div className='hufflepuff' onClick={() => setSelectedHouse("Hufflepuff")}>
                    <img src='https://i.pinimg.com/originals/93/d8/42/93d8425dbc28c88332d929dc25493138.png' style={{ marginLeft: '-90px', width: '200px', height: '200px' }}/>
                </div>
            </div>

            {/* using index got rid of the encountered two children error */}
            {/* The ?. represent the optional chaining. Using optional chaining 
            prevents an error from happening if the filteredNames does not exist yet. */}
            {filteredNames?.map((item, index) => 
                <p key={index}>
                    {item.name}
                </p>
            )}

        </ul>
        
    )
}