import React from 'react';
import './course.css';
import { useParams } from 'react-router-dom';
import all_course from '../Assets/all_courses';
import { FiBarChart } from "react-icons/fi";
import { LuGraduationCap, LuRefreshCw } from "react-icons/lu";
import { GoClock } from "react-icons/go";

const AsideEntrol = () => {
    const {course_title} = useParams();
    const course = all_course.find(course => course.title === course_title);
  return (
    <div className='enroll-div'>
        <div className="enroll-body">
            <h4>{course.fees}</h4>
            <button className='enroll-btn'>Enroll Now</button>
            <p className='enroll-para'>Access this course</p>
        </div>
        <div className="enroll-footer">
            <ul>
                <li><FiBarChart /> <span>{course.level}</span></li>
                <li><LuGraduationCap /> <span>{course.students} Total Enrolled</span></li>
                <li><LuGraduationCap /> <span>English</span></li>
                <li><GoClock /> <span>{course.duration_hr} hours {course.duration_min} minutes Duration</span></li>
                <li><LuRefreshCw /> <span>July 20, 2023 Last Updated</span></li>
            </ul>
        </div>
    </div>
  )
}

export default AsideEntrol;