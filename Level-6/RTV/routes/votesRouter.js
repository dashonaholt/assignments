const express = require("express");
const votesRouter = express.Router();
const Votes = require("../models/votes.js");
const { expressjwt: jwt } = require("express-jwt");
// GET ALL
votesRouter.route("/").get((req, res, next) => {
  Votes.find()
    .then((voting) => {
      return res.status(200).send(voting);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});
// GET VOTES BY USER ID
votesRouter.get(
  "/user",
  jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  (req, res, next) => {
    Votes.find({ user: req.auth._id })
      .then((votes) => {
        return res.status(200).send(votes);
      })
      .catch((err) => {
        res.status(500);
        return next(err);
      });
  }
);

// ADD ONE
votesRouter.post(
  "/",
  jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  (req, res, next) => {
    req.body.user = req.auth._id;

    const newVote = new Votes(req.body);
    newVote
      .save()
      .then((savedVote) => {
        return res.status(201).send(savedVote);
      })
      .catch((err) => {
        res.status(500);
        return next(err);
      });
  }
);

// DELETE ONE
votesRouter.delete(
  "/:votesId",
  jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  (req, res, next) => {
    Votes.findOneAndDelete({ _id: req.params.votesId, user: req.auth._id }) //only want the user that made it to delete it

      .then((deletedVote) => {
        return res
          .status(200)
          .send(`Successfully deleted ${deletedVote.title} from the database`);
      })
      .catch((err) => {
        res.status(500);
        return next(err);
      });
  }
);
// Edit(PUT)
votesRouter.put(
  "/:votesId",
  jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  (req, res, next) => {
    Votes.findOneAndUpdate(
      { _id: req.params.votesId, user: req.auth._id },
      req.body,
      { new: true }
    ) // only want the user that made it to update it
      .then((updatedVote) => {
        return res.status(201).send(updatedVote);
      })
      .catch((err) => {
        res.status(500);
        return next(err);
      });
  }
);

// upvote/downvote/comment
module.exports = votesRouter;
