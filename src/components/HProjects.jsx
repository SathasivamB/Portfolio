import React from 'react'
import rightArrow from '../assets/arrow-right.png'
import { Link } from 'react-router-dom';

const HProjects = () => {
    return (
        <div className='section'>
            <div className="content">
                <h1 className="h1">Projects</h1>
                <h2 className="h2" style={{ marginBottom: "10px" }}>A lot of ideas, but some are still under construction!</h2>

                <div className="projects" style={{ marginBottom: "50px" }}>
                    <div className="project-box">
                        <Link to='/projects/online_cliipboard'>
                            <h2 style={{ marginBottom: "15px" }}>Online Cliipboard | Any files inside safe</h2>
                            <p className='p' style={{ lineHeight: "20px", marginBottom: "8px" }}>A sleek and modern redesign of Nike’s official web experience built with React and Tailwind CSS.</p>
                            <p className='p learn-more'>Learn More...</p>
                        </Link>
                    </div>

                    <div className="project-box">
                        <Link to='/projects/portfolio'>
                            <h2 style={{ marginBottom: "15px" }}>Portfolio | Sathasivam B</h2>
                            <p className='p' style={{ lineHeight: "20px", marginBottom: "8px" }}>A dynamic portfolio showcasing my projects, skills, and contributions using the latest web technologies.</p>
                            <p className='p learn-more'>Learn More...</p>
                        </Link>
                    </div>
                </div>

                <div className='about-next-page'>
                    <a href="/about">
                        <button><img src={rightArrow} alt="" className='leftarrow' /> About Me</button>
                    </a>
                    <a href="/skills-tools">
                        <button>Skills & Tools <img src={rightArrow} alt="" /></button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HProjects
