import React from 'react';
import Banner from './Banner';
import Brand from './Brand';
import InstructorOne from './InstructorOne';
import Categories from './Categories';
import Testimonial from './Testimonial';
import InstructorTwo from './InstructorTwo';
import CtaWrap from './CtaWrap';
import Newsletters from './Newsletters';
import FeaturedCourse from './FeaturedCourse';
import FblogWrap from './FblogWrap';

const Home = () => {
  return (
    <>
        <Banner />
        <Brand />
        <InstructorOne />
        <FeaturedCourse />
        <Categories />
        <Testimonial />
        <InstructorTwo />
        <CtaWrap />
        <FblogWrap />
        <Newsletters />
    </>
  )
}

export default Home;