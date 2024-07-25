import React from 'react';
import '../style.css';
import { IoIosArrowForward } from "react-icons/io";
import { useLocation, useParams } from 'react-router-dom';

const getPageTitle = (pathname, blog_title = '') => {
  switch (pathname) {
    case '/aboutus':
      return 'About Us';
    case '/contact':
      return 'Contact';
    case '/courses':
      return 'Courses';
    case '/signup':
      return 'Student Registration';
    case '/login':
      return 'Sign In';
    case '/profile':
      return 'Your Profile';
    case '/cart':
      return 'Cart';
    case '/blog':
      return 'Blogs';
    default:
      if (pathname.startsWith('/blog')) {
        return `${blog_title}`;
      }
      return;
  }
};

const Breadcrumb = () => {
  const { blog_title } = useParams();
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname, blog_title);

  return (
    <div className='background-image'>
      <div className="breadcrumb-content">
        <h3 className='breadcrumb-title'>{pageTitle}</h3>
        <div className="breadcrumb">
          <span>Eduvalt</span>
          <IoIosArrowForward />
          <span className='current-page'>{pageTitle}</span>
        </div>
      </div>

    </div>
  )
}

export default Breadcrumb;