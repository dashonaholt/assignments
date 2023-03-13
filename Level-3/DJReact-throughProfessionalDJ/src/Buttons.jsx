import React from "react"

//passed button through props so that buttons could have access to the setter function in order to do different things
export default function Buttons(props){
    //destructuring props
    const {setSquares}=props
    
    //music function
    function playSound() {
        const sound = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
        sound.play();
    }
    //creating a function for black or white color change
    function blackOrWhite() {
        setSquares(["black", "black", "black", "black"])
        playSound();
    } 
    
    function purple() {
        setSquares (["purple" , "purple", "white", "white"])
        playSound();
    }
    function bottomLeft() {
        setSquares  (["white" , "white", "blue", "white"])
        playSound();
    }
    function bottomRight() {
        setSquares (["white" , "white", "white", "blue"])
        playSound();
        
    }
    function bigTimeDj1(){
        setSquares(["orange", "white", "white", "white"])
        playSound();
    }
    function bigTimeDj2() {
        setSquares (["orange", "green", "white", "white"])
        playSound();
    } 
    function bigTimeDj3() {
        setSquares (["orange", "green", "pink", "white"])
        playSound();
    } 
    function bigTimeDj4() {
        setSquares (["orange", "green", "pink", "yellow"])
        playSound();
    }

    return (

        <div>
            <button onClick={blackOrWhite}>Small time DJ</button>
            <button onClick={purple}>Party DJ</button>
            <button onClick={bottomLeft}>bottomLeft</button>
            <button onClick={bottomRight}>bottomRight</button>

            <button onClick={bigTimeDj1}>bigTimeDj1</button>
            <button onClick={bigTimeDj2}>bigTimeDj2</button>
            <button onClick={bigTimeDj3}>bigTimeDj3</button>
            <button onClick={bigTimeDj4}>bigTimeDj4</button>

        </div>
    )
}