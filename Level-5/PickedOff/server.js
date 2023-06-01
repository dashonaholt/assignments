const express = require("express")
const app = express()

//middleware
app.use(express.json())

//route
app.use("/object", require("./route/object.js")) //mount a middleware function defined in the object.js file 

// app.get("/object", (req, res) => {
//     res.send(req.newObj)
// })

//Server Listen
app.listen(4000, () => {
    console.log("The server is running on Port 4000")
    })