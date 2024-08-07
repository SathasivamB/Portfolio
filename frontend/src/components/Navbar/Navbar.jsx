import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../../src/assets/images/icons8-logo-64.png'
import menu from '../../../src/assets/images/icons8-menu-48.png'
import cross from '../../../src/assets/images/icons8-cross-64.png'
import MobileNav from './MobileNav/MobileNav'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <img src={logo} alt="" className="logo" />

          <ul>
            <li>
              <a className='menu-items'>Home</a>
            </li>
            <li>
              <a className='menu-items'>Skills</a>
            </li>
            <li>
              <a className='menu-items'>Work Experience</a>
            </li>
            <li>
              <a className='menu-items'>Contact Me</a>
            </li>

            <button className="contact-btn" onClick={() => {}}>Hire Me</button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            {openMenu ? <img src={cross} /> : <img src={menu} alt="" />}
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar