import React from 'react';
import './footer.css';
import { Container, Col, Row } from 'react-bootstrap';
import logo from '../Assets/secondary_logo.png';
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

const MainFooter = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={6} xl={3}>
                        <div className="footer-content">
                            <img src={logo} alt="" className='footer-img' />
                            <p>when an unknown printer took galley of type and scrambled it to make pspecimen bookt has.</p>
                            <h6>463 7th Ave, NY 10018, USA</h6>
                            <h6>+123 88 9900 456</h6>
                            <div className="footer-icons">
                                <FaFacebookF className='icon' />
                                <FaTwitter className='icon' />
                                <FaWhatsapp className='icon' />
                                <FaLinkedinIn className='icon' />
                                <FaYoutube className='icon' />
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={3}>
                        <div className="footer-content ul-div">
                            <h4>Resourses</h4>
                            <ul>
                                <li>About</li>
                                <li>Contact</li>
                                <li>Help Center</li>
                                <li>Refund</li>
                                <li>Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={3}>
                        <div className="footer-content">
                            <h4>Resourses</h4>
                            <ul>
                                <li>Life Coach</li>
                                <li>Business Coach</li>
                                <li>Health Coach</li>
                                <li>Development</li>
                                <li>Web Design</li>
                                <li>SEO Optimize</li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={3}>
                        <div className="footer-content">
                            <h4>Working Hours</h4>
                            <div className="footer-time">
                                <div className="footer-working-item">
                                    <span className='day'>Mon-Fri</span>
                                    <span className='time'>8:00 AM - 5:00 PM</span>
                                </div>
                                <div className='footer-working-item'>
                                    <span className='day'>Mon-Fri</span>
                                    <span className='time'>9:00 AM - 6:00 PM</span>
                                </div>
                                <div className='footer-working-item'>
                                    <span className='day'>Mon-Fri</span>
                                    <span className='time'>10:00 AM - 8:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainFooter;