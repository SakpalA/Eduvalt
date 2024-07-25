import React, { useContext } from 'react';
import './course.css';
import img from '../Assets/author_img-150x150.png'
import { TbNotes } from "react-icons/tb";
import { GoClock } from "react-icons/go";
import { PiUsers } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { ShopContext } from '../Context/ContextProvider';


const ListView = () => {
    const { filteredProducts: courses } = useContext(ShopContext);
    if (!courses) {
        return <div>No courses available</div>;
    }
    return (
        <>
            {courses.length === 0 ? (
                <p>No Course Available.</p>
            ) : (
                courses.map((course, index) => (
                <div key={index} className='list-view-wrap'>
                    <div className="img-div">
                        <img src={course.image} alt="" className='listv-img' />
                    </div>
                    <div className="list-view-content">
                        <span className='listv-dep'>{course.department}</span>
                        <h4 className='listv-title'>{course.title}</h4>
                        <ul>
                            <li><TbNotes /> {course.lessons}</li>
                            <li><GoClock /> {course.duration_hr}hr {course.duration_min}m</li>
                            <li><PiUsers /> {course.students}</li>
                            <li><FaStar className='course-star' /> <span>({course.no_rating})</span></li>
                        </ul>
                        <p className='listv-disp'>{course.description}</p>
                        <hr />
                        <div className="fees-content">
                            <div className="girl-img-div">
                                <img src={img} alt="" />
                                <span>Eduvalt</span>
                            </div>
                            <h4 className='listv-price'>{course.fees}</h4>
                        </div>
                    </div>
                </div>
                ))
            )}
    </>
    )
}

export default ListView;