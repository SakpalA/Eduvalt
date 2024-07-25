import React from 'react';
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import './navbar.css';


const LogoutBtn = ({activePage, handleClick}) => {
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
      <CgProfile onClick={handleProfile} 
      className='profile-icon' 
      style={{ color: activePage === 'courses' ? '#1363df' : '#082a5e' }} />
      <button className='logout-btn' onClick={handleLogout}>Log Out</button>

    </>
  )
}

export default LogoutBtn;