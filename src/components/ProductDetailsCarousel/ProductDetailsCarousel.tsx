'use client';

import { useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css';

// 1
// Image List
// https://swiperjs.com/demos/images/nature-1.jpg
// Image List
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

export const ProductDetailsCarousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  //   const thumbSwipeHandler = () => {
  //     setThumbsSwiper(prev => !prev)
  //   }
  console.log('This is ThumbsSwiper', thumbsSwiper);
  return (
    <div className=''>
      <Swiper
        style={{}}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2'
      >
        {imageList.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              {/* <div className='relative h-[400px] w-full'>
                <Image
                  src={item}
                  alt={`Image {index}`}
                  fill
                  // width={200}
                  // height={200}
                  // style={{ width: '100%' }}
                />
              </div> */}
              <img src={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        // @ts-ignore
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'
      >
        {imageList.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
