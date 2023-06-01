import React, {useContext,useEffect} from "react"
import VoteForm from "./VoteForm.jsx"
import { UserContext } from "../../context/UserProvider.jsx"
import VoteList from "./VoteList.jsx"
import Vote from "./Vote.jsx"


export default function Profile() {
    const {
        user: {
            username, 
        },
        addVote,
        votes,
        getUserVotes,
    } = useContext(UserContext) // using context to pass in the username, addVote and votes
   

    //useEffect hook is being used to call the getUserVotes
    useEffect(() => {
        getUserVotes()
    },[]) //empty array ensures it'll be only called once
    
    
    return (
        <div className="profile">
            <h1>Welcome @{username}!</h1>
            <h3>Add An Issue</h3>
            <VoteForm submit={addVote}
            btnText= "add vote"
            />
            <h3>Your Issues:</h3>
            <VoteList votes={votes}/>
        </div>
    )
}