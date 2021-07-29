import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GameItem from './GameItem';


function GameContainer(props){
  const [gotGames, setGotGames] = useState(false);
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('/api/')
    .then(res => res.json())
    .then(games => {
      if(!Array.isArray(games)) games = [];
      // console.log(games);
      setGames(games);
      setGotGames(true);
    }).catch(err => console.log('error in GameContainer useEffect  DX', err));
  }, []);

  if(!gotGames){
    return (
      <div>
        <h1>Loading!!!</h1>
      </div>
    )
  } 

  if(!games) return null;

  //gamename picture_url

  const gameItemArray = games.map(game => <GameItem key={Math.floor(Math.random() * 1000000)} name={game.gamename} pic={game.picture_url}  /> )
  // const testGridArray = [...gameItemArray, ...gameItemArray, ...gameItemArray, ...gameItemArray, ...gameItemArray, ...gameItemArray, ...gameItemArray, ...gameItemArray, ...gameItemArray, ...gameItemArray,]
    
  return (
    <div className='mainSection'>
      <div className="header">
        <h2>Games</h2>
        <Link to={'/api/create/'} >
          <button>Create Game</button>
        </Link>
      </div>
      <div className="gamesDiv">
        {/* <GameItem name={games[0].gamename} /> */}
        {gameItemArray}
        {/* {testGridArray} */}
      </div>
    </div>
  )

}

export default GameContainer;