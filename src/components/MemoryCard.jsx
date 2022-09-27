import React from 'react'
import BackCard from './BackCard';
import FrontCard from './FrontCard';

export default function MemoryCard(props) {
  return (
    <section className='memory-card'>
      <FrontCard frontImg={props.frontImg}/>
      <BackCard/>
    </section>
  )
}
