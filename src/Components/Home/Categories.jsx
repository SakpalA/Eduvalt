import React from 'react';
import '../style.css';
import wave from '../Assets/categories_shape03.png';
import star from '../Assets/categories_shape04.png';
import spiner from '../Assets/categories_shape01.png';
import { SiAltiumdesigner } from "react-icons/si";
import { SlEnvolopeLetter } from "react-icons/sl";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbMathSymbols } from "react-icons/tb";
import { GrBusinessService } from "react-icons/gr";


const Categories = () => {
    return (
        <div className='categories'>
            <div className="category-info">
                <img src={spiner} alt="Spiner" className='spiner'/>
                <span className='inst-sub-title'>Unique online courses</span>
                <h2 className='inst-title'>Browse By<span> Categories</span></h2>
                <p className='inst-text'>Borem ipsum dolor sit amet, consectetur adipiscing eliawe awUt elit ellus, luctus nec ullamcorper mattisBorem ipsum dolor awes atnse awctetur adipis we followelit. Borem.</p>
                <button className='inst-btn'>ALL CATEGORIES</button>
            </div>
            <div className="category-box">
                <div className='cat-box-one cat-box-pos'>
                    <img src={wave} alt="Wave" className='wave'/>
                    <div className="cat-box">
                        <div className='cat-icon'>
                            <SiAltiumdesigner />
                        </div>
                        <h6>3D Animation</h6>
                        <span>06 Courses</span>
                    </div>
                    <div className="cat-box">
                        <div className='cat-icon'>
                            <SlEnvolopeLetter />
                        </div>
                        <h6>Marketing</h6>
                        <span>09 Courses</span>
                    </div>
                    <img src={star} alt="Star" className='star'/>
                </div>
                <div className="cat-box-one">
                    <div className="cat-box">
                        <div className='cat-icon'>
                            <BsGraphUpArrow />
                        </div>
                        <h6>Finance</h6>
                        <span>08 Courses</span>
                    </div>
                    <div className="cat-box">
                        <div className='cat-icon'>
                            <TbMathSymbols />
                        </div>
                        <h6>Algebra</h6>
                        <span>13 Courses</span>
                    </div>
                    <div className="cat-box">
                        <div className='cat-icon'>
                            <GrBusinessService />
                        </div>
                        <h6>Business</h6>
                        <span>05 Courses</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;