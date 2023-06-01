const express = require("express")
const app = express()

//Middleware (for every request)
app.use(express.json()) //looks for a request body, and turns it into 'req.body'

//Routes (go here)
app.use("/inventoryItems" , require("./routes/thingArray"))

//Server Listen
app.listen(4000, () => {
    console.log("The server is running on Port 4000")
    })