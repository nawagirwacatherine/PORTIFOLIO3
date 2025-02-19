import React from 'react'
import './Hero.css'
import restaurant1 from '../../images/restaurant1.jpeg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={restaurant1} alt="" className='logo' />
        <h1>Im Nawagirwa Catherine, frontend developer based in Uganda</h1>
    </div>
  )
}

export default Hero;