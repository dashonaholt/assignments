import React from "react"
import Buttons from "./Buttons"

export default function App() {
const[squares, setSquares] = React.useState(["white", "white", "white", "white"])


const squareElements = squares.map((square, index) => {
  return <div className={`square-${index} box`} style={{backgroundColor: square}} key={index} ></div>
})

  return (
      <div>
        {squareElements}
        <Buttons setSquares={setSquares} />
      </div>
  )
}


