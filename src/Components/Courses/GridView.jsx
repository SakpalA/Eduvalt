import React, { useContext } from 'react';
import './course.css';
import SingleCourse from './SingleCourse';
import { ShopContext } from '../Context/ContextProvider';

const GridView = () => {
  const { filteredProducts: courses } = useContext(ShopContext);
  if (!courses) {
    return <div>No courses available</div>;
  }
  return (
    <div className='course-list'>
            {courses.length === 0 ? (
              <p>No Course Available.</p>
            ) : (
              courses.map((course, index) => (
                <SingleCourse
                  key={index}
                  image={course.image}
                  title={course.title}
                  department={course.department}
                  lesson={course.lessons}
                  duration_hr={course.duration_hr}
                  duration_min={course.duration_min}
                  students={course.students}
                  star_rating={course.star_rating.icon}
                  no_rating={course.no_rating}
                  fees={course.fees}
                />
              ))
            )}
    </div>
  );
}

export default GridView;