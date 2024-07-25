import React from 'react';
import { useParams } from 'react-router-dom';
import all_course from '../Assets/all_courses';
import CourseBreadcrumb from './CourseBreadcrumb';
import { Container, Row, Col } from 'react-bootstrap';
import CourseContent from './CourseContent';
import CourseAside from './CourseAside';
import TopCourse from './TopCourse';

// import CourseContent from './CourseContent';


const CourseDetails = () => {
  const { course_title } = useParams();
  const course = all_course.find(course => course.title === course_title);

  if (!course) {
    return <div>Course not Found</div>
  }
  return (
    <>
      <CourseBreadcrumb
        title={course.title}
        description={course.description}
        department={course.department}
        lessons={course.lessons}
        duration_hr={course.duration_hr}
        duration_min={course.duration_min}
        students={course.students}
        star_rating={course.star_rating}
        no_rating={course.no_rating} />

      <Container>
        <Row>
          <Col sm={12} md={12} lg={8} xl={9}>
            <main>
              <CourseContent />
            </main>
          </Col>
          <Col sm={12} md={12} lg={4} xl={3}>
            <aside>
            <CourseAside />
            </aside>
          </Col>
        </Row>
      </Container>

      <TopCourse />
    </>
  )
}

export default CourseDetails;