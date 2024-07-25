import React from 'react';
import '../style.css';
import brand1 from '../Assets/brand01.png';
import brand2 from '../Assets/brand02.png';
import brand3 from '../Assets/brand03.png';
import brand4 from '../Assets/brand04.png';
import brand5 from '../Assets/brand05.png';
import brand6 from '../Assets/brand06.png';
import brand7 from '../Assets/brand07.png';

const Brand = () => {
    
  return (
    <div className='brand-slider' id='image-container'>
        <img src={brand1} alt="Brand1" className='brand brand1'/>
        <img src={brand2} alt="Brand2" className='brand brand2'/>
        <img src={brand3} alt="Brand3" className='brand brand3'/>
        <img src={brand4} alt="Brand4" className='brand brand4'/>
        <img src={brand5} alt="Brand5" className='brand brand5'/>
        <img src={brand6} alt="Brand6" className='brand brand6'/>
        <img src={brand7} alt="Brand7" className='brand brand7'/>
    </div>
  )
}

export default Brand;