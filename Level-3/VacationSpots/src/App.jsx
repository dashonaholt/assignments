import React from "react"
import data from "./data"
import Card from "./Card"

export default function App() {
  const card = data.map((item) => {
    return (
      <Card key={item.place} {...item}
      />
    )
    
  })
  return (
    <div>
      {card}
    </div>
  )
}

