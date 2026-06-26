import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from '../ProductItem/ProductItem';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Products from '../../Products';
const PopularProduct = () => {
    const [value, setValue] = useState(0);
    const [productType, setProductType] = useState('fashion');
    const categories = [
        'fashion',
        'elec',
        'bags',
        'footwear',
        'groc',
        'beauty',
        'jew'
    ];
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setProductType(categories[newValue]);
    };
    const filteredProducts = Products.filter(product =>
        product.category === productType
    );
    return (
        <div className='section-product py-2 sm:py-5 bg-white'>
            <div className="container">
                <div className='flex justify-between flex-column'>
                    <div className="sec-left w-[40%] hidden lg:block">
                        <h3 className='text-[22px] font-bold text-black'>Popular Products</h3>
                        <p className='text-[rgba(0,0,0,.6)]'>Do not miss the current offers until the end of March.</p>
                    </div>
                    <div className='sec-right lg:w-[60%] w-[100%] flex items-center justify-center'>
                        <Box sx={{ maxWidth: { xs: '80%', sm: 480 }, bgcolor: 'background.paper' }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"
                                sx={{
                                    '& .MuiTabs-indicator': {
                                        bottom: {
                                            xs : '12px',
                                            sm : '0px'
                                        },
                                    },
                                }}
                            >
                                <Tab label="Fashion" sx={{ fontSize: { xs: '8px', sm: '14px' }, maxWidth: { xs: '40px', sm: '100px' }, minHeight: { xs: '20px', sm: '48px' }, padding: { xs: '0px' } }} />
                                <Tab label="Elecroncis" sx={{ fontSize: { xs: '8px', sm: '14px' }, maxWidth: { xs: '40px', sm: '100px' }, minHeight: { xs: '20px', sm: '48px' } }} />
                                <Tab label="Bags" sx={{ fontSize: { xs: '8px', sm: '14px' }, maxWidth: { xs: '40px', sm: '100px' }, minHeight: { xs: '20px', sm: '48px' } }} />
                                <Tab label="Footwear" sx={{ fontSize: { xs: '8px', sm: '14px' }, maxWidth: { xs: '40px', sm: '100px' }, minHeight: { xs: '20px', sm: '48px' } }} />
                                <Tab label="Groceries" sx={{ fontSize: { xs: '8px', sm: '14px' }, maxWidth: { xs: '40px', sm: '100px' }, minHeight: { xs: '20px', sm: '48px' } }} />
                                <Tab label="Beauty" sx={{ fontSize: { xs: '8px', sm: '14px' }, maxWidth: { xs: '40px', sm: '100px' }, minHeight: { xs: '20px', sm: '48px' } }} />
                                <Tab label="Jewelley" sx={{ fontSize: { xs: '8px', sm: '14px' }, maxWidth: { xs: '40px', sm: '100px' }, minHeight: { xs: '20px', sm: '48px' } }} />
                            </Tabs>
                        </Box>
                    </div>
                </div>
                <div className='popular-product-slider my-5 relative'>
                    <div className="swiper-btn-next flex justify-center items-center w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] absolute top-1/2 left-12 z-10 -translate-y-1/2">
                        <RiArrowLeftSLine className="text-black text-[30px] sm:text-[50px] cursor-pointer custom-prev-popular  transition" />
                    </div>
                    <div className="swiper-btn-prev flex justify-center items-center w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] absolute top-1/2 right-12 z-10 -translate-y-1/2">
                        <RiArrowRightSLine className="text-black text-[30px] sm:text-[50px] cursor-pointer custom-next-popular  transition" />
                    </div>
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={6}
                        spaceBetween={10}
                        navigation={{
                            nextEl: '.custom-next-popular',
                            prevEl: '.custom-prev-popular'
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
                            const nextBtn = document.querySelector('.custom-next-popular');
                            const prevBtn = document.querySelector('.custom-prev-popular');
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
                                prevBtn.style.cursor = 'pointer';
                            }
                        }}
                    >
                        {
                            filteredProducts.map((product, index) => {
                                return (
                                    <SwiperSlide>
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

export default PopularProduct