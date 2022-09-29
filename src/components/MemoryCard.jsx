import React, { useState } from 'react'
import BackCard from './BackCard';
import FrontCard from './FrontCard';

export default function MemoryCard(props) {
  const [isVisible, setVisible] = useState(false);
  const [isFlipping, setFlipping] = useState(false);

  const handleClick = (e) => {
    setFlipping(true);
    if (e.target.alt === 'Brain'){
      setVisible(true);
    } else {
      setVisible(false);
    }
    console.log(props.cards)
    if (props.cards.length === 1){
      if (props.cards[0] === e.target.dataset.card) {
        console.log('congrats they match');
      } else {
        console.log('sorry please try again');
      }
      props.setCards([]);
    } else {
      props.setCards([e.target.dataset.card])
    }
  };

  return (
    <div 
      className=
        {isFlipping 
          ? 'Memory-Card Flip' 
          : 'Memory-Card'
        }
      onClick={handleClick}>
        {isVisible 
          ? <FrontCard frontImg={props.frontImg}/> 
          : <BackCard cardName={props.frontImg}/>
        }
    </div>
  )
}
