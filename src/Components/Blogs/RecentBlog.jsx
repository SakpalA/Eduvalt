import React from 'react';
import './blog.css';
import SmallBlog from './SmallBlog';
import all_blog from '../Assets/all_blogs';


const RecentBlog = () => {
  return (
    <div className='blog-category-wrap'>
      <h3 className='blog-cat-title'>Recent Posts</h3>
      {all_blog.map((blog, index) => (
        <SmallBlog
          key={index}
          small_image={blog.small_image}
          title={blog.title} />
      ))}
    </div>
  )
}

export default RecentBlog;