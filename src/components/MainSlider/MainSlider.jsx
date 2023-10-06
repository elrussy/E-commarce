import React from 'react'
import styles from './MainSlider.module.css';

import mainImg1 from '../../assites/images/slider/1.jpeg';
import mainImg2 from '../../assites/images/slider/2.jpeg';
import mainImg3 from '../../assites/images/slider/3.jpeg';


import blog1 from '../../assites/images/1-img.jpeg';
import blog2 from '../../assites/images/2-img.jpeg';
import Slider from "react-slick";
export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true


  };
  return (
    <div className="container my-5">
      <div className="row gx-0">
        <div className="col-md-9 slider-main">
          <Slider {...settings}>
          <img height={400} src={mainImg1} className='w-100' alt="" />
          <img height={400} src={mainImg2} className='w-100' alt="" />
          <img height={400} src={mainImg3} className='w-100' alt="" />


          </Slider>

        </div>
        <div className="col-md-3">
          <img height={200} src={blog1} className='w-100' alt="" />
          <img height={200} src={blog2} className='w-100' alt="" />
        </div>
      </div>
    </div>
  )
}
