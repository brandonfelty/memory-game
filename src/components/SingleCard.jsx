import React from 'react';
import '../styles/SingleCard.css';

export default function SingleCard(props) {
  // props.id
  // props.src
  return (
    <div key={props.id} className="card">
      <div>
        <img 
          src={process.env.PUBLIC_URL + props.src}
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
  )
}
