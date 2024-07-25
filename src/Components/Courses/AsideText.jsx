import React from 'react';
import './course.css';
import img from '../Assets/author_img-150x150.png';

const AsideText = () => {
    return (
        <div className='aside-text-wrap'>
            <div className="aside-text">
                <h5>A course by</h5>
                <div className="auth-img-div">
                    <img src={img} alt="" />
                    <h4>Eduvalt</h4>
                </div>
            </div>
            <div className="aside-text-two">
                <h5>Audience</h5>
                <p>Anyone wanting to learn the truth about dieting & meal planning</p>
                <p>Anyone with an open mind towards dieting</p>
            </div>
            <div className="aside-text-two">
                <h5>Material Includes</h5>
                <ul>
                    <li>4 hours on-demand video</li>
                    <li>4 articles</li>
                    <li>3 downloadable Resourses</li>
                    <li>Full lifetime access</li>
                    <li>Access on mobile and TV</li>
                    <li>Certificate of  Completion</li>
                </ul>
            </div>
            <div className="aside-text-two">
                <h5>Requirements</h5>
                <p>No prior health knowledge is required or assumed</p>
                <p>A digital food scale will help but is not required</p>
            </div>
            <div className="aside-text-two aside-resourse">
                <h5>Resourses</h5>
                <ul className='resourse'>
                    <li>Adobe Photoshop</li>
                    <li>App Development</li>
                    <li>Health & Fitness</li>
                </ul>
            </div>
        </div>
    )
}

export default AsideText;