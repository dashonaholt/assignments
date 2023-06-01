import React, {useState} from "react"

const initInputs = {
    title: "",
    description: "",
    img:"",
    comment:""
}

export default function VoteForm(props) {
    const [inputs, setInputs] = useState(initInputs)

    const {submit, btnText, _id} = props

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e){
    e.preventDefault()
    // console.log(inputs, "inputs")
    // console.log(addVote, "addVote")
    submit(inputs, _id)
    setInputs(initInputs)
    }

    const {title, description, img, comment} = inputs
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="Title"/>
            <input
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
            placeholder="Description"/>
            <input 
            type="text"
            name="img"
            value={img}
            onChange={handleChange}
            placeholder="Image"/>
            <input 
            type="text"
            name="comment"
            value={comment}
            onChange={handleChange}
            placeholder="Comment"/>
            <button>{btnText}</button>
        </form>
    )
}

