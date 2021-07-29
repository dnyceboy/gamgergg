import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

function useInput(initial){
  const [value, setValue] = useState(initial);
  const onChange = event => {
    setValue(event.target.value);
  }
  return [ value, onChange ];
}

function CreateGame(props){
  const [ name, nameOnChange ] = useInput('');
  const [ summary, summaryOnChange ] = useInput('');
  const [ release, releaseOnChange ] = useInput('');
  const [ platforms, platformsOnChange ] = useInput('');
  const [ picture_url, picture_urlOnChange ] = useInput('');

  const [ nameError, setNameError ] = useState(null);
  const [ summaryError, setSummaryError ] = useState(null);
  const [ releaseError, setReleaseError ] = useState(null);
  const [ platformsError, setPlatformsError ] = useState(null);
  const [ picture_urlError, setpicture_urlError ] = useState(null);


  const saveGame = () => {

    if(name === ''){
      setNameError('required!');
    }

    const body = {
      name,
      summary,
      release,
      platforms,
      picture_url
    };

    fetch('/api/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    })
    .then(resp => resp.json())
    .then((data) => {
      console.log(data);
    })
    .then(() => {
      props.history.push('/');
    })
    .catch(err => console.log('saveGame fetch /api/create: ERROR: ', err));



  }


  useEffect(()=>{
    setNameError(null);
  }, [name]);

  useEffect(()=>{
    setSummaryError(null);
  }, [summary]);

  return (
    <div>
      <Link to='/' >
        <button>Back To Main</button>
      </Link>
      <div className='gameCreator'>
        <div className='gameCreatorField'>
          <label htmlFor='name'>Name: </label>
          <input name='name' placeholder='' value={name} onChange={nameOnChange} />
          {nameError ? (<span className="errorMsg">{nameError}</span>) : null }
        </div>
        <div className='gameCreatorField'>
          <label htmlFor='summary'>Summary: </label>
          <input name='summary' placeholder='' value={summary} onChange={summaryOnChange} />
          {summaryError ? (<span className="errorMsg">{summaryError}</span>) : null }
        </div>
        <div className='gameCreatorField'>
          <label htmlFor='release'>Release: </label>
          <input name='release' placeholder='' value={release} onChange={releaseOnChange} />
          {releaseError ? (<span className="errorMsg">{releaseError}</span>) : null }
        </div>
        <div className='gameCreatorField'>
          <label htmlFor='platforms'>Platforms: </label>
          <input name='platforms' placeholder='' value={platforms} onChange={platformsOnChange} />
          {platformsError ? (<span className="errorMsg">{nameError}</span>) : null }
        </div>
        <div className='gameCreatorField'>
          <label htmlFor='picture_url'>Picture URL: </label>
          <input name='picture_url' placeholder='' value={picture_url} onChange={picture_urlOnChange} />
          {picture_urlError ? (<span className="errorMsg">{picture_urlError}</span>) : null }
        </div>
        <div className='createGameButtons'>
          <Link to='/' className='backlink'>
            <button className='btn'>Go Back</button>
          </Link>
          <button type='button' className='btn' onClick={saveGame}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default withRouter(CreateGame);