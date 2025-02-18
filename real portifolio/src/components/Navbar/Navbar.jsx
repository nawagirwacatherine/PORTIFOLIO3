import React from 'react'
import '../Navbar.css'
import logo from '../../images/logo.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
        < img src={logo} alt=""/>
        <ul className='nav-menu'>
            <li>Home </li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portifolio</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar