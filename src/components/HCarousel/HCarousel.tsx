import { A11y, Navigation, Pagination } from 'swiper/modules';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';

const HCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const imageProps = {
    height: 547,
    src: 'https://picsum.photos/797/547',
  };
  return (
    <Swiper
      modules={[Navigation, A11y]}
      navigation
      onSlideChange={({ activeIndex }) => setActiveSlide(activeIndex + 1)}
      className='h-full'
      spaceBetween={10}
      slidesPerView='auto'
      loop
    >
      {[...Array(40)].map((_, index) => (
        <SwiperSlide
          key={index}
          className='rounded'
          style={{
            backgroundImage: `url(${imageProps.src})`,
            objectFit: 'cover',
          }}
        >
          {activeSlide === index ? null : (
            <div className='h-full w-full backdrop-blur-sm'></div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HCarousel;
