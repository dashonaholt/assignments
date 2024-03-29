import React, {useContext, useState, useEffect} from "react"
import { UserContext } from "../../context/UserProvider";
import VoteForm from "./VoteForm";
 //receives props as an argument
export default function Vote(props){
    const {title, description, _id, img, comment, token, likes} = props
console.log(likes)
    const initInputs = {
        title: title,
       description: description,
        img: img,
        comment: comment
    }
    const [inputs, setInputs] = useState(initInputs)
    //destructuring the title, description, & _id properties from the props object
    const {deleteUserVotes, editedUserVotes, likeVote, dislikeVote  } = useContext(UserContext)
    //voteCount represents the number of votes
    // const [voteCount, setVoteCount] = useState(props.upvote - props.downvote);
    // const [voteCount, setVoteCount] = useState(0);
    //userVote represents the user's vote status.
    const [userVote, setUserVote] = useState(null); //null is the initial value
const [isEditing, setIsEditing] = useState(false); // Track editing state
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
function handleChangeComment(e, index) {
    const { name, value } = e.target;
    const updatedComments = inputs?.comment?.map((c, i) => {
      if (i === index) {
        return { ...c, [name]: value };
      }
      return c;
    });
    setInputs((prevInputs) => ({
      ...prevInputs,
      comment: updatedComments,
    }));
  }
  function handleRemoveComment(index) {
    const updatedComments = inputs?.comment?.filter((c, i) => i !== index);
    setInputs((prevInputs) => ({
      ...prevInputs,
      comment: updatedComments,
    }));
  }
  function handleAddComment() {
    setInputs((prevInputs) => ({
      ...prevInputs,
      comment: [...prevInputs.comment, { content: "" }],
    }));
  }
function handleChange(e){
    console.log(inputs)
    const {name, value} = e.target
    setInputs(prevInputs => ({
        ...prevInputs,
        [name]: value
    }))
}
// const user = user && user.id === userId;
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
    {/* mapping over the comments array */}
    {/* taking two paramenters (comments, current comment) */}
    {inputs?.comment?.map((c, index) => (
            <div key={index}>
                {/* rendering an imput field for the comments content */}
              <input
                type="text"
                name="content"
                value={c.content}
                onChange={(e) => handleChangeComment(e, index)}
                placeholder="Comment"
              />
              {/*  making button to remove comments */}
              <button onClick={() => handleRemoveComment(index)}>
                Remove Comment
              </button>
            </div>
          ))}
          <button onClick={handleAddComment}>Add Comment</button>
    <button onClick={handleSave}>Save</button>
    <button onClick={handleCancel}>Cancel</button>
  </div>
) :
          (
            <div>
              <h1 className="title">{title}</h1>
              <h3 className="description">{description}</h3>
              <img src={img} alt={title} />
              {comment?.map((c, index) => (
            <h3 className="comment" key={index}>
              {c.content}
            </h3>
              ))}
              <div>
              {/* <p>Vote Count: {props.voteCount}</p> */}
                <p>like: {likes?.length}</p>
                <button onClick={() => likeVote(_id)}disabled={userVote === "upvote"}>
                  Upvote
                </button>
                <button
                  onClick={() => dislikeVote(_id)}
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