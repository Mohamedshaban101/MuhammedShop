import React from 'react'
import { Button } from '@mui/material';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import ProductItem from '../ProductItem/ProductItem';
import BannerBox2 from '../BannerBox2/BannerBox2';
import Products from '../../Products';
import { Link } from 'react-router-dom';
const FeaturedProduct = () => {
    const randomProducts = [...Products].sort(() => Math.random() - 0.5);
    return (
        <div className='section-featured py-2 sm:py-5 bg-white'>
            <div className="container">
                <div className='flex justify-between items-centetr mb-6'>
                    <h2 className='text-[14px] sm:text-[22px] text-black font-bold'>Featured Products</h2>
                    <Link to={'/product-list'} state={{ category: 'elec' }}>
                        <Button variant='contained' className='!text-[10px] sm:!text-[14px] !bg-gray-100 hover:!bg-gray-200 !text-gray-800 !shadow-none !capitalize !border-[1px] !border-[rgba(0,0,0,0.4)]' endIcon={<FaLongArrowAltRight className='!text-[12px] sm:!text-[20px]' />}>View All</Button>
                    </Link>
                </div>
                <div className='relative featured-product-slider my-5'>
                    <div className="swiper-btn-next flex justify-center items-center w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] absolute top-1/2 left-12 z-10 -translate-y-1/2">
                        <RiArrowLeftSLine className="text-black text-[30px] sm:text-[50px] cursor-pointer custom-featured-prev transition" />
                    </div>
                    <div className="swiper-btn-prev flex justify-center items-center w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] absolute top-1/2 right-12 z-10 -translate-y-1/2">
                        <RiArrowRightSLine className="text-black text-[30px] sm:text-[50px] cursor-pointer custom-featured-next transition" />
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar]}
                        slidesPerView={6}
                        spaceBetween={8}
                        navigation={{
                            nextEl: '.custom-featured-next',
                            prevEl: '.custom-featured-prev'
                        }}
                        breakpoints={{
                            1400: {
                                slidesPerView: 6,
                                spaceBetween: 8
                            },
                            1300: {
                                slidesPerView: 5,
                                spaceBetween: 8
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 8
                            },
                            992: {
                                slidesPerView: 4
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 9
                            },
                            576: {
                                slidesPerView: 2,
                                spaceBetween: 9
                            },
                            200: {
                                slidesPerView: 1,
                                spaceBetween: 9
                            }
                        }}
                        onSlideChange={(swiper) => {
                            const nextBtn = document.querySelector('.custom-featured-next');
                            const prevBtn = document.querySelector('.custom-featured-prev');
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
                        className='mySwiper'
                    >
                        {
                            randomProducts.map((product, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <ProductItem key={index} imgs={product.imgs} rating={product.rating} id={product.id} regular_price={product.regular_price} sale_price={product.sale_price} />
                                    </SwiperSlide>
                                );
                            })
                        }
                    </Swiper>
                </div>
            </div>
            <div className='container'>
                <div className='relative my-5'>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar]}
                        slidesPerView={6}
                        spaceBetween={8}
                        breakpoints={{
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 8
                            },
                            992: {
                                slidesPerView: 3
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 9
                            },
                            576: {
                                slidesPerView: 1,
                                spaceBetween: 9
                            },
                            200: {
                                slidesPerView: 1,
                                spaceBetween: 9
                            }
                        }}
                        onSlideChange={(swiper) => {
                            const nextBtn = document.querySelector('.custom-next');
                            const prevBtn = document.querySelector('.custom-prev');
                            const swiperBtnNext = document.querySelector('.swiper-btn-next');
                            const swiperBtnPrev = document.querySelector('.swiper-btn-prev');
                            if (swiper.isBeginning) {
                                prevBtn.style.opacity = '.3';
                                prevBtn.style.cursor = 'context-menu';
                                swiperBtnPrev.classList.add('no-hover');
                            } else {
                                prevBtn.style.opacity = '1';
                                prevBtn.style.cursor = 'pointer';
                                swiperBtnPrev.classList.remove('no-hover');
                            }
                            if (swiper.isEnd) {
                                nextBtn.style.opacity = '.3';
                                nextBtn.style.cursor = 'context-menu';
                                swiperBtnNext.classList.add('no-hover');
                            } else {
                                nextBtn.style.opacity = '1';
                                nextBtn.style.cursor = 'pointer';
                                swiperBtnNext.classList.remove('no-hover');
                            }
                        }}
                        className='mySwiper'
                    >
                        <SwiperSlide>
                            <BannerBox2 bannerBox={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782411586/banner-box-7_c8y5ky.webp'} fade='zoom-in' delay='100' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BannerBox2 bannerBox={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782411586/banner-box-8_rv4ano.webp'} fade='zoom-in' delay='200'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <BannerBox2 bannerBox={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782411586/banner-box-6_hynv2z.webp'} fade='zoom-in' delay='300'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <BannerBox2 bannerBox={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782411586/banner-box-5_ryapuq.webp'} fade='zoom-in' delay='400'/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProduct