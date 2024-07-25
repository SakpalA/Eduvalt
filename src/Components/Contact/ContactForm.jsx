import React from 'react'
// import { Container, Col, Row } from 'react-bootstrap';
import { SlLocationPin } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";


const ContactForm = () => {
    return (
        <div className='contact-div'>
            {/* Col xs={12} sm={12} md={12} lg={5} xl={4} */}
                        <div className="contact-text">
                            <h2 className='contact-title'>Keep In Touch With Us</h2>
                            <p className='contact-para'>Neque convallis cras semper auctor. Libero id faucibus getnvallis.id faucibus nisl tincidunt egetnvallis.</p>
                            <div className="contact-list-wrap">
                                <div className="contact-list">
                                    <div className="contact-icon">
                                        <SlLocationPin />
                                    </div>
                                    <div className="contact-info">
                                        <p className='contact-para'>68 Street Holakt Street world <br /> 10002 New York</p>
                                    </div>
                                </div>
                                <div className="contact-list">
                                    <div className="contact-icon">
                                        <FiPhoneCall />
                                    </div>
                                    <div className="contact-info">
                                        <p className='contact-para'>+123 555 69090 <br /> +123 555 69099</p>
                                    </div>
                                </div>
                                <div className="contact-list">
                                    <div className="contact-icon">
                                        <TfiEmail />
                                    </div>
                                    <div className="contact-info">
                                        <p className='contact-para'>info@example.com <br /> web@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="contact-form-wrap">
                            <h2 className='contact-title title-left'>Get in Touch</h2>
                            <div className="form-wrap">
                                <form action="">
                                    <div className="form-div row">
                                        <div className="col-md-6">
                                            <input type="text" placeholder='Name' />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" placeholder='Email' required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" placeholder='Phone' required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" placeholder='Subject' required />
                                        </div>
                                        <div className='col-md-12'>
                                            <textarea name="message" id="" cols="30" rows="8" placeholder='Your Message' className='textarea' required />
                                        </div>
                                    </div>
                                </form>
                                <button type='submit'>SEND MESSAGE</button>
                            </div>
                        </div>
                    
        </div>
    )
}

export default ContactForm;