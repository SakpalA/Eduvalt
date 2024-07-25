import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import SignUp from './Signup';
import { Link } from 'react-router-dom';
import '../style.css';

const SignupPage = () => {
  const signup = localStorage.getItem("user");
  return (
    <>
      <Breadcrumb />
      {signup ?
        (<div className='signup-div'>
          <h2 className='signup-div-heading'>You already have an account.</h2>
          <Link to='/login'><h5 className='signup-div-link'>Go To Log In Page</h5></Link>
        </div>)
        : (<SignUp />)}
    </>
  )
}

export default SignupPage;