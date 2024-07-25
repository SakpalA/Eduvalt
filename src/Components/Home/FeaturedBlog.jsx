import React from 'react';
import '../style.css';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Link } from 'react-router-dom';


const FeaturedBlog = ({title, image, department}) => {
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
  return (
    <div className='featured-blog'>
        <div className="featured-img">
            <Link to={`/blog-details/${title}`}><img src={image} alt="Blog Image" onClick={scrollToTop}/></Link>
        </div>
        <div className="fblog-text">
            <span className='fblog-dep'>{department}</span>
            <Link to={`/blog-details/${title}`}><h4 onClick={scrollToTop}>{title}</h4></Link>
            <ul>
                <li className='fblog-active'><FaRegUser className='fblog-icon'/> <span>By Eduvalt</span></li>
                <li><MdOutlineCalendarMonth className='fblog-icon'/> <span>June 22, 2023</span></li>
            </ul>
        </div>
    </div>
  )
}

export default FeaturedBlog;