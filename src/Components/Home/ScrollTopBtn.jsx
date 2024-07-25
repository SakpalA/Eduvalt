import React from 'react';
import { IoIosArrowUp } from "react-icons/io";
import '../Footer/footer.css';

const ScrollTopBtn = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  return (
    <>
        <button className='scroll-up' onClick={scrollToTop}><IoIosArrowUp /></button>
    </>
  )
}

export default ScrollTopBtn;