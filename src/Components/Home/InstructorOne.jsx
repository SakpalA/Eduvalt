import React from 'react';
import '../style.css';
import girl_instructor from '../Assets/about_img02.png';
import boy_instructor from '../Assets/about_img01.png';
import dot from '../Assets/about_dots.png';
import { MdOutlineSupportAgent } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { FaGraduationCap } from "react-icons/fa6";
import { BiSolidVideos } from "react-icons/bi";

const InstructorOne = () => {
    return (
        <div className='instructor-one'>
            <div className="instructor1-image">
                <img src={girl_instructor} alt="Girl" className='girl-inst'/>
                <img src={boy_instructor} alt="Boy" className='boy-inst'/>
                <div className="about-exp">
                    <h4 className='inst-count'>12 +</h4>
                    <p className='inst-exp'>Years of Experience</p>
                </div>
                <img src={dot} alt="Dot" className='dot-img'/>
            </div>
            <div className="instructor1-info">
                <div className="section-title">
                    <span className='inst-sub-title'>Get To Know About Us</span>
                    <h2 className='inst-title'>Discover Top <span>Instructors</span> Around The World</h2>
                    <p className='inst-text'>Borem ipsum dolor sit amet, consectetur adipiscing eliawe awUt elit ellus, luctus nec ullamcorper mattisBorem ipsum dolor awes atnse awctetur adipis we followelit. Borem.</p>
                </div>
                <div className="about-info-list">
                    <div className="info-div">
                        <MdOutlineSupportAgent className='instcon inst-one'/>
                        <p className='inst-info'>20000 <br /> Expert Tutor</p>
                    </div>
                    <div className="info-div">
                        <CgNotes className='instcon inst-two'/>
                        <p className='inst-info'>1500 <br />Top Lessons </p>
                    </div>
                    <div className="info-div">
                        <FaGraduationCap className='instcon inst-three'/>
                        <p className='inst-info'>18000 <br />Over Students </p>
                    </div>
                    <div className="info-div">
                        <BiSolidVideos className='instcon inst-four'/>
                        <p className='inst-info'>3200 <br /> Pro Videos </p>
                    </div>
                </div>
                <button className='inst-btn'>DISCOVER MORE</button>
            </div>
        </div>
    )
}

export default InstructorOne;