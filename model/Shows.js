const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Schema = mongoose.Schema;

mongoose.connect(
  process.env.MONGO_CONNECTION_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  console.log("Mongoose connection successful")
);

const Shows = new Schema({
  showName: String,
  date: Date,
  showLocation: String,
  songRank: Number,
  plotRank: Number,
  castRank: Number,
  boredomRank: Number,
  technicalRank: Number,
  originalityRank: Number,
  memorabilityRank: Number,
  gutRank: Number,
  total: Number,
});

module.exports = mongoose.model("broadway_shows", Shows, "broadway_shows");
