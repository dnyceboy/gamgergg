const db = require('../models/gameModel');

const gameController = {};

gameController.getGames = async (req, res, next) => {
  const query = 'SELECT * from games';
  const result = await db.query(query);
  res.locals.games = result.rows;
  next();
}

gameController.createGame = (req, res, next) => {}


module.exports = gameController;