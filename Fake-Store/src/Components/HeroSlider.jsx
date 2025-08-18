import React from 'react'
import Slider from 'react-slick';
import clothes from '../assets/clothes.jpg'
import electronics from '../assets/electronics.jpg'
import furniture from '../assets/furniture.jpg'
import grocery from '../assets/grocery.jpg'

const HeroSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    accessibility: false,
    touchMove: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    adaptiveHeight: false, // fix height so all slides are same
  };

  return (
    <div className="slider-container relative w-full">
      <Slider {...settings}>
        {[clothes, electronics, furniture, grocery].map((img, index) => (
          <div key={index} className='h-[500px]  sm:h-[700px] overflow-hidden'>
            <img 
              src={img} 
              alt={`slide-${index}`} 
              className='w-full h-full object-cover'
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroSlider;
