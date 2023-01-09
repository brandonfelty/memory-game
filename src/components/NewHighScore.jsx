import React from 'react';
import './NewHighScore.css';

const NewHighScore = ({username, changeUsername, saveHighScore}) => {

  return (
    <div className='hide-app'>
      <div className='newhighscore--container'>
        <h2>Congrats you made a new high score!</h2>
        <form onSubmit={saveHighScore}>
          <input placeholder='enter your username' 
            onChange={changeUsername}
            value={username}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default NewHighScore;