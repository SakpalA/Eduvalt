import React from 'react';
import './blog.css';
import { useParams } from 'react-router-dom';
import all_blog from '../Assets/all_blogs';


const DetailsImage = () => {
    const {blog_title} = useParams();
    const blog = all_blog.find(blog => blog.title === blog_title)

    if (!blog) {
        return <div>Blog not found</div>;
    }
  return (
    <div className='detail-image'>
         <img src={blog.image} alt="Blog Image" />
    </div>
  )
}

export default DetailsImage;