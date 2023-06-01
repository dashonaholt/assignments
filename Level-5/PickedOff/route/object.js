const express = require("express")
const object = express.Router()

//create an object that can be assigned to the req.body
const myObj = {
    name: "Grape",
    color: "Green"
}

object.use("/" ,(req, res, next) => {
   console.log(req.body, "req body before")
    req.body = myObj
    console.log(req.body, "req body after")
    next()
})

object.get("/", (req, res) => {
    res.send(myObj)
})

module.exports = object