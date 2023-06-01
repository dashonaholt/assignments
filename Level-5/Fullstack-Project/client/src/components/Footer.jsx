import React from "react";
import Logo from "../assets/FooterLogo.png";

export default function Footer() {
    const year = new Date().getFullYear();

return (
    <footer className="footer">
        <div className="credits">
            <img src={Logo} />
            <p>Dashona Holt {year}</p>
        </div>
    </footer>
);
}
