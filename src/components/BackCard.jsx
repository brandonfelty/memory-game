import React from 'react'

export default function BackCard() {
  return (
    <div className='back-card'>
      <img className='back-face' src={process.env.PUBLIC_URL + '/images/brain.png'} alt='Brain'></img>
    </div>
  )
}
