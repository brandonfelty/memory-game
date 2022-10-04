import React, { useState } from 'react';
import './styles/App.css';

const cardImages = [
  { "src": "/img/elk.png" },
  { "src": "/img/flower.png" },
  { "src": "/img/forest.png" },
  { "src": "/img/mist.png" },
  { "src": "/img/mountain.png" },
  { "src": "/img/palm.png" }
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
    </div>
  );
}

export default App;
