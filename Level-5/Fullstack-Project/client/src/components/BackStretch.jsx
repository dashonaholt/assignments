import React, { useState, useEffect } from "react";
import axios from "axios";

export default function BackStretch() {
    const [backStretches, setBackStretches] = useState([]);

    function getBackStretches() {
        axios
            .get("/stretches")
            .then((res) => setBackStretches(res.data))
            .catch((err) => console.log(err.res.data.errMsg));
}
    useEffect(() => {
        getBackStretches();
}, []);

return (
    <div className="back-route">
        {backStretches
            .filter((stretch) => stretch.type === "back")
            .map((stretch) => (
                <div className="exercise-card" key={stretch._id}>
                    <h2 className="stretch-name">{stretch.name}</h2>
                    <img src={stretch.image} alt={stretch.name} />
                    <h3>{stretch.description}</h3>
                    <p>{stretch.directions}</p>
                </div>
        ))}
    </div>
);
}
