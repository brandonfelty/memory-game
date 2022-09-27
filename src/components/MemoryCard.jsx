import React from 'react'
import BackCard from './BackCard';
import FrontCard from './FrontCard';

export default function MemoryCard(props) {
  return (
    <div className='Memory-Card'>
      <FrontCard frontImg={props.frontImg}/>
      <BackCard/>
    </div>
  )
}
