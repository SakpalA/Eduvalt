import React from 'react';
import './course.css';
import SearchCourse from './SearchCourse';
import CourseFaculty from './CourseFaculty';

const FilterSection = () => {
  return (
    <div className="filter-section">
      <SearchCourse />
      <CourseFaculty />
    </div>
  )
}

export default FilterSection;