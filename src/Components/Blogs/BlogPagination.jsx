import React from 'react';
import '../Courses/course.css';

const BlogPagination = ({ currentPage, totalPage, nextPage, prevPage}) => {
    return(
        <div>
           <button className='pagi-btn' onClick={prevPage}>1</button>
           <span>Page {currentPage} of {totalPage}</span>
           <button className='pagi-btn' onClick={nextPage}>2</button>
        </div>
    )
}

export default BlogPagination;