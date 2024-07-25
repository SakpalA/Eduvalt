import React from 'react';
import '../style.css';
import { Container, Row, Col } from 'react-bootstrap';
import bshape1 from '../Assets/bshape_01.png';
import bshape2 from '../Assets/bshape_02.png';
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import banner_img from '../Assets/banner_img.png';
import shape3 from '../Assets/bshape_03.png';
import shape4 from '../Assets/bshape_04.png';
import shape5 from '../Assets/bshape_05.png';
import { FaUsers, FaGraduationCap } from "react-icons/fa";

export const Banner = () => {
  return (
    <div className='banner'>
      <Container>
        <Row>
          <Col s={12} md={12} lg={6}>
            <div className="banner-content">
              <div className='bshape'>
                <img src={bshape1} alt="bshape" className='bshape1' />
                <img src={bshape2} alt="bshape" className='bshape2' />
                <span className='sub-title'>100% Satisfaction Guarantee</span>
              </div>
              <h3 className='title'>Learn <span>Skills</span> From Our Top Instructors</h3>
              <p className='banner-text'>Borem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattisBorem ipsum dolor sit amet consectetur adipiscing area we followelit.</p>
              <div className="banner-btn-wrap">
                <button className='explore-courses'>EXPLORE COURSES</button>
                <div className="banner-phone">
                  <LiaPhoneVolumeSolid className='phone-icon' />
                  <div className='banner-phone-wrap'>
                    <span>Have any Question?</span>
                    <h6>933-00-67777</h6>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col s={12} md={12} lg={6}>
            <div className="banner-images">
              <img src={banner_img} alt="Banner Girl Image" className='banner-girl'/>
              <img src={shape3} alt="Notes Image" className='shape3' />
              <img src={shape4} alt="Arrow" className='shape4' />
              <img src={shape5} alt="Paper Plane" className='shape5' />
              <div className="banner-fact">
                <div className="banner-fact-item">
                  <div className="user-icon">
                    <FaUsers />
                  </div>
                  <div className="info">
                    <span>Total Student</span>
                    <h4>15k</h4>
                  </div>
                </div>
                <div className="banner-fact-item-two">
                  <div className="user-icon cap">
                    <FaGraduationCap />
                  </div>
                  <div className="info">
                    <span>Complete Graduation</span>
                    <h4>34k</h4>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner;
