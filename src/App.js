import React, { useState } from 'react';
import './styles/App.css';

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
          <div key={card.id} className="card">
            <div>
              <img 
                src={process.env.PUBLIC_URL + card.src}
                className="front" 
                alt="card front">
              </img>
              <img 
                src={process.env.PUBLIC_URL + '/images/brain Small.png'}
                className="back"
                alt="card back">
              </img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
