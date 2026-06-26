import React from 'react'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductItem from '../ProductItem/ProductItem';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from '@mui/material/Button';
import Products from '../../Products';
const RelatedProduct = ({ id }) => {
    const product = Products.find(item =>
        item.id === Number(id)
    )
    const relatedProducts = Products.filter(item => product ? (item.category === product.category && item.id !== product.id) : Products);
    return (
        <section className='related-product !bg-white pb-3 pt-4 lg:pt-8'>
            <div className='container'>
                <div className='flex justify-between items-center mb-6'>
                    <h2 className='text-[14px] sm:text-[22px] font-bold text-black'>
                        Related Products
                    </h2>
                </div>
            </div>
            <div className='container'>
                <div className='relative popular-product-slider my-5 '>
                    <div className="swiper-btn-next flex justify-center items-center w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] absolute top-1/2 left-12 z-10 -translate-y-1/2">
                        <RiArrowLeftSLine className="text-black text-[30px] sm:text-[50px] cursor-pointer custom-related-prev  transition" />
                    </div>
                    <div className="swiper-btn-prev flex justify-center items-center w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] absolute top-1/2 right-12 z-10 -translate-y-1/2">
                        <RiArrowRightSLine className="text-black text-[30px] sm:text-[50px] cursor-pointer custom-related-next  transition" />
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar]}
                        slidesPerView={6}
                        spaceBetween={8}
                        navigation={{
                            nextEl: '.custom-related-next',
                            prevEl: '.custom-related-prev'
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
                            const nextBtn = document.querySelector('.custom-related-next');
                            const prevBtn = document.querySelector('.custom-related-prev');
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

                        {
                            relatedProducts.length > 0 && relatedProducts.map((product, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <ProductItem key={index} imgs={product.imgs} id={product.id} regular_price={product.regular_price} sale_price={product.sale_price} />
                                    </SwiperSlide>
                                );
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default RelatedProduct