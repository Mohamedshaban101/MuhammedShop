import React, { useContext } from 'react'
import { Button } from '@mui/material';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import ProductItem from '../ProductItem/ProductItem';
import { Link } from 'react-router-dom';
import Products from '../../Products';
import { ContextSlidesPerView } from '../../Context/ContextSlidesPerView';
const GroceriesProduct = () => {
    const { getSlidesPerView } = useContext(ContextSlidesPerView);
    const filteredProducts = Products.filter(product => {
        return product.category === 'groc';
    })
    const showNavigation = filteredProducts.length > getSlidesPerView();
    return (
        <div className='section-groceries py-2 sm:py-5 bg-white'>
            <div className="container">
                <div className='flex justify-between items-centetr mb-6'>
                    <h2 className='text-[14px] sm:text-[22px] text-black font-bold'>Groceries Products</h2>
                    <Link to={'/product-list'} state={{ category: 'groc' }}>
                        <Button variant='contained' className='!text-[10px] sm:!text-[14px] !bg-gray-100 hover:!bg-gray-200 !text-gray-800 !shadow-none !capitalize !border-[1px] !border-[rgba(0,0,0,0.4)]' endIcon={<FaLongArrowAltRight className='!text-[12px] sm:!text-[20px]' />}>View All</Button>
                    </Link>
                </div>
                <div className='relative groceries-product-slider my-5 '>
                    {
                        showNavigation ?
                            <>
                                <div className="swiper-btn-next flex justify-center items-center w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] absolute top-1/2 left-12 z-10 -translate-y-1/2">
                                    <RiArrowLeftSLine className="text-black text-[30px] sm:text-[50px] cursor-pointer custom-groceries-prev transition" />
                                </div>
                                <div className="swiper-btn-prev flex justify-center items-center w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] absolute top-1/2 right-12 z-10 -translate-y-1/2">
                                    <RiArrowRightSLine className="text-black text-[30px] sm:text-[50px] cursor-pointer custom-groceries-next transition" />
                                </div>
                            </> : ''
                    }
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar]}
                        slidesPerView={6}
                        spaceBetween={8}
                        navigation={
                            showNavigation ?
                                {
                                    nextEl: '.custom-groceries-next',
                                    prevEl: '.custom-groceries-prev'
                                } : false
                        }
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
                            const nextBtn = document.querySelector('.custom-groceries-next');
                            const prevBtn = document.querySelector('.custom-groceries-prev');
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
                            filteredProducts.map((product, index) => {
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
        </div>
    )
}

export default GroceriesProduct