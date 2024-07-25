import React from 'react';
import './footer.css';
import ScrollTopBtn from '../Home/ScrollTopBtn';

const CopyRight = () => {
    return (
        <div className='copy-right'>
            <div className="copy-right-text">
                <p>Copyright © 2024 eduvalt. All rights reserved.</p>
            </div>
            <div className="copy-right-menu">
                <ul>
                    <li className='no-dot'>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
                <ScrollTopBtn />
            </div>
        </div>
    )
}

export default CopyRight;