import React, {useState, useEffect} from "react"
import axios from "axios"

export const UserContext = React.createContext()

//userAxios ensures that every request made with 
//userAxios will have an Authorization header with the appropriate token value retrieved from localStorage
const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {}, 
        token: localStorage.getItem("token") || "" , 
        votes:[],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)
    
     //useEffect hook is being used to call the getUserVotes


    function signup(credentials){
        axios.post("auth/signup", credentials)
        .then(res =>  { 
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }
    function login(credentials){
        axios.post("auth/login", credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getUserVotes()
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user:{},
            token: "",
            votes:[]
        })
    }

    function handleAuthErr(errMsg){
        setUserState(prevState => ({
            ...prevState, 
            errMsg
        }))
    }

    function resetAuthErr(){
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }

    function getUserVotes(){
        userAxios.get("/api/votes/user")
        .then(res =>  {
            setUserState(prevState => ({
                ...prevState,
                votes: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function getAllVotes() {
        userAxios.get("/api/votes")
        .then(res => {
            setUserState(prevState => ({
                ...prevState, votes: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }
     /////////created a function to updates the user's state adding a new vote, and handles errors if any occur
// Add user vote
function addVote(newVote) {
    userAxios
      .post('/api/votes', newVote)
      .then((res) => {
        setUserState((prevState) => ({
          ...prevState,
          votes: [...prevState.votes, res.data],
        }));
      })
      .catch((err) => console.log(err));
  } 
// ...

// const addVote = (newVote) => {
//   userAxios
//     .post("/api/votes", newVote)
//     .then((response) => {
//       // Assuming the response data contains the updated vote object
//       const updatedVote = response.data;
//       setUserState((prevVotes) => [...prevVotes, updatedVote]);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };


function deleteUserVotes(voteId) {
    userAxios.delete(`/api/votes/${voteId}`)
    .then(res => console.log(res))
    getUserVotes()
    
  }


  function editedUserVotes(voteId, updatedVote) {
    userAxios
      .put(`/api/votes/${voteId}`, updatedVote, {
        headers: { 
            "Authorization":`Bearer ${initState.token}`
        }
    })
    // .then(res => console.log(res, "res"))
      .then(res => {
          console.log("Issue updated successfully!");
          setUserState(prevState => ({
              ...prevState,
              //maintaining previous, adding new ones
              votes: [...prevState.votes, res.data]
              
            }))
            getAllVotes()
        })
        .catch((error) => {
            console.log("Error updating Issue:", error);
        });
        console.log(updatedVote, "updatedVote")
        console.log(voteId, "voteId")
    }
    // like vote
  function likeVote(voteId) {
    console.log(voteId)
    userAxios
      .put(`/api/votes/like/${voteId}`)
      .then((res) => {
        // find the index of the vote to update
        const voteIndex = userState.votes.findIndex(
          (votes) => votes._id === voteId
        );

        // create a new copy of the votes array with the updated votes
        const updatedVotes = [
          ...userState.votes.slice(0, voteIndex),
          {
            ...userState.votes[voteIndex],
            likes: res.data,
          },
          ...userState.votes.slice(voteIndex + 1),
        ];

        // update the state of setUserState with the new array of votes
        setUserState((prevState) => ({
          ...prevState,
          votes: updatedVotes,
        }));

        // fetch updated public votes and update the state
        getUserVotes();
      })
      .catch((err) => console.log(err));
  }

  // dislike Votes
  function dislikeVote(voteId) {
    userAxios
      .put(`/api/votes/unlike/${voteId}`)
      .then((res) => {
        setUserState((prevState) => ({
          ...prevState,
          votes: prevState.votes.map((vote) => {
            if (vote._id === voteId) {
              return {
                ...vote,
                likes: res.data,
              };
            }
            return vote;
          }),
        }));

        // fetch updated public votes and update the votes
        getUserVotes();
      })
      .catch((err) => console.log(err));
  }


    return (
        <UserContext.Provider
        value={{
            ...userState,
            signup,
            login,
            logout,
            addVote,
            resetAuthErr,
            getUserVotes,
            deleteUserVotes,
            editedUserVotes,
            likeVote,
            dislikeVote,
            getAllVotes
        }}>
            {props.children}
        </UserContext.Provider>
    )
}