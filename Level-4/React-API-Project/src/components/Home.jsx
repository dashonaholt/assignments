import react from "react"
import {Link} from 'react-router-dom'
import BannerImage from "../assets/HarryPotterImage.jpg"
export default function Home() {
    return (
        <div className="home">
            <div className="headerContainer" style={{height: 800, backgroundImage: `url(${BannerImage})` }}>
                <h1>Hogwarts</h1>
                <p>Battle of The Houses</p>
                <Link to="/houselist"><button>More Info</button>
                </Link>
                </div> 
        </div>
    )
}