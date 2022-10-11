import React from 'react';
import '../styles/SingleCard.css';

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = (e) => {
    if (!disabled && e.detail === 1) {
      handleChoice(card);
    }
  };
  
  return (
    <div className="card">
      <div className={ flipped ? "flipped" : "" }>
        <img 
          src={process.env.PUBLIC_URL + card.src}
          className="front" 
          alt="card front">
        </img>
        <img 
          src={process.env.PUBLIC_URL + '/images/brain Small.png'}
          className="back"
          alt="card back"
          onClick={handleClick}>
        </img>
      </div>
    </div>
  )
}
