import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Login from './Login';
import { Link } from 'react-router-dom';
import "../style.css";

const LoginPage = () => {
    const loggedin = localStorage.getItem("loggedin");

    return (
        <>
            <Breadcrumb />
            {loggedin ? (
                <div className='signup-div'>
                    <h2 className='signup-div-heading'>You have already logged in.</h2>
                    <Link to="/"><h5 className='signup-div-link'>Go To Home</h5></Link>
                </div>)
                : (<Login />)}
        </>
    )
}

export default LoginPage;