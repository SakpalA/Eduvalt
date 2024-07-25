import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { CiShoppingCart } from "react-icons/ci";
import '../style.css';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <>
            <Breadcrumb />
            <div className='cart-div-wrap'>
                <div className='empty-cart-div'>
                    <CiShoppingCart className='empty-cart' />
                    <h4 className='empty-cart-head'>Your cart is currently empty.</h4>
                </div>
                <Link to='/'><button className='empty-cart-btn'>Return to Home page</button></Link>
            </div>
        </>
    )
};

export default Cart;