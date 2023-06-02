const express = require("express");
const votesRouter = express.Router();
const Votes = require("../models/votes.js");
const { expressjwt: jwt } = require("express-jwt");
const votes = require("../models/votes.js");

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



// @route   PUT api/vote/like/:id
// @des     Like a vote
// @access  Private
votesRouter.put(
  "/like/:id",
  jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  async (req, res) => {
    try {
      const vote = await Votes.findById(req.params.id);
      const userId = req.auth._id;
      const username = req.auth.username;
      console.log(username);

      if (!vote) {
        return res.status(404).json({ msg: "Vote not found" });
      }

      // Check if the vote has already been liked by the user
      if (vote.likes.some((like) => like.user.toString() === userId)) {
        return res.status(400).json({ msg: "Vote already liked" });
      }

      vote.likes.push({ user: userId, username: username });
      await vote.save();

      res.json(vote.likes);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   PUT api/vote/unlike/:id
// @des     Unlike an vote
// @access  Private
votesRouter.put(
  "/unlike/:id",
  jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  async (req, res) => {
    try {
      const vote = await Votes.findById(req.params.id);
      const userId = req.auth._id;

      // Check if the vote has already been liked
      if (
        vote.likes.filter((like) => like.user.toString() === userId).length ===
        0
      ) {
        return res.status(400).json({ msg: "Vote has not yet been liked" });
      }

      // Get remove index
      const removeIndex = vote.likes
        .map((like) => like.user.toString())
        .indexOf(userId);

      vote.likes.splice(removeIndex, 1);

      await vote.save();

      res.json(vote.likes);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);
// upvote/downvote/comment
module.exports = votesRouter;
