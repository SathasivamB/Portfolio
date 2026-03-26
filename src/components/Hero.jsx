import React from 'react'
import share from '../assets/share.png'
import mail from '../assets/mail.png'
import rightArrow from '../assets/arrow-right.png'

const Hero = () => {
    return (
        <div className='section'>
            <div className='content'>

                <h1 className='h1'>Sathasivam B</h1>
                <h2 className='h2'>A coder by day, problem-solver by night!</h2>
                <p className='p'>I am Sathasivam B, a Frontend Developer with a background in BSc Computer Technology, passionate about building modern and user-friendly web applications. I specialize in creating responsive and visually appealing interfaces using HTML, CSS, JavaScript, ReactJS, and Tailwind CSS. With a strong interest in web development, I continuously work on improving my skills and exploring new technologies to build efficient and scalable solutions. I also have experience with tools and technologies like GitHub and MongoDB, which help me contribute effectively to real-world projects. I am eager to grow as a developer and create impactful digital experiences that enhance user engagement.</p>

            </div>

            <div className="hero-buttons">
                <a href="https://drive.google.com/file/d/1PFSmX0NTKVs8_XWpt22HrAi520zb1NMC/view?usp=drive_link">
                    <button className='resume-button'>Get Resume <img src={share} alt="" /></button>
                </a>
                <a href="/contact">
                    <button className='mail-button'><img src={mail} alt="" /> Send Mail</button>
                </a>
            </div>

            <div className='hero-next-page'>
                <a href="/about">
                    <button cla>About Me <img src={rightArrow} alt="" /></button>
                </a>
            </div>
        </div>
    )
}

export default Hero
