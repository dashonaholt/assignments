import React, {useContext, useState} from "react"
import { UserContext } from "../../context/UserProvider";
import VoteForm from "./VoteForm";

 //receives props as an argument
export default function Vote(props){
    const {title, description, _id, img, comment} = props

    const initInputs = {
        title: title,
       description: description,
        img: img,
        comment: comment
    }
    const [inputs, setInputs] = useState(initInputs)
    //destructuring the title, description, & _id properties from the props object
    const {deleteUserVotes, editedUserVotes} = useContext(UserContext)


    //voteCount represents the number of votes
    const [voteCount, setVoteCount] = useState(0); //0 is the initial value
    //userVote represents the user's vote status.
    const [userVote, setUserVote] = useState(null); //null is the initial value


const [isEditing, setIsEditing] = useState(false); // Track editing state


    //function that gets triggered when upvote is clicked
    const handleUpvote = () => {
        if (userVote === "downvote") {
          setVoteCount(voteCount + 2);
        } else if (userVote === null) {
          setVoteCount(voteCount + 1);
        }
        setUserVote("upvote");
        editedUserVotes(_id, {upvote: voteCount})
      };
    //function that gets triggered when downvote is clicked
      const handleDownvote = () => {
        if (userVote === "upvote") {
          setVoteCount(voteCount - 2);
        } else if (userVote === null) {
          setVoteCount(voteCount - 1);
        }
        setUserVote("downvote");
        editedUserVotes(_id, {downvote: voteCount})
      };
      const handleEdit = () => {
          setIsEditing(true);
        };
        const handleCancel = () => {
            // Reset the edited values to the original ones
            
            setIsEditing(false);
        };
        const handleSave = () => {
          editedUserVotes(_id, inputs)

  setIsEditing(false);
};


function handleChange(e){
    console.log(inputs)
    const {name, value} = e.target
    setInputs(prevInputs => ({
        ...prevInputs,
        [name]: value
    }))
}


    // this component is rendering the items for them to  show up
    return (
        <div>
          {isEditing ? (
  <div>
    <input 
      type="text"
      name="title"
      value={inputs.title}
      onChange={handleChange}
      placeholder="Title"
    />
    <input
      type="text"
      name="description"
      value={inputs.description}
      onChange={handleChange}
      placeholder="Description"
    />
    <input 
      type="text"
      name="img"
      value={inputs.img}
      onChange={handleChange}
      placeholder="Image"
    />
    <input 
      type="text"
      name="comment"
      value={inputs.comment}
      onChange={handleChange}
      placeholder="Comment"
    />
    <button onClick={handleSave}>Save</button>
    <button onClick={handleCancel}>Cancel</button>
  </div>
) : 
            //   <VoteForm 
            //   title={title}
            //   description={description}
            //   img={img}
            //   comment={comment}
            //   _id={_id}
            //   btnText="save"
            //   submit={editedUserVotes}
            //   /> 
            // </div>
          (
            <div>
              <h1>{title}</h1>
              <h3>{description}</h3>
              <img src={img} alt={title} />
              <h3>{comment}</h3>
              <div>
                <p>Vote Count: {voteCount}</p>
                <p>User Vote: {userVote}</p>
                <button onClick={handleUpvote}disabled={userVote === "upvote"}>
                  Upvote
                </button>
                <button
                  onClick={handleDownvote}
                  disabled={userVote === "downvote"}
                >
                  Downvote
                </button>
              </div>
              <button onClick={() => deleteUserVotes(_id)}>Delete</button>
              <button onClick={() => handleEdit()}>Edit</button>
            </div>
          )}
        </div>
      );
          }