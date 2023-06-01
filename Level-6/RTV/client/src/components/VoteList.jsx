import React from "react";
import Vote from "./Vote.jsx";

export default function VoteList(props) {
  const { votes } = props;

  if (!votes) {
    // Handle the case where votes is undefined or null
    return null;
  }

  return (
    <div className="vote-list">
      {votes.map((vote) => (
        <Vote
          key={vote._id}
          title={vote.title}
          description={vote.description}
          _id={vote._id}
          img={vote.img}
          comment={vote.comment}
        />
      ))}
    </div>
  );
}