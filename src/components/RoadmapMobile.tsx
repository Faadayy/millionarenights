import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import { BackIcon, FlagPNG, RoadMapDotsPNG } from '../assets';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface AboutUsProps {
  description: string;
  hr?: boolean;
}

const details = [
  'Creation of the Brand Launch of beta version 1',
  'New Design Creation of the social channels Developments',
  'New Design Release of final version Pr-marketing campaign',
];

const Flag = () => (
  <div
    className='relative inset-0 rounded-[100px] flex-none h-[80px] w-[80px] md:h-[50px] md:w-[50px] 2xl:w-[66px] 2xl:h-[66px] top-5 flex justify-center items-center bg-black z-50'
    style={{
      backgroundImage:
        'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 71.35%, #5318D1 100%)',
      // mixBlendMode: 'screen',
      // filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
    }}
  >
    <img
      src={FlagPNG}
      className='w-[40%]'
      alt='FlagPNG'
    />
  </div>
);

const Card = ({ description, hr = true }: AboutUsProps) => {
  const swiper = useSwiper();

  return (
    <div className='relative mt-16 flex justify-center items-center gap-4'>
      <div className='mt-10  relative flex items-center justify-center '>
        <div className='absolute -mt-3 top-0  bg-[#5318D1] w-[80%] mx-auto h-full md:h-[25px] rounded-t-[15px] 2xl:rounded-t-[30px] z-[-10]' />
        <div className='absolute -mb-3  bottom-0  bg-[#5318D1] w-[80%] mx-auto h-full md:h-[25px] rounded-b-[15px] 2xl:rounded-b-[30px] z-[-10]' />
        <div
          className='p-4 2xl:p-[30px] flex items-center justify-center gap-4 flex-col bg-[#0F0F0F] text-center rounded-[20px] 2xl:rounded-[20px] w-full
            lg:max-w-[334px] lg:h-[140px] md:h-40 h-32 
            md:max-w-[400px]
            sm:max-w-[350px]
            max-w-[300px]
            '
        >
          <p className='text-[#989898] w-full px-5  antialiased text-sm lg:text-base font-light'>
            {description}
          </p>
        </div>

        <div className='absolute -bottom-16'>
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
                    description === item ? 'bg-colorGradiant' : 'bg-[#5318D1]'
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
          </div>{' '}
        </div>
      </div>
      {hr && (
        <div className='hidden 2xl:block absolute -right-28 mt-10 z-[-10]'>
          <img
            src={RoadMapDotsPNG}
            className=''
            alt=''
          />
        </div>
      )}
    </div>
  );
};

const SwiperCard = () => {
  return (
    <Swiper
      cssMode={true}
      // navigation={{

      // }}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className='mySwiper text-black h-full '
    >
      <SwiperSlide>
        <div className='flex flex-col items-center flex-1 h-full'>
          <p className='texttualgradient text-[28px] md:text-[42px] text-3xl xl:text-6xl font-semibold text-center'>
            2018
          </p>
          <Flag />
          <Card description='Creation of the Brand Launch of beta version 1' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex flex-col items-center flex-1'>
          <p className='texttualgradient text-3xl xl:text-6xl font-semibold text-center'>
            2019
          </p>
          <Flag />
          <Card description='New Design Creation of the social channels Developments' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex flex-col items-center flex-1'>
          <p className='texttualgradient text-3xl xl:text-6xl font-semibold text-center'>
            2021
          </p>
          <Flag />
          <Card
            hr={false}
            description='New Design Release of final version Pr-marketing campaign'
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

const RoadmapMobile = () => {
  const RoadmapBubble = (): JSX.Element => {
    return (
      <div className='relative w-full flex flex-col gap-2'>
        <div className='flex flex-row items-stretch justify-between gap-2 2xl:gap-4'>
          <div className='flex flex-col items-center flex-1'>
            <p className='texttualgradient text-3xl xl:text-6xl font-semibold text-center'>
              2018
            </p>
            <Flag />
            <Card description='Creation of the Brand Launch of beta version 1' />
          </div>
          <div className='flex flex-col items-center flex-1'>
            <p className='texttualgradient text-3xl xl:text-6xl font-semibold text-center'>
              2019
            </p>
            <Flag />
            <Card description='New Design Creation of the social channels Developments' />
          </div>
          <div className='flex flex-col items-center flex-1'>
            <p className='texttualgradient text-3xl xl:text-6xl font-semibold text-center'>
              2021
            </p>
            <Flag />
            <Card
              hr={false}
              description='New Design Release of final version Pr-marketing campaign'
            />
          </div>
        </div>

        {/* <hr
          className="absolute top-[45%] left-[15%] h-1 w-[70%] mx-auto
                2xl:left-[15%] 2xl:w-[70%] 2xl:top-[31%]
                xl:left-[18%] xl:w-[64%] xl:top-[30%]
                lg:top-[25%]
                md:left-[19%] md:w-[62%] md:top-[24%]
                hidden md:block

                text-red-900
                "
        /> */}
        <div
          className='absolute top-[45%] left-[15%]  w-[70%] mx-auto
                2xl:left-[15%] 2xl:w-[70%] 2xl:top-[31%]
                xl:left-[18%] xl:w-[64%] xl:top-[30%]
                lg:top-[25%]
                md:left-[19%] md:w-[62%] md:top-[24%]
                hidden md:block
                border 
                border-solid
              border-[#5318D1]
                '
        />
      </div>
    );
  };

  return (
    <div className='w-full sm:mt-20 sm:mb-40'>
      <p className='text-white text-[42px] mb-16 font-normal uppercase text-center'>
        ROAD MAP
      </p>
      <div className='w-full text-white flex justify-center items-center'>
        <div className='hidden w-full max-w-[1920px] px-10 xl:px-32 mx-auto md:flex items-end '>
          <div className='mb-12'>
            <img
              src={BackIcon}
              alt=''
            />
          </div>
          <div className='w-full flex items-center justify-between mx-[59.64px] gap-2 lg:gap-[14px]'>
            <RoadmapBubble />
          </div>
          <div className='rotate-180 mb-12 '>
            <img
              src={BackIcon}
              alt=''
            />
          </div>
        </div>
        <div className='flex w-full max-w-[1920px] px-10 xl:px-32 mx-auto md:hidden items-end h-[450px]  '>
          <SwiperCard />
        </div>
      </div>
    </div>
  );
};

export { RoadmapMobile };
