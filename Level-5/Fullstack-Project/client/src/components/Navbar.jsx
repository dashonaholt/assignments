import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/NavLogo.png";

export default function Navbar() {
return (
    <header className="navbar">
        <img src={Logo} />
        <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/backstretch">Back Stretches</Link>
            <Link to="/hipstretch">Hip Stretches</Link>
            <Link to="/both">Both</Link>
        </nav>
    </header>
);
}
