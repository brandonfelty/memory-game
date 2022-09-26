import React from 'react'
import BackCard from './BackCard';
import FrontCard from './FrontCard';

export default function MemoryCard() {
  return (
    <section className='memory-card'>
      <FrontCard/>
      <BackCard/>
    </section>
  )
}
