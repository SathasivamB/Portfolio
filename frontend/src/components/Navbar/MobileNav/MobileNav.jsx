import React from 'react'
import './MobileNav.css'
import logo from '../../../../src/assets/images/icons8-logo-64.png'

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className="mobile-menu-container">
                <img src={logo} alt="" className="logo" />

                <ul>
                    <li>
                        <a className="menu-items">Home</a>
                    </li>
                    <li>
                        <a className="menu-items">Skills</a>
                    </li>
                    <li>
                        <a className="menu-items">Work Experience</a>
                    </li> 
                    <li>
                        <a className="menu-items">Contact Me</a>
                    </li>

                    <button className="contact-btn" onClick={()=>{}}>Hire Me</button>
                </ul>
            </div>
        </div>
    </>
  )
}

export default MobileNav