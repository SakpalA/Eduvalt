import React from 'react';
import './blog.css';
import all_blog from '../Assets/all_blogs';

const BlogCategory = ({ setSelectedDepartment }) => {
  // Get unique departments
  // new Set(...): The Set object in JavaScript allows you to store unique values of any type. Using the spread operator ..., we're spreading the array created from the map function into the Set constructor. This removes any duplicate values, leaving only unique department names.
  // [...]: The spread operator ... is used here to spread the unique values from the Set object into a new array.
  const departments = [...new Set(all_blog.map(blog => blog.department))];

  const handleDepartmentClick = (departmentName) => {
    setSelectedDepartment(departmentName);
  };

  const  scrollToTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <div className='blog-category-wrap'>
      <h3 className='blog-cat-title'>Categories</h3>
      <ul>
        {departments.map((department, index) => (
          <li key={index} onClick={() => handleDepartmentClick(department)}>
            <span onClick={scrollToTop}>{department}</span> <span>1</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogCategory;
