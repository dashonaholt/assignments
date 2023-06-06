import React, { useContext, useEffect, useState } from "react";
import VoteList from "./VoteList";
import { UserContext } from "../../context/UserProvider";

export default function Public() {
  const [sortedVotes, setSortedVotes] = useState([]); //sorted list of votes
  const {votes, getAllVotes} = useContext(UserContext)

  //fetching votes from api
  useEffect(() => {
    // Check if votes exist in local storage
    const storedVotes = localStorage.getItem("votes");

    if (storedVotes) {
      setVotes(JSON.parse(storedVotes));
    } else {
    getAllVotes()
    }
    
  }, []);
// update sortedVotes when votes change
  useEffect(() => {
    //spreading in the votes, sorting the vote count by
    const sorted = [...votes].sort((a, b) => b.downvote - a.upvote);
    console.log(sorted, "sorted")
   
    setSortedVotes(sorted);
  }, [votes]);

  return (
    <div className="public">
      <VoteList votes={sortedVotes} />
    </div>
  );
}














