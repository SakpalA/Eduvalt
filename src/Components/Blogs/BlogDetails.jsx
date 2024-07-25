import React from 'react';
import './blog.css';
import { Container, Row, Col } from 'react-bootstrap';
import DetailsImage from './DetailsImage';
import BlogCategory from './BlogCategory';
import RecentBlog from './RecentBlog';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import PopularTags from './PopularTags';
import RecentComt from './RecentComt';
import BlogSearch from './BlogSearch';
import BlogDetailContent from './BlogDetailContent';
import BlogDetailForm from './BlogDetailForm';


const BlogDetails = () => {
    return (
        <div className="blog-detail-wrap">
            <Breadcrumb />
            <div className="blog-page-wrap">
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={8}>
                            <main>
                                <DetailsImage />
                                <BlogDetailContent />
                                <BlogDetailForm />
                            </main>

                        </Col>
                        <Col sm={12} md={12} lg={4}>
                            <aside>
                                <BlogSearch />
                                <BlogCategory />
                                <RecentBlog />
                                <PopularTags />
                                <RecentComt />
                            </aside>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default BlogDetails;