import React, { useEffect, useState } from 'react';
import './styles/App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  { "src": "/images/elk Small.png" },
  { "src": "/images/flower Small.png" },
  { "src": "/images/forest Small.png" },
  { "src": "/images/mist Small.png" },
  { "src": "/images/mountain Small.png" },
  { "src": "/images/palm Small.png" }
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    firstCard ? setSecondCard(card) : setFirstCard(card);
  };

  useEffect(() => {
    checkChoice(firstCard, secondCard);
  }, [secondCard]);

  const checkChoice = (firstChoice, secondChoice) => {
    if (firstChoice && secondChoice){
      if (firstChoice.src === secondChoice.src){
        console.log('Congrats they match!');
      } else {
        console.log('Sorry please try again');
      }
      resetTurn();
    }
  };

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setTurns(prevTurn => prevTurn++);
  };

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice}/>
        ))}
      </div>
    </div>
  );
}

export default App;
