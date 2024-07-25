import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import './navbar.css';
import { NavLink, Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import VerticalNav from './VerticalNav';
import LogoutBtn from './LogoutBtn';
import LoginBtn from './LoginBtn';

const HomeNav = () => {
    const location = useLocation();
    const [isHomePage, setIsHomePage] = useState(location.pathname === '/');
    const [activePage, setActivePage] = useState(localStorage.getItem('activePage') || 'home');
    const [isOpen, setIsOpen] = useState(false);
    // const [isPageActive, setIsPageActive] = useState(true);
    const loggedin = localStorage.getItem("loggedin");

    const handleClick = (page) => {
        setActivePage(page);
        localStorage.setItem('activePage', page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState);
    };

    // Update isHomePage state when route changes
    useEffect(() => {
        setIsHomePage(location.pathname === '/');
    }, [location.pathname]);

    return (
        <Navbar expand="lg" className='navbar' style={{
            backgroundColor: isHomePage ? '#f5f5f7' : '#ffffff',
            boxShadow: isHomePage ? 'none' : '0 10px 15px rgba(25, 25, 25, 0.1)'
        }}>
            <Navbar.Brand href="#"><img src={logo} alt="Brand Logo" className='logo' /></Navbar.Brand>
            <Nav className='navbar-name'>
                <NavLink to="/"
                    className='navlink'
                    style={{ color: activePage === 'home' ? '#1363df' : '#082a5e' }}
                    onClick={() => handleClick('home')}>Home </NavLink>
                <NavLink to="/courses"
                    className='navlink'
                    style={{ color: activePage === 'courses' ? '#1363df' : '#082a5e' }}
                    onClick={() => handleClick('courses')}>Courses </NavLink>
                <NavLink to="/aboutus"
                    className='navlink'
                    style={{ color: activePage === 'about' ? '#1363df' : '#082a5e' }}
                    onClick={() => handleClick('about')}>About</NavLink>
                <NavLink to="/contact"
                    className='navlink'
                    style={{ color: activePage === 'contact' ? '#1363df' : '#082a5e' }}
                    onClick={() => handleClick('contact')}>Contact</NavLink>
                <NavLink to="/blog"
                    className='navlink'
                    style={{ color: activePage === 'blog' ? '#1363df' : '#082a5e' }}
                    onClick={() => handleClick('blog')}>Blog</NavLink>
            </Nav>
            <div className='cat-form'>
                <div className='dropdown'>
                    <RiDashboardFill className='dropdown-icon' />
                    <button className='dropbtn' onClick={toggleDropdown}>Categories</button>
                    <div className="dropdown-content" style={{ display: isOpen ? 'block' : 'none' }}>
                        <div className='dropdown-list'>
                            <Link to='/courses' className='drop-item'>Business</Link>
                            <Link to='/courses' className='drop-item'>Design</Link>
                            <Link to='/courses' className='drop-item'>Development</Link>
                            <Link to='/courses' className='drop-item'>Health & Fitness</Link>
                            <Link to='/courses' className='drop-item'>Marketing</Link>
                            <Link to='/courses' className='drop-item'>Math</Link>
                            <Link to='/courses' className='drop-item'>Photography</Link>
                        </div>
                    </div>
                </div>
                <div className='search-grp'>
                    <input type="text" placeholder='Search For Course...' className='search' />
                    <CiSearch className='serach-icon' />
                </div>
                <div className='line'></div>
            </div>
            <div className='cart-div'>
                <div className='cart-btn'>
                    <Link to='/cart'>
                    <BsHandbag onClick={handleClick} className='cart-icon' />
                    <div className="cart-count">0</div>
                    </Link>
                </div>
                {!loggedin ? (<LoginBtn />) : (<LogoutBtn activePage={activePage}/>)}
                <VerticalNav />
            </div>
        </Navbar>
    )
}

export default HomeNav;