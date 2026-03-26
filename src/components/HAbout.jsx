import React from 'react'
import rightArrow from '../assets/arrow-right.png'

const HAbout = () => {
    return (
        <div className='about section'>
            <div className="about-me content">
                <h1 className='h1'>About Satha</h1>
                <h2 className='h2'>More than just a title—let’s dive deeper!</h2>
                <p className='p'>I am Sathasivam B, a dedicated Frontend Developer with a Bachelor’s degree in Computer Technology, driven by a passion for creating engaging and user-friendly web experiences. I specialize in building responsive and visually appealing interfaces using HTML, CSS, JavaScript, ReactJS, and Tailwind CSS. My approach to development focuses on writing clean, efficient code while ensuring that the end product delivers both performance and a seamless user experience.</p>
                <p className='p'>I enjoy turning ideas into real-world applications and continuously strive to improve my skills by learning new technologies and best practices. Alongside frontend development, I have experience working with tools like GitHub for version control and MongoDB for handling data, which helps me understand the complete development process. I am highly motivated to take on new challenges, collaborate with others, and contribute to projects that create meaningful impact.</p>
            </div>

            <div className='about-next-page' style={{ marginBottom: "50px" }}>
                <a href="/">
                    <button><img src={rightArrow} alt="" className='leftarrow' /> Introduction</button>
                </a>
                <a href="/projects">
                    <button>Projects <img src={rightArrow} alt="" /></button>
                </a>
            </div>
        </div>
    )
}

export default HAbout
