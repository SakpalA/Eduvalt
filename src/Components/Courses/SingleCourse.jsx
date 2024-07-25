import React from 'react';
import './course.css';
import girl_img from '../Assets/author_img-150x150.png';
import { TbNotes } from "react-icons/tb";
import { GoClock } from "react-icons/go";
import { PiUsers } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


const SingleCourse = ({ image, title, department, lesson, duration_hr, duration_min, students, no_rating, fees }) => {
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    return (

        <div className='single-course-wrap'>
            <div className="course-image-div">
                <Link to={`/courses/${title}`}><img src={image} alt="" className='course-img' onClick={scrollToTop}/></Link>
                <div className="edu-girl">
                    <img src={girl_img} alt="" className='edu-girl-img' />
                </div>
            </div>
            <div className="course-content">
                <span className='course-dep'>{department}</span>
                <Link to={`/courses/${title}`}><h4 className='course-title' onClick={scrollToTop}>{title}</h4></Link>
                <ul>
                    <li><TbNotes /> {lesson}</li>
                    <li><GoClock /> {duration_hr}hr {duration_min}m</li>
                    <li><PiUsers /> {students}</li>
                </ul>
                <div className="course-bottom">
                    <div className="course-price">
                        <h4>{fees}</h4>
                    </div>
                    <div className="star-rating">
                        <FaStar className='course-star' /> <span>({no_rating})</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SingleCourse;