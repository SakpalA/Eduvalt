import React from 'react';
import FilterSection from './FilterSection';
import CourseSection from './CourseSection';
import './course.css';
import { Container, Row, Col } from 'react-bootstrap';

const CoursePage = () => {
    return (
        <div className='course-page-wrap'>
            <Container>
                <Row>
                    <Col lg={4} xl={3}>
                        <aside>
                            <FilterSection />
                        </aside>

                    </Col>
                    <Col lg={8} xl={9}>
                        <main>
                            <CourseSection />
                        </main>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CoursePage;