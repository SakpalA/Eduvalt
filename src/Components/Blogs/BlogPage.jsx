import React, { useState } from 'react';
import './blog.css';
import { Container, Row, Col } from 'react-bootstrap';
import BlogSearch from './BlogSearch';
import Blog from './Blog';
import BlogCategory from './BlogCategory';
import RecentBlog from './RecentBlog';
import all_blog from '../Assets/all_blogs';
import PopularTags from './PopularTags';
import RecentComt from './RecentComt';
import BlogPagination from './BlogPagination';

const BlogPage = () => {
    const [selectedDepartment, setSelectedDepartment] = useState(""); // State to hold the selected department
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 3;

    // Filter blogs based on the selected department
    // const filteredBlogs = selectedDepartment
    // ? all_blog.filter(blog => blog.department.toLowerCase() === selectedDepartment.toLowerCase())
    // : all_blog;
    const filteredBlogs = all_blog.filter(blog => {
        const departmentMatch = selectedDepartment === "" || blog.department.toLowerCase() === selectedDepartment.toLowerCase();
        const searchMatch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
        return departmentMatch && searchMatch;
    });

    // Calculate the blogs to display based on the current page
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    // Calculate total number of pages
    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

    const nextPage = () => {
        if(currentPage < totalPages){
            setCurrentPage(currentPage + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const prevPage = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }



    return (
        <div className='blog-page-wrap'>
            <Container>
                <Row>
                    <Col sm={12} md={12} lg={8}>
                        <main>
                            {currentBlogs.map((blog, index) => (
                                    <Blog
                                        key={index}
                                        image={blog.image}
                                        title={blog.title}
                                        department={blog.department}
                                    />
                                ))}
                            <BlogPagination 
                            currentPage={currentPage}
                            totalPages={totalPages}
                            nextPage={nextPage}
                            prevPage={prevPage}/>
                        </main>
                    </Col>
                    <Col sm={12} md={12} lg={4}>
                        <aside className='blog-sidebar'>
                            <BlogSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                            <BlogCategory setSelectedDepartment={setSelectedDepartment} />
                            <RecentBlog />
                            <PopularTags />
                            <RecentComt />
                        </aside>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BlogPage;
