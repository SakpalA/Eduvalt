import React from 'react';
import '../style.css';
import { Col, Row, Container } from 'react-bootstrap';
import instructor1 from '../Assets/instructor01.png';
import instructor2 from '../Assets/instructor02.png';
import instructor3 from '../Assets/instructor03.png';
import instructor4 from '../Assets/instructor04.png';
import { CiShare2 } from "react-icons/ci";
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const InstructorTwo = () => {
    return (
        <div className='instructor-two'>
            <div className="instructor-wrap">
                <div className='wrap-heading'>
                    <span className='inst-sub-title'>Our Qualified  People  Matter</span>
                    <h2 className='inst-title'>Top <span>Class</span> Instructor</h2>
                </div>
                <button className='inst-btn inst-outline'>ALL INSTRUCTOR</button>
            </div>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={3}>
                        <div className="instructor-div">
                            <div className="instructor__shape" style={{ backgroundColor: '#E2FAFF', borderRadius: '135px 0 0 0' }}>
                                <img src={instructor1} alt="" className='instructor-img' />
                            </div>
                            <div className="instructor-content">
                                <div className="content-left">
                                    <span className='inst-desig'>Graphic Designer</span>
                                    <h4 className='inst-name'>Robert Smit</h4>
                                </div>
                                <div className="content-right">

                                    {/* <div className="inst-icon inst-icon-one"><FaFacebookF /></div>
                                    <div className="inst-icon inst-icon-two"><FaTwitter /></div>
                                    <div className="inst-icon inst-icon-three"><FaInstagram /></div>
                                    <div className="inst-icon inst-icon-four"><FaLinkedinIn /></div> */}

                                    <div className='share-btn'>
                                        <CiShare2 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <div className="instructor-div">
                            <div className="instructor__shape" style={{ backgroundColor: '#E4FFE2', borderRadius: '135px 115px 115px 0' }}>
                                <img src={instructor2} alt="" className='instructor-img' />
                            </div>
                            <div className="instructor-content">
                                <div className="content-left">
                                    <span className='inst-desig'>Web Designer</span>
                                    <h4 className='inst-name'>Olivia Mia</h4>
                                </div>
                                <div className="content-right">

                                    {/* <div className="inst-icon inst-icon-one"><FaFacebookF /></div>
                                        <div className="inst-icon inst-icon-two"><FaTwitter /></div>
                                        <div className="inst-icon inst-icon-three"><FaInstagram /></div>
                                        <div className="inst-icon inst-icon-four"><FaLinkedinIn /></div> */}

                                    <div className='share-btn'>
                                        <CiShare2 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <div className="instructor-div">
                            <div className="instructor__shape" style={{ backgroundColor: '#E8EDFF', borderRadius: '135px 0 0 0' }}>
                                <img src={instructor3} alt="" className='instructor-img' />
                            </div>
                            <div className="instructor-content">
                                <div className="content-left">
                                    <span className='inst-desig'>Digital Marketer</span>
                                    <h4 className='inst-name'>Willian Hope</h4>
                                </div>
                                <div className="content-right">

                                    {/* <div className="inst-icon inst-icon-one"><FaFacebookF /></div>
                                        <div className="inst-icon inst-icon-two"><FaTwitter /></div>
                                        <div className="inst-icon inst-icon-three"><FaInstagram /></div>
                                        <div className="inst-icon inst-icon-four"><FaLinkedinIn /></div> */}

                                    <div className='share-btn'>
                                        <CiShare2 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <div className="instructor-div">
                            <div className="instructor__shape" style={{ backgroundColor: '#FFE2E2', borderRadius: '135px 115px 115px 0' }}>
                                <img src={instructor4} alt="" className='instructor-img' />
                            </div>
                            <div className="instructor-content">
                                <div className="content-left">
                                    <span className='inst-desig'>Support Staff</span>
                                    <h4 className='inst-name'>SOphia Ava</h4>
                                </div>
                                <div className="content-right">
                                    {/* <div className="inst-icon inst-icon-one"><FaFacebookF /></div>
                                        <div className="inst-icon inst-icon-two"><FaTwitter /></div>
                                        <div className="inst-icon inst-icon-three"><FaInstagram /></div>
                                        <div className="inst-icon inst-icon-four"><FaLinkedinIn /></div> */}
                                    <div className='share-btn'>
                                        <CiShare2 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default InstructorTwo;