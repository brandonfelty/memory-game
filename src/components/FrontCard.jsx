import React from 'react'

export default function FrontCard() {
  return (
    <div className='front-card'>
      <img className='front-face' src={process.env.PUBLIC_URL + '/images/brain.png'} alt='Brain'></img>
    </div>
  )
}
