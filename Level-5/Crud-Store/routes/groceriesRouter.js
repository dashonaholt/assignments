const express = require("express")
const groceriesRouter = express.Router()
const Grocery = require("../models/groceries.js")


// GET All 
groceriesRouter.route("/")
.get((req, res, next) => {
    Grocery.find()
    .then(groceries => {
        return res.status(200).send(groceries)
    })
    .catch(err => {
        res.status(500)
        return next(err)
    })
})
//Post request to post new items
groceriesRouter.post("/", (req, res, next) => {
    const newGrocery = new Grocery(req.body);
    newGrocery.save()
    .then(savedGrocery => {
        return res.status(201).send(savedGrocery);
    })
    .catch(err => {
        res.status(500);
        return next(err);
    });
});

//delete One
groceriesRouter.delete("/:groceryId", (req, res, next) => {
    Grocery.findOneAndDelete({ _id: req.params.groceryId })
        .then(deletedGrocery => {
            return res.status(200).send(`Successfully deleted grocery item ${deletedGrocery.name} from the database`);
        })
        .catch(err => {
            res.status(500);
            return next(err);
        });
});
//update one
groceriesRouter.put("/:groceryId", (req, res, next) => {
    Grocery.findOneAndUpdate({ _id: req.params.groceryId }, // find this one to update
        req.body, // update the object with this data
        { new: true }) // send back the updated version
        .then(updatedGrocery => {
            return res.status(201).send(updatedGrocery);
        })
        .catch(err => {
            res.status(500);
            return next(err);
        });
});

module.exports = groceriesRouter