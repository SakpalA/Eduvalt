import React from 'react';
import '../style.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCalendarAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import image1 from '../Assets/event09.jpg';
import image2 from '../Assets/event01.jpg';
import image3 from '../Assets/event02.jpg';

const AboutEvents = () => {
    return (
        <div className='about-event'>
            <div className="instructor-wrap event-wrap">
                <div className='wrap-heading'>
                    <span className='inst-sub-title'>Freatured Events</span>
                    <h2 className='inst-title'>Upcoming <span>Events</span></h2>
                </div>
                <button className='inst-btn inst-outline'>ALL INSTRUCTOR</button>
            </div>
            <Container>
                <Row>
                    <Col sm={10} md={6} lg={4}>
                        <div className="event-items">
                            <div className="event-image">
                                <img src={image1} alt=""  className='event-img'/>
                                <div className="event-date-div">
                                    <FaCalendarAlt />
                                    <span className='event-date'>Jul 31, 2023</span>
                                </div>
                            </div>
                            <div className="event-content">
                                <h4 className='event-title'>Success Free Career & Meditation Classes</h4>
                                <div className="event-loc-div">
                                    <IoLocationOutline className='event-loc'/>
                                    <span className='event-location'>United Kingdom</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={10} md={6} lg={4}>
                        <div className="event-items">
                            <div className="event-image">
                                <img src={image2} alt="" className='event-img'/>
                                <div className="event-date-div">
                                    <FaCalendarAlt />
                                    <span className='event-date'>Aug 20, 2023</span>
                                </div>
                            </div>
                            <div className="event-content">
                                <h4 className='event-title'>Exactly How Technology Can Make Reading</h4>
                                <div className="event-loc-div">
                                    <IoLocationOutline className='event-loc'/>
                                    <span className='event-location'>United Kingdom</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={10} md={6} lg={4}>
                        <div className="event-items">
                            <div className="event-image">
                                <img src={image3} alt="" className='event-img'/>
                                <div className="event-date-div">
                                    <FaCalendarAlt />
                                    <span className='event-date'>Sep 10, 2023</span>
                                </div>
                            </div>
                            <div className="event-content">
                                <h4 className='event-title'>Aewe Creating  Futures Through Technology</h4>
                                <div className="event-loc-div">
                                    <IoLocationOutline className='event-loc'/>
                                    <span className='event-location'>New Work</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutEvents;