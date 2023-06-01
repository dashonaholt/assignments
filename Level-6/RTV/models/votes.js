const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// stretches blueprint

const votesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Votes",
    required: true,
  },
  upvote: {
    type: Number,
    default: 0,
  },
  downvote: {
    type: Number,
    default: 0,
  },
  comment: {
    type: Array,
  },
});
// comment: {
//     type: Array,
//   },
//   upvote: {
//     type: Number,
//   },
//   downvote: {
//     type: Number,
//   },
module.exports = mongoose.model("Votes", votesSchema);
