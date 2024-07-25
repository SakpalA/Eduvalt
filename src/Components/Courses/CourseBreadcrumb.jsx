import React from 'react';
import './course.css';
import image from '../Assets/author_img-150x150.png';
import { TbNotes } from "react-icons/tb";
import { GoClock } from "react-icons/go";
import { PiUsers } from "react-icons/pi";
import { Container, Row, Col } from 'react-bootstrap';


const CourseBreadcrumb = ({ title, description, department, lessons, duration_hr, duration_min, students, no_rating, star_rating }) => {
  return (
    <div className='course-breadcrumb-wrap'>
    <Container>
      <Row>
        <Col sm={12} md={12} lg={8}>
          <div className='course-breadcrumb-content'>
            <span className='listv-dep crumb-dep'>{department}</span>
            <h3 className='crumb-title'>{title}</h3>
            <p className='crumb-desp'>{description}</p>
            <ul>
              <li><img src={image} alt="Eduvalt Girl" className='crumb-edu-girl' /> Eduvalt</li>
              <li><TbNotes /> {lessons}</li>
              <li><GoClock /> {duration_hr}hr {duration_min}m</li>
              <li><PiUsers /> {students}</li>
              <li>{star_rating.map((star, index) => (
                <span key={index} className='crumb-star'>{star.icon}</span>
              ))} ({no_rating})</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default CourseBreadcrumb;