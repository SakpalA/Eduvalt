import React from 'react';
import '../style.css';
import testimonial1 from '../Assets/testimonial01.jpg';
import testimonial2 from '../Assets/testimonial02.jpg';
import { Container, Row, Col } from 'react-bootstrap';
// import redstar from '../Assets/testi_shape01.png';
import bluelines from '../Assets/testi_shape02.png';
import yellowstar from '../Assets/testi_shape03.png';
import quote from '../Assets/quote.png';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const images = [
    testimonial1,
    testimonial2
  ];
  const contents = [
    '“ when an unknown printer took a galley of type and scrambled to make a type specimen book. It has survived not only five centuries, but also the leap into electronic. ”',
    '“ It has survived not only five centuries, but also the leap into electronic. when an unknown printer took a galley of type and scrambled to make a type specimen book.  ”'
  ];
  const names = [
    'Cristina Luwis',
    'Parker Robert'
  ];
  const designations = [
    'Web Developer',
    'Developer'
  ]

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  return (
    <div className='testimonial-section'>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={5}>
            <div className='testimonial-images'>
              {/* <img src={redstar} alt="Red Star" className='red-star' /> */}
              <img src={bluelines} alt="Blue Lines" className='blue-line' />
              {/* Image */}
              <div className='testi-img-div'>
                <img src={images[activeIndex]} alt={`Image ${activeIndex + 1}`} className="testi-image" />
              </div>
              <img src={yellowstar} alt="Yellow Star" className='yellow-star' />
            </div>
          </Col>
          <Col sm={12} md={12} lg={7}>
            <div className="testimonial-content">
              <h2 className='testi-heading'>What Our Students <br /> Say About Us</h2>
              <div className="testi-text">
                <img src={quote} alt="Quote" className='quote-img'/>
                {/* Content */}
                <p className='testi-content'>{contents[activeIndex]}</p>
                <div className="yellow-line"></div>
                <h5 className='testi-name'>{names[activeIndex]}</h5>
                <span className='testi-desig'>{designations[activeIndex]}</span>
              </div>
              <div className="testi-btn-wrap">
                <button className='testi-prev testi-btn' onClick={handlePrev}><IoIosArrowBack /></button>
                <button className='testi-next testi-btn' onClick={handleNext}><IoIosArrowForward /></button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Testimonial;