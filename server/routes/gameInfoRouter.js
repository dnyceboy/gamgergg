const express = require('express');
const gameController = require('../controllers/gameControllers');
const router = express.Router();

router.get('/game/:id', gameController.getGameById, (req, res) => res.status(200).json(res.locals.gameInfo));

module.exports = router;