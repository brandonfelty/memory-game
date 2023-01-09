import React, { useEffect, useState } from 'react';
import './styles/App.css';
import SingleCard from './components/SingleCard';
import Leaderboard from './components/Leaderboard';
import NewHighScore from './components/NewHighScore';

const cardImages = [
  { "src": "/images/elk Small.png", matched: false },
  { "src": "/images/flower Small.png", matched: false },
  { "src": "/images/forest Small.png", matched: false },
  { "src": "/images/mist Small.png", matched: false },
  { "src": "/images/mountain Small.png", matched: false },
  { "src": "/images/palm Small.png", matched: false }
];


const dummyData = [
  {user_id: 1, username: 'mike', turns: 5, time: 10},
  {user_id: 2, username: 'larry', turns: 6, time: 100},
  {user_id: 3, username: 'cleo', turns: 12, time: 10},
  {user_id: 4, username: 'stew', turns: 17, time: 100},
  {user_id: 5, username: 'mary', turns: 18, time: 100},
  {user_id: 6, username: 'cindy', turns: 18, time: 1000},
  {user_id: 7, username: 'bane', turns: 19, time: 1000},
  {user_id: 8, username: 'gerry', turns: 20, time: 100},
  {user_id: 9, username: 'tiger', turns: 20, time: 1000},
  {user_id: 10, username: 'eagermike', turns: 22, time: 1000}
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [disabled, setDisabled] = useState(false);
  //set to tru for testing
  const [highScore, setHighScore] = useState(true);
  const [username, setUsername] = useState('Mysterious Person');

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setFirstCard(null);
    setSecondCard(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    firstCard ? setSecondCard(card) : setFirstCard(card);
  };

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setTurns(prevTurn => prevTurn + 1);
    setDisabled(false);
  };

  const checkGameOver = () => {
    console.log('run checkgame over')
    if (cards.length === 0) return false;
    for (const card of cards) {
      if (!card.matched) return false;
    }
    return true;
  };

  const checkHighScore = () => {
    const scoreToBeat = dummyData[dummyData.length - 1].turns;
    if (turns < scoreToBeat) {
      console.log('new high score')
    }
  };

  useEffect(() => {
    const checkChoice = (firstChoice, secondChoice) => {
      if (firstChoice && secondChoice){
        setDisabled(true);
        if (firstChoice.src === secondChoice.src){
          setCards(prevCards => {
            return prevCards.map(card => {
              if (card.src === firstChoice.src) {
                return { ...card, matched: true };
              } else {
                return card;
              }
            });
          });
          resetTurn();
        } else {
          setTimeout(() => resetTurn(), 500);
        }
      }
    };

    checkChoice(firstCard, secondCard);
    const gameOver = checkGameOver();
    if (gameOver) {
      const highScore = checkHighScore(turns);
      setHighScore(true);
    }
  }, [firstCard, secondCard]);

  useEffect(() => {
    shuffleCards();
  }, []);

  const changeUsername = (e) => {
    setUsername(e.target.value)
  };

  const addScoreToLeaderboard = () => {
    // save score to database and reload game
  };

  const saveHighScore = (e) => {
    e.preventDefault();
    setHighScore(false);
    addScoreToLeaderboard();
    shuffleCards();
  }

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {cards.map((card) => (
          <SingleCard 
            key={card.id} 
            card={card} 
            handleChoice={handleChoice}
            flipped=
              {
                card === firstCard ||
                card === secondCard ||
                card.matched
              }
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
      <Leaderboard dummyData={dummyData} />
      {highScore && 
      <NewHighScore 
        username={username}
        changeUsername={changeUsername}
        saveHighScore={saveHighScore}
      />
      }
    </div>
  );
}

export default App;
