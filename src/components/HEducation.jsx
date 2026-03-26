import React from 'react'
import rightArrow from '../assets/arrow-right.png'

const HEducation = () => {
    return (
        <div className='section'>
            <div className="content">
                <h1 className="h1">Education</h1>
                <h2 className="h2">I learned a lot, but the real learning happens in the code editor!</h2>
                <p className="p">Education has always been the cornerstone of my journey into the tech world. Pursuing a Bachelor's in Computer Technology (BCT) at Sri Krishna Arts and Science College, Coimbatore, has provided me a strong foundation in computer science and software development.</p>
                <p className="p">My academic journey has been complemented by hands-on projects and coursework, enabling me to build practical skills and a deep understanding of modern technological solutions.</p>

                <div className="timeline" style={{ marginBottom: "30px" }}>
                    <div className="timeline-item">
                        <div className="timeline-icon">🎓</div>
                        <div className="timeline-content">
                            <h3>Bachelor of Computer Technology · Sri Krishna Arts and Science College</h3>
                            <p>Coimbatore, Tamil Nadu</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-icon">🎓</div>
                        <div className="timeline-content">
                            <h3>Higher Secondary Education · Bharathi Matric Hr. Sec. School</h3>
                            <p>Coimbatore, Tamil Nadu</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-icon">🎓</div>
                        <div className="timeline-content">
                            <h3>Secondary Education · Bharathi matric Hr. Sec. School</h3>
                            <p>Coimbatore, Tamil Nadu</p>
                        </div>
                    </div>
                </div>

                <div className='about-next-page'>
                    <a href="/skills-tools">
                        <button><img src={rightArrow} alt="" className='leftarrow' /> Skills & Tools</button>
                    </a>
                    <a href="/contact">
                        <button>Contact <img src={rightArrow} alt="" /></button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HEducation
