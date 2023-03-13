import React from "react"

export default function DiceBox(){ 

    const [numbers, setNumbers] = React.useState([1,2,3,4,5])
    const randomNumber1 = Math.floor(Math.random() * 6)
    const randomNumber2 = Math.floor(Math.random() * 6)
    const randomNumber3 = Math.floor(Math.random() * 6)
    const randomNumber4 = Math.floor(Math.random() * 6)
    const randomNumber5 = Math.floor(Math.random() * 6)

    function randomNums(){
      setNumbers([randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5])
    }

    return (
        <div>
            <h1>
                {numbers[0]} {numbers[1]} {numbers[2]} {numbers[3]} {numbers[4]} {numbers[5]}         
            </h1>
          <button onClick={randomNums}>Random Number</button>
        </div>
      )
}