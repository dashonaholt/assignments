import React from "react"
import Logo from "../assets/HarryPotterLogo.png"
import {Link} from 'react-router-dom'



export default function Navbar(){
    return(
        <div className="navbar">
            {/* <div className="leftSide"></div> */}
            <img src={Logo} style={{height:100 , width:400}} />
            {/* <div className="rightSide"> */}
            {/* <nav style={{margin:10, fontSize: '36px', alignSelf: "flex-end"}}> */}
        {/* <i class="fa-solid fa-bolt" /> */}
        <nav className="nav-links">
          <Link to="/" style={{padding: 15}}>
          Home
          </Link>
          <Link to="/houselist" style={{padding: 15}}>
          HouseList
          </Link>
          <Link to="/TopStudents" style={{padding: 15}}>
          TopStudents
          </Link>
          <Link to="/staff" style={{padding: 15}}>
          Staff
          </Link>
        </nav>
        {/* </div> */}
        </div>
    )
}