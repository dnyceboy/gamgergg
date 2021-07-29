import React from 'react';

function GameItem(props){

  return (
    <div className="gameItemBox">
      <img className='gameItemPic' src={props.pic} />
      {props.name}
    </div>
  )
}



export default GameItem;