const express = require("express");
const router = express.Router();
const playerController = require("../controllers/player");

router.get("/getAllPlayers", playerController.find);

router.post("/add_player", playerController.create);

router.delete("/delete_player/:id", playerController.delete);

router.put("/update_player/:id", playerController.update);

router.get("/findPlayer/:id", playerController.findOne);

module.exports = router;
