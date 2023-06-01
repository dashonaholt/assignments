const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

//Middleware (for every request)
app.use(express.json()) //looks for a request body, and turns it into 'req.body'
app.use(morgan('dev'))

//Routes (go here)
app.use("/bounties", require("./routes/bountyRouter.js"))

//connect to MongoDB
mongoose.connect("mongodb+srv://dashonanholt:8SFEA9XdeBpXb5MD@cluster0.gd7ezzi.mongodb.net/bountydb",) 
    .then (() => console.log("connected to the DB"))

// Error handler 
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

//Server Listen
app.listen(9000, () => {
console.log("The server is running on Port 9000")
})