import React, { useState } from 'react';
import { RxDashboard } from "react-icons/rx";
import { Offcanvas } from 'react-bootstrap';
import './navbar.css';
import logo from '../Assets/logo.png';
import { CiSearch } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";

const VerticalNav = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [activePage, setActivePage] = useState('home');
    

    const handleClick = (page) => {
        setActivePage(page);
    }
    const handleShow = () => setShowMenu(true);
    const handleClose = () => setShowMenu(false);
  return (
    <>
    <RxDashboard className='menu' onClick={handleShow} />
            <Offcanvas show={showMenu} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='offc-title'>
                        <img src={logo} alt="Logo" className='offc-logo' />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='mobile-serach'>
                        <input type="text" placeholder='Search here...' />
                        <CiSearch className='serach-icon' />
                    </div>
                    <nav className='mobile-nav'>
                        <NavLink to="/"
                            className='navlink mobile-navlink'
                            style={{
                                color: activePage === 'home' ? '#1363df' : '#082a5e',
                                borderLeft: activePage === 'home' ? '3px solid #1363df' : 'none'
                            }}
                            onClick={() => handleClick('home')}>Home </NavLink>
                        <NavLink to="/courses"
                            className='navlink mobile-navlink'
                            style={{
                                color: activePage === 'courses' ? '#1363df' : '#082a5e',
                                borderLeft: activePage === 'course' ? '3px solid #1363df' : 'none'
                            }}
                            onClick={() => handleClick('courses')}>Courses </NavLink>
                        <NavLink to="/aboutus"
                            className='navlink mobile-navlink'
                            style={{
                                color: activePage === 'about' ? '#1363df' : '#082a5e',
                                borderLeft: activePage === 'about' ? '3px solid #1363df' : 'none'
                            }}
                            onClick={() => handleClick('about')}>About</NavLink>
                        <NavLink to="/contact"
                            className='navlink mobile-navlink'
                            style={{
                                color: activePage === 'contact' ? '#1363df' : '#082a5e',
                                borderLeft: activePage === 'contact' ? '3px solid #1363df' : 'none'
                            }}
                            onClick={() => handleClick('contact')}>Contact</NavLink>
                        <NavLink to="/blog"
                            className='navlink mobile-navlink btm-border'
                            style={{
                                color: activePage === 'blog' ? '#1363df' : '#082a5e',
                                borderLeft: activePage === 'blog' ? '3px solid #1363df' : 'none'
                            }}
                            onClick={() => handleClick('blog')}>Blog</NavLink>
                    </nav>
                    <div className='mobile-btn'>
                        <button className='sign-up'>Sign Up</button>
                        <button className='mobile-try-free'>Log Out</button>
                    </div>
                    <div className='mobile-icons'>
                        <div className='mob-icon'><FaFacebookF /></div>
                        <div className='mob-icon'><FaTwitter /></div>
                        <div className='mob-icon'><FaInstagram /></div>
                        <div className='mob-icon'><FaLinkedinIn /></div>
                        <div className='mob-icon'><FaPaperPlane /></div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas></>
  )
}

export default VerticalNav;