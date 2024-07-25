import React from 'react';
import '../style.css';
import newsletter from '../Assets/newsletter.png';

const Newsletters = () => {
  return (
    <div className='newsletter'>
        <div className="newsletter-left">
            <img src={newsletter} alt="Newsletter" className='newsletter-image'/>
            <h4 className='newsletter-title'>Let's Join To <br /> Our Newsletters</h4>
        </div>
        <div className="newsletter-right">
            <input type="text" placeholder='Enter Your Email*' className='news-inp'/>
            <button className='news-btn'>SUBSCRIBE NOW</button>
        </div>
    </div>
  )
}

export default Newsletters;