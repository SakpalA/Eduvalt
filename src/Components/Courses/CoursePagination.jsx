import React, { useContext } from 'react';
import './course.css';
import { ShopContext } from '../Context/ContextProvider';

const CoursePagination = () => {
    const {currentPage, prevPage, nextPage, totalPages } = useContext(ShopContext);
  return (
    <div>
        <button className='pagi-btn' onClick={prevPage} >1</button>
      <span>Page {currentPage} of {totalPages}</span>
      <button className='pagi-btn' onClick={nextPage} >2</button>
    </div>
  )
}

export default CoursePagination;


// Pagination

//  // Calculate the courses to display based on the current page
//  const indexOfLastCourse = currentPage * coursesPerPage;
//  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
//  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

//  const nextPage = () => {
//    if (currentPage < Math.ceil(courses.length / coursesPerPage)) {
//      setCurrentPage(currentPage + 1);
//    }
//  };

//  const prevPage = () => {
//    if (currentPage > 1) {
//      setCurrentPage(currentPage - 1);
//    }
//  };