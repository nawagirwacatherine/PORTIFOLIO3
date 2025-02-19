import React from 'react'
import '../Navbar.css'

import restaurant1 from '../../images/restaurant1.jpeg'

const Navbar = () => {
  return (
    <div className='navbar'>
        < img src={restaurant1} alt="" className='logo'/>
        <ul className='nav-menu'>
            <li>Home </li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portifolio</li>
            <li>Contact</li>
        </ul>

        <div className='nav-connect'> Connect with Me</div>
    </div>
  )
}

export default Navbar