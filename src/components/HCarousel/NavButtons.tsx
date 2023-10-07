import React from 'react';
import { useSwiper } from 'swiper/react';

const NavButtons = () => {
  const commonCss = {
    navBtn:
      'absolute top-1/2 z-10 flex h-[28px] w-[28px] -translate-y-1/2 transform items-center justify-center rounded-[4px] bg-brand text-brand  md:h-[60px] md:w-[60px]  md:rounded-[8px]',
    svg: 'h-1/2 md:h-auto',
  };
  const swiper = useSwiper();
  return (
    <div>
      <button
        className={'left-4  md:left-24 ' + commonCss.navBtn}
        onClick={() => swiper.slidePrev()}
      >
        <Svg className={'rotate-180 ' + commonCss.svg} />
      </button>
      <button
        className={'right-4 md:right-24 ' + commonCss.navBtn}
        onClick={() => swiper.slideNext()}
      >
        <Svg className={commonCss.svg} />
      </button>
    </div>
  );
};

export default NavButtons;

const Svg = ({ className = '' }: { className: string }) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='12'
      height='27'
      viewBox='0 0 12 27'
      fill='none'
    >
      <path
        d='M0.999998 1.08008L5.40742 5.44835C8.92226 8.93196 10.6797 10.6738 10.9503 12.7967C11.0166 13.3169 11.0166 13.8433 10.9503 14.3634C10.6797 16.4864 8.92226 18.2282 5.40742 21.7118L1 26.0801'
        stroke='#FEF8F6'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  );
};
