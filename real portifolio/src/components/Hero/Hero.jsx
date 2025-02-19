import React from 'react'
import './Hero.css'
import restaurant1 from '../../images/restaurant1.jpeg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={restaurant1} alt="" className='logo' />
        <h1>Im Nawagirwa Catherine, frontend developer based in Uganda</h1>
        <p>Iam a frontend developer from kampala uganda,With 2years of exprience. </p>

        <div  className='hero-action'>

        <div  className='hero-connect'>
            Connect with me
            </div>

            <div  className='hero-resume'>
            My resume
            </div>

        </div>
    </div>
  )
}

export default Hero;