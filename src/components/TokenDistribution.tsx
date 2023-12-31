import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import {
  BackIcon,
  AppLogo_PNG,
  FlowChartPNG,
  HorizontalLinesPNG,
} from '../assets';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TokenDistributionProps {
  icon: string;
  title: string;
  subtitle: string;
}
const TokenDistribution = () => {
  const details = [
    {
      icon: AppLogo_PNG,
      title: 'BEP - 20',
      subtitle: 'BSC token',
    },
    {
      icon: AppLogo_PNG,
      title: '20 MILLION',
      subtitle: 'Total supply',
    },
    {
      icon: AppLogo_PNG,
      title: '1 token = ',
      subtitle: '1 USD',
    },
    {
      icon: AppLogo_PNG,
      title: 'MillionaireNights',
      subtitle: 'Stock token',
    },
  ];

  const SingleCard = ({
    icon,
    title,
    subtitle,
  }: TokenDistributionProps): JSX.Element => {
    const swiper = useSwiper();
    return (
      <div className='relative  flex flex-col text-white bg-[#0F0F0F] w-[320px] justify-center items-center   h-[320px] rounded-[50px] gap-8'>
        <div className='absolute  bg-[#5318D1] w-full  max-w-[200px]  h-[40px] -top-4 rounded-[50px] z-[-10]' />
        <div className='absolute flex md:hidden  bg-[#5318D1] w-full  max-w-[200px]  h-[40px] -bottom-4 rounded-[50px] z-[-10]' />
        <div
          className=' inset-0  md:p-4 rounded-[100px] w-[69px] h-[69px] top-10 flex justify-center items-center'
          style={{
            backgroundImage:
              'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 71.35%, #5318D1 100%)',
            mixBlendMode: 'screen',
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
          }}
        >
          <img
            src={icon}
            className='w-[100%] h-[100%]'
            alt=''
          />
        </div>
        <div className='flex justify-center  items-center flex-col gap-3 '>
          <p
            className={`texttualgradient leading-[150%] text-[${
              title.includes('MillionaireNights') ? '28px' : '42px'
            }] font-semibold antialiased`}
          >
            {title}
          </p>
          <p className='-mt-4 text-lg md:text-2xl font-light text-[#fff]'>
            {subtitle}
          </p>
        </div>
        <div className='flex md:hidden  items-center justify-between '>
          <button
            className='w-24 flex'
            onClick={(event) => {
              swiper.slidePrev();
              event.preventDefault();
            }}
          >
            <img
              src={BackIcon}
              className='w-[100%]'
              alt=''
            />
          </button>
          <div className='w-full flex gap-2 justify-center'>
            {details.map((item, index) => (
              <div
                key={index}
                className={`w-3 h-3 ${
                  title === item.title ? 'bg-colorGradiant' : 'bg-[#5318D1]'
                } rounded-full`}
              />
            ))}
          </div>
          <button
            className='rotate-180 w-24 '
            onClick={(event) => {
              swiper.slideNext();
              event.preventDefault();
            }}
          >
            <img
              src={BackIcon}
              className='w-[100%]'
              alt=''
            />
          </button>
        </div>
      </div>
    );
  };

  const SwiperCard = () => (
    <Swiper
      cssMode={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className='mySwiper text-black h-full'
    >
      {details.map((item, index) => (
        <SwiperSlide
          key={index}
          className=''
        >
          <div className='flex flex-col items-center justify-center flex-1 h-full '>
            <SingleCard
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <div className='mt-16 mb-24'>
      <div className='text-white flex flex-col justify-center items-center'>
        <div>
          <p className='text-center text-[24px] md:text-[42px]  font-normal uppercase md:mb-10'>
            TOKEN DISTRIBUTION
          </p>
          <div className=' flex flex-col items-center justify-center gap-1 lg:gap-5'>
            <img
              src={HorizontalLinesPNG}
              className='mt-[1px] mx-auto w-[90%] '
              alt=''
            />
            <div className='flex items-center justify-center flex-col gap-1 lg:flex-row lg:gap-5'>
              <p className='text-sm lg:text-base flex  font-light  flex-wrap justify-center'>
                Contract:
              </p>
              <p
                className='text-sm overflow-wrap px-3 lg:text-base font-semibold text-center'
                style={{ overflowWrap: 'anywhere' }}
              >
                0x5e9b7100ef06d4d1f1f187c7c6b169e376044307BEP20
              </p>
              <p className='text-sm lg:text-base flex  font-light  flex-wrap justify-center text-center'>
                (BSC Smart Chain)
              </p>
            </div>
            <img
              src={HorizontalLinesPNG}
              className='w-[90%] '
              alt=''
            />
          </div>
        </div>
        <div className='hidden md:grid mt-16  2xl:grid-cols-4 grid-flow-row gap-8 mx-auto grid-cols-2'>
          {details.map((item, index) => (
            <SingleCard
              key={index}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
        <div className='flex w-[330px] mx-auto md:hidden items-center justify-center h-[450px]   '>
          <SwiperCard />
        </div>
      </div>
      <div className='text-white mt-28 mb-16 flex items-center justify-center'>
        <img
          src={FlowChartPNG}
          className='
                w-[300px]
                sm:w-[520px]
                md:w-[627px] 
                xl:w-[750px] 
                '
          alt=''
        />
      </div>
    </div>
  );
};

export { TokenDistribution };
