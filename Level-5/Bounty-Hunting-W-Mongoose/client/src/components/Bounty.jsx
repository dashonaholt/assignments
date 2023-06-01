import React, {useState} from "react"
import AddBountyForm from "./AddBountyForm.jsx"

export default function Bounty(props) {

    const {firstName, lastName, type, living, bountyAmount, _id} = props
    const [editToggle,setEditToggle] = useState(false)
return (
    <div className="bounty">
        {!editToggle ? 
        <>
        <h1> Name: {firstName} {lastName}</h1>
        <p>Type: {type} </p>
        <p>Living: {living.toString()} </p>
        <p> Bounty Amount: {bountyAmount}</p>
        <button 
        className="delete-btn"
        onClick={() => props.deleteBounty(_id)}>
            Delete
        </button>
        <button
        className="edit-btn"
            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            Edit
        </button>
        </>

        :
        <>
        <AddBountyForm 
        firstName={firstName}
        lastName={lastName}
        type={type}
        living={living}
        _id={_id}
        bountyAmount={bountyAmount}
        btnText="Submit Edit"
        submit={props.editBounty}
        />
        <button
            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            Close</button>
        </>
        }
    </div>
)
}