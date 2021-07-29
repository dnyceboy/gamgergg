import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateGame from './CreateGame';
import GameContainer from './GameContainer';
import GameInfo from './GameInfo';

function MainContainer(){
  return (
    <div className='router'>
      <Switch>
        <Route exact path='/' component={GameContainer} />
        <Route exact path='/create' component={CreateGame} />
        <Route exact path='/gameinfo/:id' component={GameInfo} />
      </Switch>
    </div>
  )
}

export default MainContainer;