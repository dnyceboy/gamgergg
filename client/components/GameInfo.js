import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function GameInfo(props){ 

  const [gameInfo, setGameInfo] = useState([]);

  function useInput(initial){
    const [value, setValue] = useState(initial);
    const onChange = event => {
      setValue(event.target.value);
    }
    return [ value, onChange ];
  }

  const [ textArea, textAreaOnChange ] = useInput('');

  const { id } = props.match.params;

  useEffect(() => {
    fetch(`/gameInfo/game/${Number(id)}/`)
    .then(res => res.json())
    .then(game => {
      setGameInfo(game);
    }).catch(err => console.log('error in GameInfo useEffect  DX', err));
  }, []);

  return (
    <div className='gameInfoMainContainer'>
      <div className='gameInfoDisplay'>
        <div id="grid-img"><img src={gameInfo.picture_url} /></div>
        <div id="grid-release">{gameInfo.releasedate}</div>
        <div id="grid-platforms"><p>{gameInfo.platforms}</p></div>
        <div id="grid-summary"><p>{gameInfo.summary}</p></div>
        <div id="grid-name"><h1>{gameInfo.gamename}</h1></div>
        <div id="grid-comment"><textarea placeholder='Write your review here' name='summary' value={textArea} onChange={textAreaOnChange}></textarea></div>
      </div>

      <Link to='/' className='backlink'>
        <button className='btn'>Go Back</button>
      </Link>
    </div>
  )
}

export default GameInfo;