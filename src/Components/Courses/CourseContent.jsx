import React from 'react';
import './course.css';
import BasicTab from './BasicTab';

const CourseContent = () => {
  return (
    <>
      <div className='course-video'>
        <iframe width="100%" height="600" src="https://www.youtube.com/embed/amFYvQK4huo?si=7dAw3IejKX_N7f4h" title="YouTube video player" frameBorder="0" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"></iframe>
      </div>
      <div className="content-tab">
        <BasicTab />
      </div>
    </>
  )
}

export default CourseContent;