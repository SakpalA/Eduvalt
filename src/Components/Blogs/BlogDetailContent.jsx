import React from 'react';
import './blog.css';
import { FaRegUser, FaCheckCircle, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { TbMessageCircle } from "react-icons/tb";
import { Row, Col } from 'react-bootstrap';

const BlogDetailContent = () => {
    return (
        <div className='blog-content-wrap'>
            <div className="blog-content blog-detail-cont">
                <ul>
                    <li><FaRegUser className='blog-icon' /> Eduvalt</li>
                    <li><LuCalendarDays className='blog-icon' /> June 22, 2023</li>
                    <li><TbMessageCircle className='blog-icon' /> No Comments</li>
                </ul>
            </div>
            <p className='blog-detail-text'>Horem ipsum dolor sitter metting Great consectetur adipiscing idealorem ipsum dolor sitter mettingtablished of a page when lookinThe point of using Lorem Ipsu ss normal distribution.est, qui dolor emr ipsum quia dolor sit ame consec tetur. Esse mo lestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et ac cumsan et iusto odio dignissim qui blandit praesent consectetur adipiscing idealorem.</p>
            <blockquote>
                <p>“ urabitur varius eros rutrum consequat Mauris sollicitudin enim condimentum luctus enim justo non molestie nisl ”</p>
            </blockquote>
            <h4 className='inner-title'>During this program</h4>
            <p className='blog-detail-text'>Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit.</p>
            <div className="event-detail-list">
                <ul>
                    <li><FaCheckCircle className='list-icon' /> Become a UX designer.</li>
                    <li><FaCheckCircle className='list-icon' /> Create quick wireframes.</li>
                    <li><FaCheckCircle className='list-icon' /> You will be able to add UX design.</li>
                    <li><FaCheckCircle className='list-icon' /> Downloadable exercise files.</li>
                    <li><FaCheckCircle className='list-icon' /> Become a UI designer.</li>
                </ul>
            </div>
            <p className='blog-detail-text'>Horem ipsum dolor sitter metting Great consectetur adipiscing idealorem ipsum dolor sitter mettingtablished of a page when lookinThe point of using Lorem Ipsu ss normal distribution.est, qui dolor emr ipsum quia dolor sit ame consec tetur. Esse mo lestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et ac cumsan et iusto odio dignissim qui blandit praesent consectetur adipiscing idealorem.</p>

            <div className="blog-detail-bottom">
                <Row>
                    <Col sm={12} md={7}>
                        <div className="post-detail-tag">
                            <h5 className='detail-text'>Tags: </h5>
                            <div className="tag-div">
                                <ul className='tag-div-ul'>
                                    <li>Apps</li>
                                    <li>UX/UI</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={5}>
                        <div className="blog-detail-social">
                            <h5 className='detail-text'>Social Share:</h5>
                            <div className="detail-icon-list">
                                <ul>
                                    <li><FaFacebookF /></li>
                                    <li><FaTwitter /></li>
                                    <li><FaLinkedinIn /></li>
                                    <li><FaPinterestP /></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default BlogDetailContent;