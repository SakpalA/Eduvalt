import React from 'react';
import '../style.css';
import { Container, Row, Col } from 'react-bootstrap';
import mentor1 from '../Assets/mentors01.png';
import mentor2 from '../Assets/mentors02.png';
import mentor3 from '../Assets/mentors03.png';
import mentor4 from '../Assets/mentors04.png';
import { LuUsers2 } from "react-icons/lu";
import { FaStar, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import mentor_shape1 from '../Assets/mentors_shape02.png'

const AboutInstructor = () => {
    return (
        <>
            <div className="about-inst">
                <div className="instructor-wrap">
                    <div className='wrap-heading'>
                        <span className='inst-sub-title'>Our Qualified  People  Matter</span>
                        <h2 className='inst-title'>Top <span>Class</span> Mentors</h2>
                    </div>
                    <button className='inst-btn inst-outline'>ALL INSTRUCTOR</button>
                    <img src={mentor_shape1} alt="" className='ment-shp1'/>
                </div>
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={3}>
                            <div className="mentors-item">
                                <div className="mentor-img">
                                    <img src={mentor1} alt="" />
                                    <div className="mentor-social social-share">
                                        <CiShare2 />
                                    </div>
                                    {/* <div className="mentor-social ment-fbook">
                                        <FaFacebookF />
                                    </div>
                                    <div className="mentor-social ment-twit">
                                        <FaTwitter />
                                    </div>
                                    <div className="mentor-social ment-linkd">
                                        <FaLinkedinIn />
                                    </div> */}
                                </div>
                                <div className="mentor-content">
                                    <h4 className='mentor-name'>Robert Smith</h4>
                                    <span className='mentor-desig'>Graphic Design</span>
                                </div>
                                <div className="mentor-content-bottom">
                                    <div className="mentor-stud">
                                        <LuUsers2 /> <span>1,135 Students</span>
                                    </div>
                                    <div className="mentor-rating">
                                        <FaStar className='ment-star'/> <span>(5.0)</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <div className="mentors-item">
                                <div className="mentor-img">
                                    <img src={mentor2} alt="" />
                                    <div className="mentor-social">
                                        <CiShare2 />
                                    </div>
                                </div>
                                <div className="mentor-content">
                                    <h4 className='mentor-name'>Olivia Mia</h4>
                                    <span className='mentor-desig'>Graphic Design</span>
                                </div>
                                <div className="mentor-content-bottom">
                                    <div className="mentor-stud">
                                        <LuUsers2 /> <span className='ment-stud'>1,135 Students</span>
                                    </div>
                                    <div className="mentor-rating">
                                        <FaStar className='ment-star'/> <span>(5.0)</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <div className="mentors-item">
                                <div className="mentor-img">
                                    <img src={mentor3} alt="" />
                                    <div className="mentor-social">
                                        <CiShare2 />
                                    </div>
                                </div>
                                <div className="mentor-content">
                                    <h4 className='mentor-name'>William Hope</h4>
                                    <span className='mentor-desig'>Graphic Design</span>
                                </div>
                                <div className="mentor-content-bottom">
                                    <div className="mentor-stud">
                                        <LuUsers2 /> <span>1,135 Students</span>
                                    </div>
                                    <div className="mentor-rating">
                                        <FaStar className='ment-star'/> <span>(5.0)</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <div className="mentors-item">
                                <div className="mentor-img">
                                    <img src={mentor4} alt="" />
                                    <div className="mentor-social">
                                        <CiShare2 />
                                    </div>
                                </div>
                                <div className="mentor-content">
                                    <h4 className='mentor-name'>Sophia Ava</h4>
                                    <span className='mentor-desig'>Designer</span>
                                </div>
                                <div className="mentor-content-bottom">
                                    <div className="mentor-stud">
                                        <LuUsers2 /> <span>1,135 Students</span>
                                    </div>
                                    <div className="mentor-rating">
                                        <FaStar className='ment-star'/> <span>(5.0)</span>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default AboutInstructor;