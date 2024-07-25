import React from 'react';
import './course.css';
import { Container, Row, Col } from 'react-bootstrap';
import SingleCourse from './SingleCourse';
import three_course from '../Assets/three_course';

const TopCourse = () => {
    return (
        <div className="instructor-two">
            <div className="instructor-wrap">
                <div className='wrap-heading'>
                    <span className='inst-sub-title'>Top Course</span>
                    <h2 className='inst-title'>More Courses By <span>Eduvalt</span></h2>
                </div>
                <button className='inst-btn inst-outline'>ALL COURSES</button>
            </div>
            <Container>
                <Row>
                {three_course.map((course, index) => (
                    <SingleCourse
                        key={index}
                        title={course.title}
                        image={course.image}
                        department={course.department}
                        lesson={course.lessons}
                        duration_hr={course.duration_hr}
                        duration_min={course.duration_min}
                        students={course.students}
                        fees={course.fees}
                        no_rating={course.no_rating}
                        className='three-course'/>
                ))}
                </Row>
            </Container>
        </div>
    )
}

export default TopCourse;