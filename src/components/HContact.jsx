import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import rightArrow from '../assets/arrow-right.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HContact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_f0wz497',
            'template_xe1hyrp',
            form.current,
            'E8Qn_Gnb3vOIWZ43j'
        )
            .then((result) => {
                console.log(result.text);
                toast.success("Message sent successfully!", {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
            }, (error) => {
                console.log(error.text);
                toast.error("Failed to send message", {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
            })

        e.target.reset();
    }

    const handleReset = () => {
        window.location.reload();
    }

    return (
        <div className='section'>
            <ToastContainer />
            <div className="content">
                <h1 className="h1">Contact</h1>
                <h2 className="h2">Get in touch before I write another line of code!</h2>

                <form action="" ref={form} onSubmit={sendEmail}>
                    <div className="input">
                        <p className="p">Name<span style={{ color: "red" }}>*</span></p>
                        <div className="input-box">
                            <input type="text" placeholder='Your name, your fame' name='username' required />
                        </div>
                    </div>
                    <div className="input">
                        <p className="p">Email<span style={{ color: "red" }}>*</span></p>
                        <div className="input-box">
                            <input type="text" placeholder='Where can I reach you back?' name='email' required />
                        </div>
                    </div>
                    <div className="input">
                        <p className="p">Message<span style={{ color: "red" }}>*</span></p>
                        <div className="input-box">
                            <input type="text" placeholder='Your words, my inbox.' name='message' required />
                        </div>
                    </div>

                    <div className="submit">
                        <button type='submit'>Submit</button>
                    </div>
                </form>

                <div className="reset" onClick={handleReset}>
                    <button>Reset</button>
                </div>

                <div className='about-next-page' style={{ marginTop: "50px" }}>
                    <a href="/education">
                        <button><img src={rightArrow} alt="" className='leftarrow' /> Education</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HContact
