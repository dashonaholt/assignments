import React, { useState, useEffect } from "react";
import axios from "axios";

export default function HipStretch() {
    const [hipStretches, setHipStretches] = useState([]); //state variable, function

function getHipStretches() {
    axios
        .get("/stretches")
        .then((res) => setHipStretches(res.data)) //if succcessful post
        .catch((err) => console.log(err.res.data.errMsg)); // if error console log error msg
}
useEffect(() => {     //hook, called to get the hip stretches
    getHipStretches();
}, []);

return ( 
    <div className="hips-route">
        {hipStretches
            .filter((stretch) => stretch.type === "hips")
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
