import React from 'react';
import '../style.css';
import { Col, Container, Row } from 'react-bootstrap';
import shape1 from '../Assets/cta_shape01.png';
import shape2 from '../Assets/cta_shape02.png';

const CtaWrap = () => {
    return (
        <div className='cta-wrap'>
            <img src={shape1} alt="" className='cta-star'/>
            <Container>
                <Row>
                    <Col sm={12} md={12} lg={4}>
                        <h2 className='cta-title'>Join Us & Spread Experiences</h2>
                    </Col>
                    <Col sm={12} md={6} lg={5}>
                        <div className='cta-content'>
                            <p className='cta-para'>Borem ipsum dolor sit amet, consectetur adipiscing eliawe awUt elit ellus, luctus nec ullamcorper mattisBorem</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <div className='cta-btn-div'>
                            <button className='cta-btn'>BECOME A INSTRUCTOR</button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={shape2} alt="" className='cta-blue'/>
        </div>
    )
}

export default CtaWrap;