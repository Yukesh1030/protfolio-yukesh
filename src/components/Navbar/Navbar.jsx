import React from 'react'
import './Navbar.css';
import { Link } from 'react-scroll';
import contactImage from '../../assets/contact.png'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1 className='logo'>Y</h1>
        <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Skills</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>
        </div>
        <Link className="desktopMenuBtn" activeClass='contactPage' to='clients' spy={true} smooth={true} offset={-100} duration={500} >
            <img src={contactImage} alt="contact" className="desktopMenuImg" /></Link>
    </nav>
  )
}

export default Navbar