import { A11y, Navigation } from 'swiper/modules';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';
import NavButtons from '@/components/HCarousel/NavButtons';

const HCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <Swiper
      modules={[Navigation, A11y]}
      onSlideChange={({ activeIndex }) => setActiveSlide(activeIndex + 1)}
      className='h-full'
      effect='fade'
      fadeEffect={{ crossFade: true }}
      breakpoints={{
        320: { spaceBetween: 5 },
        768: { spaceBetween: 20 },
        1280: { spaceBetween: 40 },
      }}
      slidesPerView='auto'
      loop
    >
      {[...Array(40)].map((_, index) => (
        <SwiperSlide
          key={index}
          style={{
            backgroundImage: `url('/Images/image 347.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          {activeSlide === index ? null : (
            <div className='slide-dev h-full w-full backdrop-blur-sm'></div>
          )}
        </SwiperSlide>
      ))}
      <NavButtons />
    </Swiper>
  );
};
export default HCarousel;
