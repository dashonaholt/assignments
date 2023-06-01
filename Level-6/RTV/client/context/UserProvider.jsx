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
            todos:[]
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
     /////////created a function to updates the user's state adding a new vote, and handles errors if any occur
    function addVote(newVote) {
        const existingVote = userState.votes.find((vote) => vote._id === newVote._id);
        if (!existingVote) {
        userAxios.post("/api/votes", newVote) 
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                    //maintaining previous, adding new ones
                votes: [...prevState.votes, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    } else  {
        console.log("User has already voted on this issue")
    } 
}

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
    .then(res => console.log(res, "res"))
      .then((res) => {
          getUserVotes()
          //console.log("Issue updated successfully!");
          setUserState(prevState => ({
              ...prevState,
              //maintaining previous, adding new ones
              votes: [...prevState.votes]
            }))
        })
        .catch((error) => {
            console.log("Error updating Issue:", error);
        });
        console.log(updatedVote, "updatedVote")
        console.log(voteId, "voteId")
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
            editedUserVotes
        }}>
            {props.children}
        </UserContext.Provider>
    )
}