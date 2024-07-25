import React from 'react';
import '../style.css';
import { Container, Row, Col } from 'react-bootstrap';
import about01 from '../Assets/about_img03.jpg';
import about02 from '../Assets/about_img04.jpg';
import about03 from '../Assets/about_img05.jpg';
import abtshape1 from '../Assets/about_shape01.png';
import abtshape2 from '../Assets/about_shape02.png';
import abtshape3 from '../Assets/about_shape03.png';

const AboutExplore = () => {
  return (
    <div className='about-explore'>
                    <div className="explore-info">
                        <span className='inst-sub-title'>Who we are</span>
                        <h2 className='inst-title'>The Leading Global <span>Marketplace</span> For Learning And </h2>
                        <p className='expl-text'>Borem ipsum dolor sit amet, consectetur adipiscing eliawe ellus luctus nec ullamcorper mattisBorem</p>
                        <p className='inst-text'>Bipsum dolor awtnse awctetur adipis we followelit. Borem.Borem ipsum dolamet consectetur adipiscing eliawe awUt elit ellutnse awcon sectetur adipiscing ectetur.</p>
                        <button className='inst-btn'>EXPLORE COURSES</button>
                    </div>
                    <div className="explore-images">
                        <Col>
                            <div className="expl-img-one">
                                <img src={about01} alt="" className='
                                expl-img'/>
                                <img src={abtshape1} alt="" className='abt-shape-one'/>
                            </div>
                        </Col>
                        <Col>
                            <div className="expl-img-two">
                                <img src={abtshape2} alt="" className='abt-shape-two'/>
                                <img src={about02} alt="" className='expl-img exp-img-gap'/>
                                <img src={about03} alt="" className='expl-img'/>
                                <img src={abtshape3} alt="" className='abt-shape-three'/>
                            </div>
                        </Col>
                    </div>
    </div>
  )
}

export default AboutExplore;