const express = require("express")
const bountyRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const bounties = [
    { firstName: 'Darth', lastName: 'Vader', living: false, bountyAmount: 1000000, type: 'Sith' , _id: uuidv4()},
    { firstName: 'Luke', lastName: 'Skywalker', living: true, bountyAmount: 500000, type: 'Jedi', _id: uuidv4()},
    { firstName: 'Kylo', lastName: 'Ren', living: true, bountyAmount: 750000, type: 'Sith' , _id: uuidv4()  },
    { firstName: 'Mace', lastName: 'Windu', living: false, bountyAmount: 250000, type: 'Jedi' , _id: uuidv4()  }
]


bountyRouter.route("/")
.get((req, res) => {
    res.send(bounties)
})
.post((req, res) => {
const newBounty = req.body
newBounty._id = uuidv4()
bounties.push(newBounty)
res.send(`Successfully added ${newBounty.firstName} to the database! `)
})


module.exports = bountyRouter