const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    NickName: {
      type: String,
      required: true,
    },
    PlayerMonster: {
      type: String,
      required: true,
    },
    Rank: {
      type: String,
      required: true,
    },
  }
  //   { timestamps: true }
);

const Player = mongoose.model("Players", playerSchema);

module.exports = Player;
