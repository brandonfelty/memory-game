import React, { useState } from 'react';
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

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  }

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {cards.map((card) => (
          <SingleCard key={card.id} card={card}/>
        ))}
      </div>
    </div>
  );
}

export default App;
