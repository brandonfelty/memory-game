import React from 'react'

export default function BackCard() {
  return (
    <div className='Back-Card'>
      <img className='Back-Face' src={process.env.PUBLIC_URL + '/images/brain.png'} alt='Brain'></img>
    </div>
  )
}
