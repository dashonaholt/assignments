import React from "react"
import Navbar from "./Navbar"

export default function Header() {
    return (
    <div>
        <Navbar />
        <img src="https://startbootstrap.github.io/startbootstrap-clean-blog/assets/img/home-bg.jpg" className="image"/>
        <div className="cleanblog">
        <h1 >Clean Blog</h1>
        </div>
        <div className="cleanblog2">
        <span>A Blog Theme by Start Bootstrap</span>
        </div>
        </div>

    )
}