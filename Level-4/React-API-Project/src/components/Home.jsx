import react from "react"
import {Link} from 'react-router-dom'
import BannerImage from "../assets/HarryPotterImage.jpg"
export default function Home() {
    return (
        <div className="home">
            <div className="headerContainer">
                <h1>HOGWARTS</h1>
                <p>Battle of The Houses</p>
                <h4 className="Gryffindor"> Gryffindor 	~ Bravery, helping others, and chivalry.</h4> 
                <h4 className="Hufflepuff">Hufflepuff ~	Hard work, patience, loyalty, and fair play.</h4> 
                <h4 className="Ravenclaw ">Ravenclaw  ~	Intelligence, knowledge, planning ahead, and wit. </h4>
                <h4 className="Slytherin">Slytherin ~	Ambition, cunningness, heritage, and resourcefulness. </h4>
                <Link to="/houselist"><button>More Info</button>
                </Link>
                </div> 
        </div>
    )
}