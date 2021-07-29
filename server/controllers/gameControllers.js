const db = require('../models/gameModel');

const gameController = {};

gameController.getGames = async (req, res, next) => {
  const query = 'SELECT * from games';
  const result = await db.query(query);
  res.locals.games = result.rows;
  next();
}

/*

name,
summary,
release,
platforms,
picture_url

*/

gameController.createGame = async (req, res, next) => {
  try {
    const { name, summary, release, platforms, picture_url } = req.body;
    const params = [name, summary, release, platforms, picture_url];
    console.log(req.body);
    const query = `INSERT INTO games (gamename, summary, releasedate, platforms, picture_url)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *`;
    const result = await db.query(query, params);
    console.log(query);
    res.locals.newGame = result.rows[0];
    return next();
  } catch (err){
    return next({
      log: `gameController.createGame: Error ${err}`,
      message: {err: 'Error occurred in gameController.createGame. Check server terminal'},
    });
  }

  
}


module.exports = gameController;