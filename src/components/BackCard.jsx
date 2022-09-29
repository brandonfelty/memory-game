import React from 'react'

export default function BackCard(props) {
  return (
    <div className='Back-Card'>
      <img className='Back-Face' data-card={props.cardName} src={process.env.PUBLIC_URL + '/images/brain.png'} alt='Brain'></img>
    </div>
  )
}
