import React, { useEffect, useState } from "react";
import VoteList from "./VoteList";
import Vote from "./Vote.jsx";
import axios from "axios";

export default function Public() {
  const [votes, setVotes] = useState([]); //list of votes
  const [sortedVotes, setSortedVotes] = useState([]); //sorted list of votes

  //fetching votes from api
  useEffect(() => {
    // Check if votes exist in local storage
    const storedVotes = localStorage.getItem("votes");

    if (storedVotes) {
      setVotes(JSON.parse(storedVotes));
    } else {
    axios
      .get("/api/votes")
      .then((res) => {
        //data is being stored in the fetchedVotes
        const fetchedVotes = res.data; 
        //setVotes is updating the  votes
        setVotes(fetchedVotes);
      })
      //logging the errors
      .catch((error) => {
        console.error("Error fetching votes:", error);
      });
    }
  }, []);
// update sortedVotes when votes change
  useEffect(() => {
    //spreading in the votes, sorting the vote count by
    const sorted = [...votes].sort((a, b) => b.upvote - a.upvote);
    console.log(sorted, "sorted")
   
    setSortedVotes(sorted);
  }, [votes]);

  return (
    <div className="public">
      <VoteList votes={sortedVotes} />
    </div>
  );
}