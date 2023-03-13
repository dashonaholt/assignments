import React from "react"

export default function App() {

  const [formData, setFormData] = React.useState(
    {
      name: ""
    }
  )
  console.log(formData.name)
  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }
  function handleSubmit(event){
    event.preventDefault()
    setNamesArray(prevNamesArray => [
      ...prevNamesArray, 
      //i want to grab this because this is what the value of my input is
      formData.name
    ])
  }

  const [namesArray, setNamesArray]= React.useState([])
  const namesElement = namesArray.map(item => {
    return <li>{item}</li>
  })


  return (
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
        <input
        type= "text"
        placeholder= "name "
        name="name"
        className="formData--name"
        onChange={handleChange}
        value={formData.name}
        />
        <h1>{formData.name} </h1>
        <ol>{namesElement}</ol>
        <button>submit</button>
        </form>
    </div>
  )
}

