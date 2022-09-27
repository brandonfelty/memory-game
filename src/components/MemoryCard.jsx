import React, { useState } from 'react'
import BackCard from './BackCard';
import FrontCard from './FrontCard';

export default function MemoryCard(props) {
  const [isVisible, setVisible] = useState(false);
  const [isFlipping, setFlipping] = useState(false);

  const handleClick = (e) => {
    setFlipping(!isFlipping);
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
          : <BackCard/>
        }
    </div>
  )
}
