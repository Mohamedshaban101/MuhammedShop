import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { IoIosArrowForward } from "react-icons/io";

const Blog = () => {
    return (
        <div className="blog bg-white py-1 sm:py-5">
            <div className='container'>
                <div className='blog-ttile mb-4'>
                    <h3 className='text-black text-[14px] sm:text-[23px] font-bold tracking-wider'>From The Blog</h3>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar]}
                    spaceBetween={30}
                    slidesPerView={4}
                    breakpoints={{
                        1300: {
                            spaceBetween: 10,
                            slidesPerView: 4
                        },
                        1024: {
                            spaceBetween: 10,
                            slidesPerView: 3
                        },
                        992: {
                            spaceBetween: 10,
                            slidesPerView: 2
                        },
                        768: {
                            spaceBetween: 10,
                            slidesPerView: 2
                        },
                        576: {
                            spaceBetween: 10,
                            slidesPerView: 1
                        },
                        300: {
                            spaceBetween: 10,
                            slidesPerView: 1
                        }
                    }}
                    className='mySwiper sm:h-[450px] h-[300px]'
                >
                    <SwiperSlide>
                        <div data-aos='fade-up' data-aos-delay='50' className='blog-item h-[300px] sm:h-[450px] rounded-md overflow-hidden'>
                            <div className="blog-item-img h-[150px] sm:h-[250px] overflow-hidden group rounded-md">
                                <img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782412386/blog_2_opfawc.jpg'} alt="blog1" className='w-full h-[100%] group-hover:scale-105 transition' />
                            </div>
                            <div className='info py-4'>
                                <h2 className='text-black text-[16px] tracking-wide mb-1 lg:mb-3 font-[500] pr-[20px]'>
                                    <Link to={'/'} className='hover:text-primary text-[13px] sm:text-[16px]'>
                                        sustainable living through cutting-edge prefabricated homes
                                    </Link>
                                </h2>
                                <p className='text-[10px] sm:text-[14px] mb-3'>Give2 lady of they such they sure it. Me contained explained my education. Vulgar as he...</p>
                                <Link to={'/'} className='text-[10px] sm:text-[12px] font-500 flex items-center gap-1 hover:text-primary'>
                                    Read More
                                    <IoIosArrowForward />
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div data-aos='fade-up' data-aos-delay='100' className='blog-item h-[450px] rounded-md overflow-hidden'>
                            <div className="blog-item-img h-[250px] overflow-hidden group">
                                <img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782412386/blog_1_mv3bfx.jpg'} alt="blog1" className='w-full h-[100%] group-hover:scale-105 transition' />
                            </div>
                            <div className='info py-4'>
                                <h2 className='text-black text-[16px] tracking-wide mb-1 lg:mb-3 font-[500] pr-[20px]'>
                                    <Link to={'/'} className='hover:text-primary text-[13px] sm:text-[16px]'>
                                        sustainable living through cutting-edge prefabricated homes
                                    </Link>
                                </h2>
                                <p className='text-[10px] sm:text-[14px] mb-3'>Give2 lady of they such they sure it. Me contained explained my education. Vulgar as he...</p>
                                <Link to={'/'} className='text-[10px] sm:text-[12px] font-500 flex items-center gap-1 hover:text-primary'>
                                    Read More
                                    <IoIosArrowForward />
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div data-aos='fade-up' data-aos-delay='150' className='blog-item h-[450px] rounded-md overflow-hidden'>
                            <div className="blog-item-img h-[250px] overflow-hidden group">
                                <img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782412386/blog_2_opfawc.jpg'} alt="blog1" className='w-full h-[100%] group-hover:scale-105 transition' />
                            </div>
                            <div className='info py-4'>
                                <h2 className='text-black text-[16px] tracking-wide mb-1 lg:mb-3 font-[500] pr-[20px]'>
                                    <Link to={'/'} className='hover:text-primary text-[13px] sm:text-[16px]'>
                                        sustainable living through cutting-edge prefabricated homes
                                    </Link>
                                </h2>
                                <p className='text-[10px] sm:text-[14px] mb-3'>Give2 lady of they such they sure it. Me contained explained my education. Vulgar as he...</p>
                                <Link to={'/'} className='text-[10px] sm:text-[12px] font-500 flex items-center gap-1 hover:text-primary'>
                                    Read More
                                    <IoIosArrowForward />
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div data-aos='fade-up' data-aos-delay='200' className='blog-item h-[450px] rounded-md overflow-hidden'>
                            <div className="blog-item-img h-[250px] overflow-hidden group">
                                <img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782412421/blog_3_mpy8ko.jpg'} alt="blog1" className='w-full h-[100%] group-hover:scale-105 transition' />
                            </div>
                            <div className='info py-4'>
                                <h2 className='text-black text-[16px] tracking-wide mb-1 lg:mb-3 font-[500] pr-[20px]'>
                                    <Link to={'/'} className='hover:text-primary text-[13px] sm:text-[16px]'>
                                        sustainable living through cutting-edge prefabricated homes
                                    </Link>
                                </h2>
                                <p className='text-[10px] sm:text-[14px] mb-3'>Give2 lady of they such they sure it. Me contained explained my education. Vulgar as he...</p>
                                <Link to={'/'} className='text-[10px] sm:text-[12px] font-500 flex items-center gap-1 hover:text-primary'>
                                    Read More
                                    <IoIosArrowForward />
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Blog