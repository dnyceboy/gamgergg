const path = require('path');
const express = require('express');
const gameControllers = require('./controllers/gameControllers');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, '../client')));

app.get('/', gameControllers.getGames, (req, res) => {
  res.json(res.locals.games);
});

app.use('*', (req, res) => {
  res.status(404).send('This url does not exist');
})

app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Express error handler caught middleware error',
    status: 500,
    message: {error: 'An Error occured with server and middleware'},
  };
  const errorObj = Object.assign({}, defaultError, err);
  console.log(errorObj.log);
  return res.state(errorObj.status).json(errorObj.message);
})

app.listen(PORT, () =>{
  console.log(`Listening on ${PORT}`);
})