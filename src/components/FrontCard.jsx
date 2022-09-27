import React from 'react'

export default function FrontCard(props) {
  return (
    <div className='front-card'>
      <img className='front-face' src={process.env.PUBLIC_URL + '/images/' + props.frontImg + '.png'} alt='Front Card'></img>
    </div>
  )
}
