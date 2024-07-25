import React from 'react';
import './course.css';
import { FaStar, FaRegStar } from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap';


const Review = ({ no_rating, star_rating }) => {
    return (
        <Container>
            <Row className='cont-row'>
                <Col sm={12} md={4} lg={4}>
                    <div className="rating-left">
                        <h1 style={{ marginBottom: '0' }}>{no_rating}</h1>
                        {star_rating.map((star, index) => (
                            <span key={index}
                                style={{ color: '#f8bc24', marginTop: '15px' }}>{star.icon}</span>
                        ))}
                        <h6 style={{ color: '#5a7093', marginBottom: '0', marginTop: '15px' }}>Total 2 Reviews</h6>
                    </div>
                </Col>
                <Col sm={12} md={8} lg={8}>
                    <div className="rating-right">
                        <div className="rate-no">
                            <span>5</span>
                            <FaStar style={{ color: '#f8bc24', margin: '0px 5px' }} />
                            <div className="range-div">
                                <div className="color-div" style={{ width: '60%' }}></div>
                            </div>
                            <span style={{ marginLeft: '10px' }}>1</span>
                        </div>
                        <div className="rate-no">
                            <span>4</span>
                            <FaStar style={{ color: '#f8bc24', margin: '0px 5px' }} />
                            <div className="range-div">
                                <div className='color-div' style={{ width: '30%' }}></div>
                            </div>
                            <span style={{ marginLeft: '10px' }}>1</span>
                        </div>
                        <div className="rate-no">
                            <span>3</span>
                            <FaStar style={{ color: '#f8bc24', margin: '0px 5px' }} />
                            <div className="range-div">
                                <div className="color-div" style={{ width: '0%' }}></div>
                            </div>
                            <span style={{ marginLeft: '10px' }}>0</span>
                        </div>
                        <div className="rate-no">
                            <span>2</span>
                            <FaStar style={{ color: '#f8bc24', margin: '0px 5px' }} />
                            <div className="range-div">
                                <div className="color-div" style={{ width: '0%' }}></div>
                            </div>
                            <span style={{ marginLeft: '10px' }}>0</span>
                        </div>
                        <div className="rate-no">
                            <span>1</span>
                            <FaStar style={{ color: '#f8bc24', margin: '0px 5px' }} />
                            <div className="range-div">
                                <div className="color-div" style={{ width: '0%' }}></div>
                            </div>
                            <span style={{ marginLeft: '10px' }}>0</span>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='cont-row' style={{ background: '#ffffff'}}>
                <Col sm={12} md={4} lg={4}>
                    <div className="review-left">
                        <div className="user-review">
                            AB
                        </div>
                        <span style={{ color: '#39557e', marginTop: '10px' }}>5 months ago</span>
                    </div>
                </Col>
                <Col sm={12} md={8} lg={8}>
                    <div className="review-right">
                        <span style={{ color: '#f8bc24' }}><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span>
                        <p style={{ color: '#39557e' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, tenetur!</p>
                    </div>
                </Col>
            </Row>
            <Row className='cont-row'>
                <Col sm={12} md={4} lg={4}>
                    <div className="review-left">
                        <div className="user-review">
                            AB
                        </div>
                        <span style={{ color: '#39557e', marginTop: '10px' }}>1 month ago</span>
                    </div>
                </Col>
                <Col sm={12} md={8} lg={8}>
                    <div className="review-right">
                        <span style={{ color: '#f8bc24' }}><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar /></span>
                        <p style={{ color: '#39557e' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, tenetur!</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Review;