const Player = require("../models/player");

//create and save new user

exports.create = async (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty" });
    return;
  }

  const player = new Player({
    Name: req.body.Name,
    NickName: req.body.NickName,
    PlayerMonster: req.body.PlayerMonster,
    Rank: req.body.Rank,
  });

  try {
    player.save(player).then((data) => {
      res.send(data);
    });
  } catch (error) {
    res.json({
      message: error,
      status: 404,
    });
  }
};

exports.find = async (req, res) => {
  try {
    Player.find().then((data) => {
      res.send(data);
    });
  } catch (error) {
    res.json({
      message: error,
      status: 404,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    Player.findByIdAndDelete(id).then((data) => {
      if (!data) {
        res.status(404).send({
          message: "there is no data to delete!!!",
        });
      }
      res.status(200).send({
        message: "player was deleted",
      });
    });
  } catch (error) {
    res.json({
      message: error,
      status: 404,
    });
  }
};

exports.update = async (req, res) => {
  try {
    if (!req.body) {
      res.status(404).send({
        message: "There is no player to update!!",
      });
    }
    const id = req.params.id;

    Player.findByIdAndUpdate(id, req.body).then((data) => {
      if (!data) {
        res.status(404).send({
          message: "There is no player to update",
        });
      } else {
        res.status(200).send(data);
      }
    });
  } catch (error) {
    res.send(error);
  }
};

exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    Player.findById(id).then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Player not found",
        });
      } else {
        res.send(data);
      }
    });
  } catch (error) {
    res.send(error);
  }
};
