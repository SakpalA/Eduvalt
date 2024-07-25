import React from 'react';
import '../style.css';
import image1 from '../Assets/cta_shape001.png';
import image2 from '../Assets/cta_shape002.png';
import image3 from '../Assets/cta_shape003.png'

const AboutOffer = () => {
  return (
    <div className='about-offer'>
        <div className="about-div">
            <img src={image1} alt="" className='offer-img1'/>
            <img src={image2} alt="" className='offer-img2'/>
            <p className='offer-text'>ARE YOU READY FOR THIS OFFER</p>
            <h2 className='offer-title'>50%  Offer For Very First 50</h2>
            <h5 className='offer-sub-title'>Student's & Mentors</h5>
            <button className='offer-btn'>BECOME A STUDENT</button>
            <img src={image3} alt="" className='offer-img3'/>
        </div>
    </div>
  )
}

export default AboutOffer;