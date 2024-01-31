'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

const imageList = [
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-2.jpg',
  'https://swiperjs.com/demos/images/nature-3.jpg',
  'https://swiperjs.com/demos/images/nature-4.jpg',
  'https://swiperjs.com/demos/images/nature-5.jpg',
  'https://swiperjs.com/demos/images/nature-6.jpg',
  'https://swiperjs.com/demos/images/nature-7.jpg',
  'https://swiperjs.com/demos/images/nature-8.jpg',
  'https://swiperjs.com/demos/images/nature-9.jpg',
  'https://swiperjs.com/demos/images/nature-10.jpg',
];

// import required modules
import Image from 'next/image';
import { FreeMode, Pagination } from 'swiper/modules';
import { NavButtons } from '../CarouselNavButton';

export const SimilarProductCarousel = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='mySwiper3'
    >
      {imageList.map((item, index) => {
        return (
          <SwiperSlide
            key={index}
            onClick={() => console.log('This is Logged')}
          >
            <Image src={item} width={100} height={100} alt='Similar Image' />
          </SwiperSlide>
        );
      })}
      <NavButtons />
    </Swiper>
  );
};
