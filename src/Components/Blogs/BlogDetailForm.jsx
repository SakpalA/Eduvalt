import React from 'react';
import './blog.css';
import { Row, Col } from 'react-bootstrap';

const BlogDetailForm = () => {
  return (
    <div className='detail-form-wrap'>
        <h3 className='reply-title'>Leave A Reply</h3>
        <p>Your email address will not be published. Required fields are marked *</p>
        <form action="">
            <Row>
                <Col sm={12} md={6}>
                    <div className="comment-field">
                        <input type="text"  placeholder='Enter Name'/>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div className="comment-field">
                        <input type="email" placeholder='Enter Email'/>
                    </div>
                </Col>
                <Col sm={12} md={12}>
                    <div className="comment-field">
                        <input type="text" placeholder='Enter Website'/>
                    </div>
                </Col>
                <Col sm={12} md={12}>
                    <div className="comment-field">
                        <textarea placeholder='Enter Your Comment' cols="10" rows="6"></textarea>
                    </div>
                </Col>
            </Row>
        </form>
        <button>POST COMMENT</button>
    </div>
  )
}

export default BlogDetailForm;