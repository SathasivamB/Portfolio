import React from 'react'
import './ContactMe.css'
import email from '../../../src/assets/images/icons8-email-64.png'
import github from '../../../src/assets/images/icons8-github-64.png'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{flex: 1}}>
                <ContactInfoCard
                    iconUrl={email}
                    text="sathasivamb95@gmail.com"
                />
                <ContactInfoCard
                    iconUrl={github}
                    text="https://github.com/SathasivamB"
                />
            </div>
            <div style={{flex: 1}}>
                <ContactForm/>
            </div>
        </div>
    </section>
  )
}

export default ContactMe