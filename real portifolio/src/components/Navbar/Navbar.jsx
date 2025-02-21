
import React, { useState } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import '../Navbar.css'

import restaurant1 from '../../images/restaurant1.jpeg'
import restaurant3 from '../../images/restaurant3.jpg'

const Navbar = () => {

  const[menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
        < img src={restaurant1} alt="" className='logo'/>
        <ul className='nav-menu'>
            <li><AnchorLink className='anchor-link' offset={50} href='#'><p onClick={() =>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={restaurant3}  alt=''  className='logo'/>:<></>} </li>
            <li><AnchorLink className='anchor-link' offset={50} href='#'><p onClick={() =>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={restaurant3}  alt='' className='logo'/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#'><p  onClick={() =>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={restaurant3}  alt='' className='logo'/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#'><p  onClick={() =>setMenu("portifolio")}>Portifolio</p></AnchorLink>{menu==="portifolio"?<img src={restaurant3}  alt='' className='logo'/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#'><p  onClick={() =>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={restaurant3}  alt='' className='logo'/>:<></>}</li>
        </ul>

        <div className='nav-connect'> Connect with Me</div>
    </div>
  )
}

export default Navbar