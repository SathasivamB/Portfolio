import React from 'react'
import rightArrow from '../assets/arrow-right.png'

const HSkill = () => {
    return (
        <div className='section'>
            <div className="content">
                <h1 className='h1'>Skills & Tools</h1>
                <h2 className="h2">Learned by coding all night and debugging all day!</h2>
                <p className="p">As a Frontend Developer, I specialize in building scalable web applications using modern technologies such as React, and Tailwind CSS. I'm also expanding my expertise into DevOps and cloud practices to create efficient, maintainable, robust web solutions.</p>
                <div className="languages">
                    <span className="tech-stack">HTML</span>
                    <span className="tech-stack">CSS</span>
                    <span className="tech-stack">JavaScript</span>                    
                    <span className="tech-stack">Tailwind CSS</span>
                    <span className="tech-stack">ReactJS</span>
                    <span className="tech-stack">GitHub</span>
                    <span className="tech-stack">MongoDB</span>
                </div>

                <div className='about-next-page'>
                    <a href="/projects">
                        <button><img src={rightArrow} alt="" className='leftarrow' /> Projects</button>
                    </a>
                    <a href="/education">
                        <button>Education <img src={rightArrow} alt="" /></button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HSkill
