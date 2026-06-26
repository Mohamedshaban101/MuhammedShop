import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import BannerBox from '../BannerBox/BannerBox';
const HomeSlider2 = () => {
    return (
        <div className='home-slider2 bg-white'>
            <div data-aos='zoom-in' data-aos-delay='50' className='container xl:w-[90%] sm:w-[95%] h-[300px] sm:h-[500px] flex gap-[20px]'>
                <div className='lg:w-[75%] w-[100%] h-[300px] sm:h-[400px] md:h-[450px] relative overflow-hidden rounded-lg'>
                    <div className="swiper-btn-next flex justify-center items-center w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] absolute top-1/2 left-12 z-10 -translate-y-1/2">
                        <RiArrowLeftSLine className="text-black text-[30px] sm:text-[50px] cursor-pointer custom-prev-slider2 transition" />
                    </div>
                    <div className="swiper-btn-prev flex justify-center items-center w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] absolute top-1/2 right-12 z-10 -translate-y-1/2">
                        <RiArrowRightSLine className="text-black text-[30px] sm:text-[50px] cursor-pointer custom-next-slider2 transition" />
                    </div>
                    <Swiper
                        spaceBetween={30}
                        navigation={{
                            nextEl: '.custom-next-slider2',
                            prevEl: '.custom-prev-slider2'
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation, Pagination]}
                        onSlideChange={(swiper) => {
                            const nextBtn = document.querySelector('.custom-next-slider2');
                            const prevBtn = document.querySelector('.custom-prev-slider2');
                            const swiperBtnNext = document.querySelector('.swiper-btn-next');
                            const swiperBtnPrev = document.querySelector('.swiper-btn-prev');
                            if (swiper.isBeginning) {
                                prevBtn.style.opacity = '.3';
                                prevBtn.style.cursor = 'context-menu';
                            } else {
                                prevBtn.style.opacity = '1';
                                prevBtn.style.cursor = 'pointer';
                            }
                            if (swiper.isEnd) {
                                nextBtn.style.opacity = '.3';
                                nextBtn.style.cursor = 'context-menu';
                            } else {
                                nextBtn.style.opacity = '1';
                                nextBtn.style.cursor = 'pointer';
                            }
                        }}
                        className='sm:h-[450px] h-[300px]'
                    >
                        <SwiperSlide className='pointer-events-auto'>
                            <div className='item relative w-full overflow-hidden sm:h-[450px] h-[300px]'>
                                <img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782411502/banner_7_v9wilm.jpg'} className='w-full h-full' />
                                <div className='info absolute w-[60%] sm:w-[50%] top-0 right-0 flex justify-center items-center  p-8 flex-col z-[100] duration-700 transition-all'>
                                    <h4 className='relative text-[14px] md:text-[20px] font-[500] mb-2 w-full -right-[100%] opacity-0'>Big saving days sale</h4>
                                    <h2 className='relative text-[13px] sm:text-[20px] xl:text-[30px] font-bold w-full mb-4 -right-[100%] opacity-0'>Buy New Trend Women Black Cotton Blend Top | top for women | women top...</h2>
                                    <h3 className='relative text-[12px] sm:text-[15px] lg:text-[20px]  font-500 w-full flex gap-4 items-center mb-6 -right-[100%] opacity-0'>Starting At Only <span className='price text-[12px] sm:text-[15px] xl:text-[20px] text-primary font-bold'>$1,550.00</span></h3>
                                    <div className='relative w-full z-50 -bottom-[300px]'>
                                        <Link to={'/product-list'}>
                                            <Button onClick={(e) => e.stopPropagation()} className='!bg-primary !text-[8px] sm:!text-[16px]' variant='contained'>SHOP NOW</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='pointer-events-auto'>
                            <div className='item relative w-full overflow-hidden sm:h-[450px] h-[300px]'>
                                <img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782411491/banner_6_ydhueo.jpg'} className='w-full h-full' />
                                <div className='info absolute w-[60%] sm:w-[50%] top-0 right-0 flex justify-center items-center  p-8 flex-col z-[100] duration-700 transition-all'>
                                    <h4 className='relative text-[14px] md:text-[20px] font-[500] mb-2 w-full -right-[100%] opacity-0'>Big saving days sale</h4>
                                    <h2 className='relative text-[13px] sm:text-[20px] xl:text-[30px] font-bold w-full mb-4 -right-[100%] opacity-0'>Buy New Trend Women Black Cotton Blend Top | top for women | women top...</h2>
                                    <h3 className='relative text-[12px] sm:text-[15px] lg:text-[20px]  font-500 w-full flex gap-4 items-center mb-6 -right-[100%] opacity-0'>Starting At Only <span className='price text-[12px] sm:text-[15px] xl:text-[20px] text-primary font-bold'>$1,550.00</span></h3>
                                    <div className='relative w-full z-50 -bottom-[300px]'>
                                        <Link to={'/product-list'}>
                                            <Button className='!bg-primary !cursor-pointer !text-[8px] sm:!text-[16px]' variant='contained'>SHOP NOW</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='lg:w-[25%] hidden lg:flex overflow-hidden flex-col justify-between h-[450px] gap-[20px]'>
                    <BannerBox bannerBox={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782411021/banner-box-1_bg9c3w.jpg'} category={'fashion'} fade='fade-left' delay='50' />
                    <BannerBox bannerBox={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782411021/banner-box-2_rbsoa4.jpg'} category={'footwear'} fade='fade-left' delay='100' />
                </div>
            </div>
        </div>
    )
}

export default HomeSlider2