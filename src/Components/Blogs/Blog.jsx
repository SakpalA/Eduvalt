import React from 'react';
import './blog.css';
import { FaRegUser } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { TbMessageCircle } from "react-icons/tb";
import { Link} from 'react-router-dom';

const Blog = ({ image, title, department }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    return (
        <div className='blog-wrap'>
            <Link to={`/blog-details/${title}`}><img 
            onClick={scrollToTop}
            src={image} alt="" className='blog-img' /></Link>
            <div className="blog-content">
            <span className='blog-department'>{department}</span>
                <h2 className='blog-title'>{title}</h2>
                <ul>
                    <li><FaRegUser className='blog-icon' /> Eduvalt</li>
                    <li><LuCalendarDays className='blog-icon' /> June 22, 2023</li>
                    <li><TbMessageCircle className='blog-icon' /> No Comments</li>
                </ul>
                <p className='blog-title'>Horem ipsum dolor sitter metting Great consectetur adipiscing idealorem ipsum dolor sitter mettingtablished of a page when lookinThe point of using Lorem Ipsu ss normal distribution.est, qui dolor emr ipsum […]</p>
                <Link to={`/blog-details/${title}`}><button onClick={scrollToTop} className='blog-btn'>CONTINUE READING</button></Link>
            </div>
        </div>
    )
}

export default Blog;