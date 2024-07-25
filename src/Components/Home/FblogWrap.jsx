import React from 'react';
import '../style.css';
import FeaturedBlog from './FeaturedBlog';
import all_blog from '../Assets/all_blogs';
import blog_shape1 from '../Assets/blog_shape01.png';
import blog_shape2 from '../Assets/blog_shape02.png';


const FblogWrap = () => {
    const featuredBlog = all_blog.filter(blog => blog.featured);
    return (
        <div className='instructor-two fblog'>
            <div className="fblog-text-wrap">
                <span className='inst-sub-title'>Welcome our Property.</span>
                <h2 className='inst-title fblog-title'>Our <span>Featured</span> Courses</h2>
                <p className='fblog-para'>Receive huge benefits with our lifetime Plumbing Receive huge benefits with our lifetime Plumbing email address will be shown</p>
                <img src={blog_shape1} className='blog-shape1' />
                <img src={blog_shape2} className='blog-shape2' />
            </div>
            <div className='fblog-wrap'>
                {featuredBlog.map((blog, index) => (
                    <FeaturedBlog
                        key={index}
                        title={blog.title}
                        image={blog.image}
                        department={blog.department} />
                ))}
            </div>
        </div>
    )
}

export default FblogWrap;