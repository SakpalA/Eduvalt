import React, { useState } from 'react';
import './course.css';
import { FaCheckCircle } from "react-icons/fa";

const ShowMoreLess = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (

        <>
            <div style={{ maxHeight: expanded ? 'none' : '150px', overflow: 'hidden' }} className='show-content'>
                <p>
                    <strong>Are you new to PHP or need a refresher?</strong>&nbsp;Then this course will help you get all the fundamentals of Procedural PHP, Object Oriented PHP, MYSQLi and ending the course by building a CMS system similar to WordPress, Joomla or Drupal. <br /> <strong>Knowing PHP has allowed me to make enough money to stay home and make courses like this one for students all over the world.</strong> Being a PHP developer can allow anyone to make really good money online and offline, developing dynamic applications. <br />Knowing&nbsp;<strong>PHP&nbsp;</strong>will allow you to build web applications, websites or Content Management systems, like WordPress, Facebook, Twitter or even Google.<br /><strong>Why?</strong><br />
                    Because Millions of websites and applications (the majority) use PHP. You can find a job anywhere or even work on your own, online and in places like freelancer or Odesk. You can definitely make a substantial income once you learn it.<br /><strong>I will not bore you 🙂</strong><br />
                    I take my courses very seriously but at the same time I try to make it fun since I know how difficult learning from an instructor with a monotone voice or boring attitude is. This course is fun, and when you need some energy to keep going, you will get it from me.<br /><strong>My Approach</strong> <br />
                    Practice, practice and more practice. Every section inside this course has a practice lecture at the end, reinforcing everything with went over in the lectures. I also created a small application the you will be able to download to help you practice PHP. To top it off, we will build and awesome CMS like WordPress, Joomla or Drupal.
                </p>
            </div>
            {!expanded && <button onClick={toggleExpanded} className='show-btn'>+ Show more</button>}
            {expanded && <button onClick={toggleExpanded} className='show-btn'>- Show less</button>}

            <div className="tab-detail">
                <h4>What Will You Learn?</h4>
                <hr />
                <ul>
                    <li><FaCheckCircle style={{color: '#1363df'}}/><span>Understand the fundamentals of healthy dieting (calories, protein, carbs, fat, vitamins &amp; minerals)</span></li>
                    <li><FaCheckCircle style={{color: '#1363df'}}/><span>Create a diet that is perfect for your needs and lifestyle</span></li>
                    <li><FaCheckCircle style={{color: '#1363df'}}/><span>Learn when, what and how much you should eat for optimal body composition</span></li>
                    <li><FaCheckCircle style={{color: '#1363df'}}/><span>Build more muscle by optimizing your meal plan</span></li>
                    <li><FaCheckCircle style={{color: '#1363df'}}/><span>Lose fat faster by optimizing your meal plan</span></li>
                    <li><FaCheckCircle style={{color: '#1363df'}}/><span>Improve immunity and energy levels with the right vitamins and minerals</span></li>
                </ul>
            </div>
        </>
    );
};

export default ShowMoreLess;
