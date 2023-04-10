import React from "react"
import Logo from "../assets/HarryPotterLogo.png"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


export default function Navbar(){
    return(
        <div className="navbar">
            <div classname="leftSide"></div>
            <img src={Logo} style={{height:100 , width:400}} />
            <div classname="rightSide">
            <nav style={{margin:10}}>
        {/* <i class="fa-solid fa-bolt" /> */}
          <Link to="/" style={{padding: 5}}>
          Home
          </Link>
          <Link to="/houselist" style={{padding: 5}}>
          HouseList
          </Link>
          <Link to="/students" style={{padding: 5}}>
          Students
          </Link>
          <Link to="/staff" style={{padding: 5}}>
          Staff
          </Link>
        </nav>
        </div>
        </div>
    )
}