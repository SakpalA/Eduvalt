import React from 'react';
import './blog.css';
import { LuCalendarDays } from "react-icons/lu";

const SmallBlog = ({ small_image, title }) => {
  const  scrollToTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
  return (
    <div className="rc-post-item">
        <div className="rc-post-image" onClick={scrollToTop}>
          <img src={small_image} alt="" className='rc-post-img'/>
        </div>
        <div className="rc-post-content">
          <h4 className='rc-post-title' onClick={scrollToTop}>{title}</h4>
          <span><LuCalendarDays className='blog-icon' /> June 22, 2023</span>
        </div>
      </div>
  )
}

export default SmallBlog;