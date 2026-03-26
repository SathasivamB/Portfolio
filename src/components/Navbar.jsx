import React from 'react'
import share from '../assets/share.png'
import github from '../assets/github.png'

const Navbar = ({ toggleMenu }) => {
    return (
        <nav className='nav'>
            <div className="nav-left">
                <button className="burger-menu" onClick={toggleMenu} aria-label="Toggle Menu">
                    <span className="burger-bar bar1"></span>
                    <span className="burger-bar bar2"></span>
                    <span className="burger-bar bar3"></span>
                </button>
                <span className="nav-logo">Portfolio</span>
                <div className="nav-links">
                    <a href="/" className="nav-link">Home</a>
                    <a href="https://www.linkedin.com/in/sathasivamb/" className="nav-link linkedIn" target="_blank" rel="noopener noreferrer">
                        LinkedIn <img src={share} alt="" />
                    </a>
                    <a href="https://drive.google.com/file/d/1PFSmX0NTKVs8_XWpt22HrAi520zb1NMC/view?usp=drive_link" className="nav-link resume" target="_blank" rel="noopener noreferrer">
                        Resume <img src={share} alt="" />
                    </a>
                </div>
            </div>
            <div className="nav-right">
                <a href="https://github.com/SathasivamB" className="nav-github" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar
