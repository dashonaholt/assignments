import React from "react"

export default function App() {
const [randomColor, setRandomColor] = React.useState("")
const [count, setCount] = React.useState(1)

React.useEffect(() => {
  console.log("Effect ran")
  fetch(`https://www.colr.org/json/colors/random/${count}`)
  .then(res => res.json())
  .then(data =>setRandomColor(data.colors[0].hex))
}, [count])

  return (
      <div style={{backgroundColor:`#${randomColor}`}}>
        <h2>{count}</h2>
        <button onClick={() => setCount(prevCount => prevCount +1 )}> change colors </button>
        <pre>{JSON.stringify(randomColor, null, 2)}</pre>
    </div>
  )
}


