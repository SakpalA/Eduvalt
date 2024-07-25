import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';


const VerLogOut = () => {
    const logoutNavigate = useNavigate();
    const profile = useNavigate();

    const handleLogout = () => {
        // Perform logout actions here
        localStorage.removeItem("loggedin");
        logoutNavigate("/");
    };

    const handleProfile = () => {
        profile('/profile');
    }
    return (
        <>
            <button className='ver-logout-btn' onClick={handleLogout}>Log Out</button>
            <button onClick={handleProfile} className='profile-btn'>Profile</button>
        </>
    )
}

export default VerLogOut;