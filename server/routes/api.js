const express = require('express');
const gameController = require('../controllers/gameControllers');
const router = express.Router();

router.get('/', gameController.getGames, (req, res) => res.status(200).json(res.locals.games));

router.get('/create', (req, res) => res.status(200).send('Route is working'));

router.post('/create', gameController.createGame, (req, res) => res.status(200).json([]));

module.exports = router;