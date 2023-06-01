import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Both() {
    const [stretches, setStretches] = useState([]);

    function getStretches() {
        axios
            .get("/stretches")
            .then((res) => setStretches(res.data))
            .catch((err) => console.log(err.res.data.errMsg));
}

    useEffect(() => {
        getStretches();
}, []);

return (
    <div className="both-route">
        {stretches
            .filter((stretch) => stretch.type === "both")
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
