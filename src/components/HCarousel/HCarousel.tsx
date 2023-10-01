import { A11y, Navigation } from 'swiper/modules';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';
import image from '../../../public/Images/image 347.png'
const HCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const imageProps = {
    height: 547,
    src: image,
  };
  return (
    <Swiper
      modules={[Navigation, A11y]}
      navigation
      onSlideChange={({ activeIndex }) => setActiveSlide(activeIndex + 1)}
      className='h-full'
      spaceBetween={30}
      slidesPerView='auto'
      loop
    >
      {[...Array(40)].map((_, index) => (
        <SwiperSlide
          key={index}
          className='rounded-xl'
          style={{
            backgroundImage: `url('/Images/image 347.png')`,
            objectFit: 'cover',
          }}
        >
          {activeSlide === index ? null : (
            <div className='h-full rounded-xl w-full backdrop-blur-sm'></div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HCarousel;
