const mongoose = require("mongoose")
const Schema = mongoose.Schema



// stretches blueprint
const stretchSchema = new Schema ( {
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    directions: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("Stretch", stretchSchema)