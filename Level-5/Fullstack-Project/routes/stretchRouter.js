const express = require("express")
const stretchRouter = express.Router()
const Stretch = require("../models/stretches.js")

// GET ALL
stretchRouter.route("/")
.get((req, res, next) => {
    Stretch.find()
    .then(stretching => {
        return res.status(200).send(stretching)
    })
    .catch (err => {
        res.status(500)
        return next(err)
    })
})

//GET BY TYPE
stretchRouter.get("/search/type", (req, res, next) => {
    Stretch.find({type: req. query. type}) 
    .then((stretching) => {
        return res.status(200).send(stretching);
    })
    .catch((err) => {
        res.status(500);
        return next(err)
    })
})

// POST REQUEST 
stretchRouter.post("/" , (req, res, next) => {
    const newStretch = new Stretch(req.body);
    newStretch.save()
    .then(savedStretch => {
        return res.status(201).send(savedStretch)
    })
    .catch (err => { 
        res.status(500);
        return next(err);
    })
})

// DELETE ONE
stretchRouter.delete("/:stretchId", (req, res, next) => {
    Stretch.findOneAndDelete({_id: req.params.stretchId})
    .then(deletedStretch => {
        return res.status(200).send(`Successfully deleted ${deletedStretch.name} from the database`)
    })
    .catch(err => {
        res.status(500);
        return next(err);
    })
})
// Edit(PUT)
stretchRouter.put("/:stretchId" , (req, res, next) => {
    Stretch.findOneAndUpdate({_id: req.params.stretchId},
        req.body,
        {new: true})
        .then(updatedStretch => {
            return res.status(201).send(updatedStretch)
        })
        .catch(err => {
            res.status(500);
            return next(err);
        })
})

module.exports = stretchRouter