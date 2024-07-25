import React from 'react';
import '../style.css';
import { Container, Row } from 'react-bootstrap';
import all_course from '../Assets/all_courses';
import Fcourse from './Fcourse';

const FeaturedCourse = () => {
    const featuredCourse = all_course.filter(course => course.featured);
    return (
        <div className='instructor-two fcourse-wrap'>
            <div className="instructor-wrap fcourse">
                <div className='wrap-heading fcourse-text'>
                    <span className='inst-sub-title'>Welcome our Property.</span>
                    <h2 className='inst-title'>Our <span>Featured</span> Courses</h2>
                </div>
                <ul className='fcourse-list'>
                    <li className='fcourse-active'>All Courses</li>
                    <li>Business</li>
                    <li>Design</li>
                    <li>Graphic Design</li>
                    <li>Marketing</li>
                </ul>
            </div>
            <div className='fcourse-list-wrap'>
                {featuredCourse.map((course, index) => (
                    <Fcourse
                        key={index}
                        title={course.title}
                        image={course.image}
                        department={course.department}
                        lesson={course.lessons}
                        duration_hr={course.duration_hr}
                        duration_min={course.duration_min}
                        students={course.students}
                        no_rating={course.no_rating}
                        star_rating={course.star_rating}
                        fees={course.fees} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedCourse;