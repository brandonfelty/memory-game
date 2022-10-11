import React, { useEffect, useState } from 'react';
import './styles/App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  { "src": "/images/elk Small.png", matched: false },
  { "src": "/images/flower Small.png", matched: false },
  { "src": "/images/forest Small.png", matched: false },
  { "src": "/images/mist Small.png", matched: false },
  { "src": "/images/mountain Small.png", matched: false },
  { "src": "/images/palm Small.png", matched: false }
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

  console.log(cards);

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
          />
        ))}
      </div>
    </div>
  );
}

export default App;
