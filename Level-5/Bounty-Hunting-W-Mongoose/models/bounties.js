const mongoose = require("mongoose")
const Schema = mongoose.Schema

//grocery blueprint
const bountiesSchema = new Schema( {
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String, 
        required: true
    },
    living: {
        type: Boolean,
        enum: ['true', 'false'],
        required: true
    },
    bountyAmount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ['Sith', 'Jedi'],
        required: true
    }
})

module.exports = mongoose.model("Bounty", bountiesSchema)

// const bounties = [
    //     { firstName: 'Darth', lastName: 'Vader', living: false, bountyAmount: 1000000, type: 'Sith' , _id: uuidv4()},
    //     { firstName: 'Luke', lastName: 'Skywalker', living: true, bountyAmount: 500000, type: 'Jedi', _id: uuidv4()},
    //     { firstName: 'Kylo', lastName: 'Ren', living: true, bountyAmount: 750000, type: 'Sith' , _id: uuidv4()  },
    //     { firstName: 'Mace', lastName: 'Windu', living: false, bountyAmount: 250000, type: 'Jedi' , _id: uuidv4()  }
    // ]
    