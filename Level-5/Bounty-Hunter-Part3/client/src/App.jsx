import React, {useState, useEffect} from "react"
import axios from "axios"
import Bounty from "./components/Bounty.jsx"
import AddBountyForm from "./components/AddBountyForm.jsx"

export default function App(props) {
  
  const [bounties, setBounties] = useState([])

  function getBounties() {
    axios.get("/bounties")
      .then(res => setBounties(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getBounties()
  }, [])


  function addBounty(newBounty){
  axios.post("/bounties", newBounty)
  .then(res => {
    setBounties(prevBounty => [...prevBounty, res.data] )
  })
  .catch(err => console.log(err))
  }

  function deleteBounty(bountyId){
  axios.delete(`/bounties/${bountyId}`)
  .then(res => {
    setBounties(prevBounty => prevBounty.filter(bounty => bounty._id !==bountyId)) //returning a new array that w ill filter out the deleted movie
  })
  .catch(err =>console.log(err))
  }

  function editBounty(updates, bountyId){
    axios.put(`/bounties/${bountyId}`, updates)
    .then(res => {
      setBounties(prevBounty => prevBounty.map(bounty => bounty._id !== bountyId ? bounty : res.data))
    })
    .catch(err => console.log(err))
  }
  // useEffect(() => {
  //   axios.get("/bounties")
  //   .then(res => console.log(res.data))
  // }, [])



  return (
    <div className="bounty-container"> 
    <AddBountyForm 
      submit={addBounty}
      btnText="Add Bounty"
    />
     {/* mapping out the bounties, each bounty is recieving its firstname,lastname, living, 
     bounty amount & id individually & recieving the delete movie function*/}
      {bounties.map(bounty => 
      <Bounty 
      {...bounty} 
      key={bounty.firstName} 
      deleteBounty={deleteBounty}
      editBounty={editBounty}/>)}
    </div>
  )
}

