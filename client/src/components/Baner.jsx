import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image from "../img/sliders-image/Slide.png";
import leftArrow from "../img/icons/leftArrow.png";
import rightArrow from "../img/icons/rightArrow.png";

const Baner = () => {
    function PrevArrow({ onClick }) {
        return (
          <div className="arrow prev" onClick={onClick}>
            <img src={leftArrow} alt='' />
          </div>
        );
      }
    
      function NextArrow({ onClick }) {
        return (
          <div className="arrow next" onClick={onClick}>
            <img src={rightArrow} alt=''/>
          </div>
        );
      }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
      <Slider className='slick-items baner' {...settings}>
        <div>
          <img src={Image} alt='' className='slick-item'/>
        </div>
        <div>
            <img src={Image} alt='' className='slick-item'/>
        </div>
        <div>
            <img src={Image} alt='' className='slick-item'/>
        </div>
      </Slider>
    );
  };
  
  export default Baner;