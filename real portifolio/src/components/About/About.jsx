import React from 'react'
import './About.css'
import fruit from '../../images/fruit.jpg'
import presentation from '../../images/presentation2.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about-title'> <h1>About Me</h1>
        <img src={fruit} alt=""  className='logo' />
        </div>

        <div className='about-sections'>
        <div className='about-left'>
            <img src={presentation} alt="" className='logo' />
        </div>

        <div  className='about-right'>
        <div  className='about-para'>
            <p> I am an exprienced Frontend Developer with over 2years </p>
            <p> My passion for frontend development is not only</p>
            </div>

            <div className='about-skills'>
            <div className='about-skill'>
                <p>HTML & CSS</p><hr style={{width:"50%"}}/>
                <p>React js</p><hr style={{width:"70%"}}/>
                <p>Javascript</p><hr style={{width:"60%"}}/>
                <p>UX/UI designing</p><hr style={{width:"50%"}}/>
               
                </div>
            </div>
        </div>

        <div className='about-achievements'>
        <div className='about-achievement'>
            <h1>2+</h1>
            <p>YEARS OF EXPRIENCE</p>
            </div>
               <hr />
            <div className='about-achievement'>
            <h1>5+</h1>
            <p>PROJECTS COMPLETED</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About