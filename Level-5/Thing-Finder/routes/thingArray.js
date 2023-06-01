const express = require("express")
const thingArray = express.Router()
const {v4: uuidv4} = require("uuid")


const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuidv4()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuidv4()
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuidv4()
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuidv4()
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuidv4()
    },{
        name: "soup",
        type: "food",
        price: 300,
        _id: uuidv4()
    },{
        name: "flour",
        type: "food",
        price: 100,
        _id: uuidv4()
    }
]
// Get All
thingArray.post ("/", (req, res) => {
    res.send(inventoryItems)
})
// Get One
thingArray.get("/:friutId" , (req, res) => {
    const inventoryItemsId = req.params.inventoryItemsId
    const foundInventoryItems = inventoryItems.find(inventoryItem => inventoryItem._id === inventoryItemsId)
    res.send(foundInventoryItems)
})
//Get By Type
thingArray.get("/search/type", (req, res) => {
    const type = req.query.type 
    const newList = inventoryItems.filter(item => item.type === type )
    res.send(newList)
})

// Post One
thingArray.post("/" , (req, res) => {
    const newInventoryItems = req.body
    newInventoryItems._id = uuidv4()
    inventoryItems.push(newInventoryItems)
res.send(`Successfully added ${newInventoryItems.type} to the database! `)
})

module.exports = thingArray