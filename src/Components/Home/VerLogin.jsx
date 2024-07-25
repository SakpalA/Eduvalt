import React from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

const VerLogin = () => {
    const loginNavigate = useNavigate();
    const goToLoginPage = () => {
        loginNavigate('/login');
        console.log("login button");
    };
  return (
    <>
        <button type="button" className='sign-up' onClick={goToLoginPage}>Log In</button>
        <button className='mobile-try-free' onClick={goToLoginPage}>Try For Free</button>
    </>
  )
}

export default VerLogin;