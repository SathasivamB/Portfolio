import React, { Children } from 'react'
import share from '../assets/share.png'

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <aside className={`bar ${isMenuOpen ? 'open' : ''}`}>
      <div className="sidebar">
        <div className="sidebar-header">
          <h1>Sections</h1>
          <button className="close-menu" onClick={() => setIsMenuOpen(false)} aria-label="Close Menu">
            &times;
          </button>
        </div>

        <div className="mobile-nav-content">
          <a href="/" onClick={() => setIsMenuOpen(false)}>
            <h1 className="mobile-portfolio">Portfolio</h1>
          </a>
          <div className="mobile-nav-links">
            <a href="/" onClick={() => setIsMenuOpen(false)}>
              <p>Home</p>
            </a>
            <a href="https://www.linkedin.com/in/sathasivamb/" target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)}>
              <p className="linkedIn">LinkedIn <img src={share} alt="" /></p>
            </a>
            <a href="https://drive.google.com/file/d/1PFSmX0NTKVs8_XWpt22HrAi520zb1NMC/view?usp=drive_link" target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)}>
              <p className="resume">Resume <img src={share} alt="" /></p>
            </a>
          </div>
        </div>

        <div className="sidebar-sections">
          <ul>
            <a href="/" onClick={() => setIsMenuOpen(false)}><li>Introduction</li></a>
            <a href="/about" onClick={() => setIsMenuOpen(false)}><li>About Me</li></a>
            <a href="/projects" onClick={() => setIsMenuOpen(false)}><li>Projects</li></a>
            <a href="/skills-tools" onClick={() => setIsMenuOpen(false)}><li>Skills & Tools</li></a>
            <a href="/education" onClick={() => setIsMenuOpen(false)}><li>Education</li></a>
            <a href="/contact" onClick={() => setIsMenuOpen(false)}><li>Contact</li></a>
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar