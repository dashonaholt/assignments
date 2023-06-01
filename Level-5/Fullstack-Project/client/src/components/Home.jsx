import React from "react";
import Logo from "../assets/LOGO.png";

export default function Home() {
return (
<div className="home-route">
    <div className="exercise-card">
        <h2> Stretch </h2>
        <img src={Logo} />
        <h3>
            Stretching the hips and back can provide numerous physical and mental
            health benefits. Here are some of them:
        </h3>
        <br></br>
        <ol>
        <li>
            <b>Improved posture:</b> Stretching the hips and back can help
            improve your posture by reducing tension and tightness in these
            areas, which can lead to better alignment of your spine and other
            joints.
        </li>
        <li>
            <b>Reduced lower back pain:</b> Stretching the hips and back can
            help reduce lower back pain by improving flexibility and range of
            motion in these areas, which can help alleviate pressure on your
            lower back.
        </li>
        <li>
            <b>Increased flexibility and range of motion:</b> Stretching the
            hips and back can help increase your flexibility and range of motion
            in these areas, which can lead to better posture and balance, and
            can help reduce the risk of injury.
        </li>
        <li>
            <b>Improved athletic performance:</b> Regular stretching of the hips
            and back can help improve your athletic performance by increasing
            your flexibility, range of motion, and reducing the risk of injury.
        </li>
        <li>
            <b>Reduced stress and improved relaxation:</b> Stretching the hips
            and back can help reduce stress and promote relaxation by releasing
            tension in these areas and improving circulation.
        </li>
        <li>
            <b>Improved circulation: </b>Stretching the hips and back can help
            improve circulation by increasing blood flow to these areas, which
            can help reduce muscle fatigue and improve recovery time.
        </li>
        <li>
            <b>Enhanced mobility and balance:</b> Stretching the hips and back
            can help enhance your mobility and balance by improving the function
            of your joints and reducing the risk of falls.
        </li>
        </ol>
        <br></br>
        <h3>
        <b>
            Overall, stretching the hips and back is an important part of a
            healthy lifestyle and can provide numerous physical and mental
            health benefits.
        </b>
        </h3>
    </div>
</div>
);
}
