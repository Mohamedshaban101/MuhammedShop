import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
const HomeSlider1 = () => {
    return (
        <div className='home-slider1 relative mt-[10px] sm:mt-[30px] mb-[40px] mx-auto h-[200px] sm:h-[400px] w-[100%]'>
            <div className="swiper-btn-next flex justify-center items-center w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] absolute top-1/2 left-12 z-10 -translate-y-1/2">
                <RiArrowLeftSLine  className="text-black text-[30px] sm:text-[50px] cursor-pointer swiper-prev hover:text-white transition" />
            </div>
            <div className="swiper-btn-prev flex justify-center items-center w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] absolute top-1/2 right-12 z-10 -translate-y-1/2">
                <RiArrowRightSLine  className="text-black text-[30px] sm:text-[50px] cursor-pointer swiper-next hover:text-white transition" />
            </div>
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                navigation={{
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev'
                }}
                className='!overflow-[inherit] h-[200px] sm:h-[400px]'
            >
                <SwiperSlide>
                    <div className='content w-[100%] rounded-[20px] h-[200px] sm:h-[400px] overflow-inherit'>
                        <img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782411767/banner_3_pinxfs.jpg'} className='w-full h-full' alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='content w-[95%] rounded-[20px] h-[200px] sm:h-[400px] overflow-inherit'>
                        <img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782411767/banner_2_zqraww.jpg'} className='w-[100%] h-full' alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='content w-[95%] rounded-[20px] h-[200px] sm:h-[400px] overflow-inherit'>
                        <img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782411966/banner_4_kdbofo.jpg'} className='w-[100%] h-full' alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='content w-[95%] rounded-[20px] h-[200px] sm:h-[400px] overflow-inherit'>
                        <img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782412119/banner_1_mgpjxb.jpg'} className='w-[100%] h-full' alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HomeSlider1