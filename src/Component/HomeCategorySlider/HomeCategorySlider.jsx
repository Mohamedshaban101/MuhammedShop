import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
const HomeCategorySlider = () => {
    return (
        <div className='home-category-slider my-4'>
            <div className="w-[80%] mx-auto">
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={7}
                    spaceBetween={9}
                    breakpoints={{
                        1500: {
                            slidesPerView: 7,
                            spaceBetween: 9
                        },
                        1300: {
                            slidesPerView: 6,
                            spaceBetween: 9
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 9
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 9
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 9
                        },
                        576: {
                            slidesPerView: 3,
                            spaceBetween: 9
                        },
                        200: {
                            slidesPerView: 2,
                            spaceBetween: 9
                        },
                    }}
                    className='sm:h-[155px]'
                >

                    <SwiperSlide>
                        <Link to={`/all-products?search=&category=${'fashion'}`}>
                            <div className="cart shadow-lg rounded-md sm:h-[155px] sm:w-[170px] h-[100px] w-[140px]">
                                <div className="content sm:h-[155px] sm:w-[170px] h-[100px] w-[140px]">
                                    <img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782412136/fash_dofuim.png'} alt="" className='w-[30px] sm:w-[60px] h-[50px]' />
                                    <h3 className='text-[10px] sm:text-[16px]'>Fashion</h3>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/all-products?search=&category=${'bags'}`}>
                            <div className="cart shadow-lg rounded-md sm:h-[155px] sm:w-[170px] h-[100px] w-[140px]">
                                <div className="content sm:h-[155px] sm:w-[170px] h-[100px] w-[140px]">
                                    <img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782412135/bag_vrlkqv.png'} alt="" className='w-[30px] sm:w-[60px] h-[50px]' />
                                    <h3 className='text-[10px] sm:text-[16px]'>Bags</h3>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/all-products?search=&category=${'elec'}`}>
                            <div className="cart shadow-lg rounded-md sm:h-[155px] sm:w-[170px] h-[100px] w-[140px]">
                                <div className="content sm:h-[155px] sm:w-[170px] h-[100px] w-[140px]">
                                    <img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782412136/ele_i2jrfa.png'} alt="" className='w-[30px] sm:w-[60px] h-[50px]' />
                                    <h3 className='text-[10px] sm:text-[16px]'>Elecroncis</h3>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/all-products?search=&category=${'footwear'}`}>
                            <div className="cart shadow-lg rounded-md sm:h-[155px] sm:w-[170px] h-[100px] w-[140px]">
                                <div className="content sm:h-[155px] sm:w-[170px] h-[100px] w-[140px]">
                                    <img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782412137/foot_ynlv9n.png'} alt="" className='w-[30px] sm:w-[60px] h-[50px]' />
                                    <h3 className='text-[10px] sm:text-[16px]'>Footwear</h3>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/all-products?search=&category=${'groc'}`}>
                            <div className="cart shadow-lg rounded-md sm:h-[155px] sm:w-[170px] h-[100px] w-[140px]">
                                <div className="content sm:h-[155px] sm:w-[170px] h-[100px] w-[140px]">
                                    <img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782412137/gro_a26rgs.png'} alt="" className='w-[30px] sm:w-[60px] h-[50px]' />
                                    <h3 className='text-[10px] sm:text-[16px]'>Groceries</h3>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/all-products?search=&category=${'beauty'}`}>
                            <div className="cart shadow-lg rounded-md sm:h-[155px] sm:w-[170px] h-[100px] w-[140px]">
                                <div className="content sm:h-[155px] sm:w-[170px] h-[100px] w-[140px]">
                                    <img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782412136/beauty_zmm7dp.png'} alt="" className='w-[30px] sm:w-[60px] h-[50px]' />
                                    <h3 className='text-[10px] sm:text-[16px]'>Beauty</h3>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/all-products?search=&category=${'jew'}`}>
                            <div className="cart shadow-lg rounded-md sm:h-[155px] sm:w-[170px] h-[100px] w-[140px]">
                                <div className="content sm:h-[155px] sm:w-[170px] h-[100px] w-[140px]">
                                    <img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782412316/jw_vxykkm.png'} alt="" className='w-[30px] sm:w-[60px] h-[50px]' />
                                    <h3 className='text-[10px] sm:text-[16px]'>Jewelley</h3>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default HomeCategorySlider