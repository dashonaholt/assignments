import React from "react"
import Callout from "./Callout"

export default function App() {
    // creating a differnt state for each color and angle
    const [color1, setColor1] = React.useState("#FFFFFF")
    const [color2, setColor2] = React.useState("#FFFFFF")
    const [angle, setAngle] = React.useState(0)
 console.log(color1, color2, angle)

    const backGround = `linear-gradient(${angle} ${color1} ${color2})`
    const mozBackground = `linear-gradient(${angle} ${color1} ${color2})`
    const webKit = `linear-gradient(${angle} ${color1} ${color2})`

 
   function handleChange1(e) {
    console.log(e.target.value)
    setColor1(e.target.value)
   }
   function handleChange2(event) {
     console.log(event)
    setColor2(event.target.value)
   }
   function handleChange(event) {
    setAngle(event.target.value)
   }



  return (
  <main>
    <h1>CSS Gradient Code Generator</h1>
    <div className="squares">
    <Callout>
    <textarea readOnly value={`background:(${backGround}); 
-moz-background:(${mozBackground}); 
-webkit:(${webKit})`} ></textarea>


<div className="colorbox" style={{background: `linear-gradient(${angle}deg, ${color1} , ${color2})`}}>

</div>
            
</Callout>

<Callout>
  <h2>Options:</h2>
            <form>  
            <p>
             <label htmlFor="color1">Color1: </label> 
              <input
            type="color"
            onChange={handleChange1}
            name="color1"
            value={color1}
            />
            </p>
            
            <p>
            <label htmlFor="color2">Color2: </label> 
             <input
            type="color"
            onChange={handleChange2}
            name="color2"
            value={color2}
            />
            </p>
            
            <p><label htmlFor="angle">Angle: </label> 
            <input 
            type="number"
            onChange={handleChange}
            name="angle"
            value={angle}
            />
            </p>
            </form>
</Callout>
</div>
  </main>
  )
}


