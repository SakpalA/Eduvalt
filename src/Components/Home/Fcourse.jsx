import React from 'react';
import '../style.css';
import { TbNotes } from "react-icons/tb";
import { GoClock } from "react-icons/go";
import { PiUsers } from "react-icons/pi";
import img from '../Assets/author_img-150x150.png';
import { Link } from 'react-router-dom';

const Fcourse = ({ title, image, department, lesson, duration_hr, duration_min, students, no_rating, star_rating, fees }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div className='fcousre-div'>
            <div className='fcourse-img-div'>
                <Link to={`/courses/${title}`}><img src={image} onClick={scrollToTop} className='fcourse-img' /></Link>
                <span className='fcourse-dep'>{department}</span>
            </div>
            <div className="fcourse-content-div">
                <ul className='fcourse-list-one'>
                    <li><TbNotes className='fcourse-icon'/> {lesson} Lessons</li>
                    <li><GoClock className='fcourse-icon'/> {duration_hr}hr {duration_min}m</li>
                    <li><PiUsers className='fcourse-icon'/> {students} Students</li>
                </ul>
                <Link to={`/courses/${title}`}><h5 onClick={scrollToTop}>{title}</h5></Link>
                <div className="fcourse-star-div">
                    {star_rating.map((star, index) => (
                        <span key={index} className='fcourse-star'>
                            {star.icon}
                        </span>
                    ))}
                    <span>({no_rating})</span>
                </div>
                <hr />
                <ul className='fcourse-list-one'>
                    <li><img src={img} alt="" /><span>Eduvalt</span></li>
                    <li className='fcourse-fees'>{fees}</li>
                </ul>
            </div>
        </div>
    )
}

export default Fcourse;