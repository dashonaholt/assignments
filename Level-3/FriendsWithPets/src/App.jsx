import React from "react"
import Friend from "./Friend"
import FriendList from "./FriendList"
import Pet from "./Pet"
import friends from "./data"
console.log(friends)

export default function App() {
  
  return (
    <div>
      <FriendList />
      <Friend friends={friends}/>
      <Pet />
    </div>
  )
}

