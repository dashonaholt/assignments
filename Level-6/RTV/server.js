const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");

//from env file
process.env.SECRET;

//Middleware (for every request)
app.use(express.json()); //looks for a request body, and turns it into 'req.body'
app.use(morgan("dev"));

//Routes (go here)
app.use("/auth", require("./routes/authRouter.js"));
// app.use("/api");
app.use("/api/votes", require("./routes/votesRouter.js"));

//connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://dashonanholt:8SFEA9XdeBpXb5MD@cluster0.gd7ezzi.mongodb.net/votesdb"
  )
  .then(() => console.log("connected to the DB"));

// Error handler
app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

//Server Listen
app.listen(9000, () => {
  console.log("The server is running on Port 9000");
});
