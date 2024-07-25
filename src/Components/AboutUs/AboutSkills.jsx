import React from 'react';
import '../style.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Hooks } from './Hooks';
import icon1 from '../Assets/icon-1.png';
import icon2 from '../Assets/icon-2.png';
import icon3 from '../Assets/icon-3.png';
import icon4 from '../Assets/icon-4.png';

const AboutSkills = () => {
  const { getCount1, getCount2, getCount3, getCount4, getCount5, getCount6 } = Hooks();

  // Example usage:
  const count1 = getCount1();
  const count2 = getCount2();
  const count3 = getCount3();
  const count4 = getCount4();
  const count5 = getCount5();
  const count6 = getCount6();



  return (
    <div className='about-skills'>
      <div className="about-skill-wrap">
        <span className='inst-sub-title'>Worldwide Our Achievement</span>
        <h2 className='inst-title'>Grow You <span>Skills</span> to Advance <br />Your Career Path </h2>
      </div>
      <Container>
        <Row>
          <Col sm={12} md={4} lg={3}>
            <div className='fact-item'>
              <div className="fact-img">
                <img src={icon1} alt="" />
              </div>
              <h1 className='counter-heading'>
                <span>{count1}</span>,
                <span>{count2}</span>
              </h1>
              <p className='counter-para'>Students Enrolled</p>
            </div>
          </Col>
          <Col sm={12} md={4} lg={3}>
            <div className='fact-item'>
              <div className="fact-img">
                <img src={icon2} alt="" />
              </div>
              <h1 className='counter-heading'>
                <span>{count3}</span>,
                <span>{count4}</span>
              </h1>
              <p className='counter-para'>Top Class Courses</p>
            </div>
          </Col>
          <Col sm={12} md={4} lg={3}>
            <div className='fact-item'>
              <div className="fact-img">
                <img src={icon3} alt="" />
              </div>
              <h1 className='counter-heading'>
                <span>{count5}</span>
              </h1>
              <p className='counter-para'>World Countries</p>
            </div>
          </Col>
          <Col sm={12} md={4} lg={3}>
            <div className='fact-item'>
              <div className="fact-img">
                <img src={icon4} alt="" />
              </div>
              <h1 className='counter-heading'>
                <span>{count6}</span>
              </h1>
              <p className='counter-para'>Award We Received</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutSkills;