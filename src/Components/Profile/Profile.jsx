import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const Profile = () => {
  const userName = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Breadcrumb />
      <div className='profile-div'>
        <h1>Profile</h1>
        <h3>Hello! </h3>
        <p>{userName.firstName} {userName.lastName}</p>
      </div>
    </>
  )
}

export default Profile;