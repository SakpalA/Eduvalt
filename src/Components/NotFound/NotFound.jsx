import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const NotFound = () => {
    return (
        <div className='not-found'>
            <span className='not-404'>404</span>
            <h1>Sorry, the page you are looking for cloud not be found.</h1>
            <Link to='/'><button className='not-found-btn'>BACK TO HOME</button></Link>
        </div>
    )
}

export default NotFound;