import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateGame from './CreateGame';
import GameContainer from './GameContainer';

function MainContainer(){
  return (
    <div className='router'>
      <Switch>
        <Route exact path='/' component={GameContainer} />
        <Route exact path='/api/create' component={CreateGame} />
      </Switch>
    </div>
  )
}

export default MainContainer;