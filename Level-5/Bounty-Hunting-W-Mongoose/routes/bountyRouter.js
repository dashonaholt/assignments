const express = require("express")
const bountyRouter = express.Router()
const Bounty = require("../models/bounties.js")

//Get All
bountyRouter.route("/")
.get((req, res, next) => {
    Bounty.find() 
    .then(bount => {
        return res.status(200).send(bount)
    })
    .catch(err => {
        res.status(500)
        return next(err)
    })
})

// Post request to post new items
bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body);
    newBounty.save()
    .then(savedBounty => {
        return res.status(201).send(savedBounty);
    })
    .catch(err => {res.status(500);
        return next(err);
    })
})
//Delete One
bountyRouter.delete("/:bountyId", (req, res, next) => {
    Bounty.findOneAndDelete({_id: req.params.bountyId})
    .then(deletedBounty => {
        return res.status(200).send(`Successfully deleted ${deletedBounty.firstName} from the database`)
    })
    .catch(err => {
        res.status(500);
        return next(err);
    })
})
// Edit
bountyRouter.put("/:bountyId" , (req, res, next) => {
    Bounty.findOneAndUpdate({_id: req.params.bountyId},
        req.body,
        {new: true})
        .then(updatedBounty => {
            return res.status(201).send(updatedBounty)
        })
        .catch(err => {
            res.status(500);
            return next(err);
        })
})

//Get by Type
bountyRouter.get("/search/type", (req, res, next) => {
  Bounty.find({ type: req.query.type })
    .then((bounty) => {
      return res.status(200).send(bounty);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

module.exports = bountyRouter