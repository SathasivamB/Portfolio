import React, { useRef } from 'react'
import './WorkExperience.css'
import right from '../../../src/assets/images/icons8-arrow-right-48 (2).png'
import left from '../../../src/assets/images/icons8-arrow-right-48 (3).png'
import { WORK_EXPERIENCE } from '../../utils/data'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import Slider from 'react-slick'

const WorkExperience = () => {
    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                }
            }
        ]
    }

    const slideRight = () => {
        sliderRef.current.slickNext();
    }

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    }

  return (
    <section className="experience-container">
        <h5>Work Experience</h5>

        <div className="experience-content">
            <div className="arrow-right" onClick={slideRight}>
                <img src={right} alt="" />
            </div>

            <div className="arrow-left" onClick={slideLeft}>
                <img src={left} alt="" />
            </div>

            <Slider ref={sliderRef} {...settings}>
            {WORK_EXPERIENCE.map((item) => (
                <ExperienceCard key={item.title} details={item} />
            ))}
            </Slider>
        </div>
    </section>
  )
}

export default WorkExperience