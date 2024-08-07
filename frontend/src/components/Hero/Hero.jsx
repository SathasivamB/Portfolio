import React from 'react'
import './Hero.css'
import react from '../../../src/assets/images/icons8-react-native-64.png'
import html from '../../../src/assets/images/icons8-html-64.png'
import css from '../../../src/assets/images/icons8-css-64.png'
import js from '../../../src/assets/images/icons8-js-64.png'
import img from '../../../src/assets/images/cartoon-style-character-traveling.jpg'

const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content">
            <h2>Building Digital Experiences That Inspire</h2>
            <p>
                Passionate Frontend developer | Transforming Ideas into Swamless and Visually Stunning Web Solutions
            </p>
        </div>

        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img src={react} alt="" />
                </div>
                <img src={img} alt=""  className='img'/>
            </div>

            <div>
                <div className="tech-icon">
                    <img src={html} alt="" />
                </div>
                <div className="tech-icon">
                    <img src={css} alt="" />
                </div>
                <div className="tech-icon">
                    <img src={js} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero