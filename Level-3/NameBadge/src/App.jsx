import React  from "react"
import Card from "./Card"

export default function App() {
  const initState = {
    firstName:  "",
    lastName: "",
    Email: "",
    placeOfBirth: "",
    Phone: "",
    favoriteFood: "",
    Comments: ""
  }
  const [formData, setFormData] = React.useState(initState)

function handleChange(event) {
  const {name, value, type} = event.target
  setFormData(prevFormData => ({
    ...prevFormData,
    [name]: value, type
  }))
}
function handleSubmit(event) {
  event.preventDefault()
  //use set badge function in order to stay in the contents of our form so that we can map over and display the form data
  setBadges(prevBadges => [...prevBadges, formData])
  console.log('badges', badges)
  setFormData(initState)
}

const [badges, setBadges] = React.useState([])

  return (
      <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
          <input type="text"
            placeholder="First Name"
            className="form-input"
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
            minLength="3"
          />
              <input type="text"
                placeholder="Last Name"
                className="form-input"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
                minLength="3"
              />
            <input type="text"
              placeholder="Email"
              className="form-input"
              name="Email"
              onChange={handleChange}
              value={formData.Email}
              minLength="3"
            />
              <input type="text"
                placeholder="Place of birth"
                className="form-input"
                name="placeOfBirth"
                onChange={handleChange}
                value={formData.placeOfBirth}
                minLength="3"
              />
            <input type="number"
              placeholder="Phone"
              className="form-input"
              name="Phone"
              pattern="[0-9]"
              onChange={handleChange}
              value={formData.Phone}
              minLength="3"
            />
          <input type="text"
            placeholder="Favorite food"
            className="form-input"
            name="favoriteFood"
            onChange={handleChange}
            value={formData.favoriteFood}
            minLength="3"
          />
          <textarea
            value={formData.Comments}
            placeholder="Tell us about yourself"
            className="comment-input"
            name="Comments"
            onChange={handleChange}
            minLength="3"
            
          />
          <button disabled={formData.firstName.length <3 && 
            formData.lastName.length <3 &&
            formData.Email.length <3 &&
            formData.placeOfBirth.length <3 &&
            formData.Phone.length <3 &&
            formData.favoriteFood.length <3 &&
            formData.Comments.length <3
            } className="submit">Submit
          </button>
          </form>
          {/* mapping over badges to return the  card component and passing in the items of that card component using props */}
          {/* second  arguement of map is index, and we need a key prop so i am using the index as the key */}
          {badges.map((item, index) => { 
            return <Card item={item} key={index} />})
          }
    </div>
  )
}

