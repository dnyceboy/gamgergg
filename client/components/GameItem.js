import React from 'react';
import { Link } from 'react-router-dom';

function GameItem(props){

  return (
    <Link to={`/gameinfo/${props.id}`} >
      <div className="gameItemBox">
        <img className='gameItemPic' src={props.pic} />
        {props.name}
      </div>
    </Link>
  )
}



export default GameItem;