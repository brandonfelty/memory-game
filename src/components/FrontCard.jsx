import React from 'react'

export default function FrontCard(props) {
  return (
    <div className='Front-Card'>
      <img className='Front-Face' src={process.env.PUBLIC_URL + '/images/' + props.frontImg + '.png'} alt='Front Card'></img>
    </div>
  )
}
