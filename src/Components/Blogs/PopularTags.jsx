import React from 'react';
import './blog.css';
// import all_blog from '../Assets/all_blogs';

const PopularTags = () => {
  
  
  return (
    <div className='blog-category-wrap'>
        <h3 className='blog-cat-title'>Popular Tags</h3>
        <div className="tag-div">
            <ul>
                <li>Apps</li>
                <li>Art & Design</li>
                <li>Courses</li>
                <li>Education</li>
                <li>Learning</li>
                <li>Programming</li>
                <li>UX/UI</li>
                <li>Video</li>
            </ul>
        </div>
    </div>
  )
}

export default PopularTags;
