import React from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

const LoginBtn = () => {
    const loginNavigate = useNavigate();
    const goToLoginPage = () => {
        loginNavigate('/login');
        console.log("login button");
    };

  return (
    <>
        <button type="button" className='login-btn' onClick={goToLoginPage}>Log In</button>
        <button className='try-free-btn' onClick={goToLoginPage}>Try For Free</button>
    </>
  )
}

export default LoginBtn;