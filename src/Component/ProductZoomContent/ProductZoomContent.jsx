import React, { useContext, useRef, useState } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { FreeMode, Navigation, Pagination, Scrollbar, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Link, useParams } from 'react-router-dom';
import { GrFavorite } from "react-icons/gr";
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Products from '../../Products';
import { ContextProductPopup } from '../../Context/ContextProductPopup';
import { ContextCart } from '../../Context/ContextCart';

const ProductZoomContent = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const {addToCart} = useContext(ContextCart);
    const { productPopupId } = useContext(ContextProductPopup);
    const [productSize, setProductSize] = useState('m');
    const { id } = useParams();
    const finalId = productPopupId ?? Number(id);
    const product = Products.find(item =>
        item.id === Number(finalId)
    )
    if (!product) {
        return <h2 className='text-center text-primary m-auto'>No product found</h2>
    }
    const imgs = product?.imgs;
    return (
        <div className='flex flex-col lg:flex-row gap-[30px] md:max-w-[1200px] lg:max-w-[1500px] mt-5 mx-auto sm:mx-0'>
            <div className='product-zoom  lg:w-[40%] h-[45vh] sm:h-[50vh] flex  gap-5 overflow-hidden'>
                <div className='product-zoom-slide w-[70px] sm:w-[100px] md:w-[150px] h-[45vh] sm:h-[50vh] relative'>
                    <div className='flex flex-col gap-4 sm:w-[100px] md:w-[150px] h-[45vh] sm:h-[50vh]'>
                        {
                            imgs.length > 4 &&
                            (
                                <>
                                    <div className='absolute  bottom-0  swiper-zoom-prev z-10'>
                                        <IoIosArrowUp size={20} className='custom-zoom-next text-white cursor-pointer' />
                                    </div>
                                    <div className='absolute  top-0 swiper-zoom-next z-10'>
                                        <IoIosArrowDown size={20} className='custom-zoom-prev text-white cursor-pointer' />
                                    </div>
                                </>
                            )
                        }
                        <Swiper
                            modules={[Navigation, Thumbs, FreeMode]}
                            slidesPerView={4}
                            spaceBetween={10}
                            navigation={{
                                nextEl: '.custom-zoom-next',
                                prevEl: '.custom-zoom-prev'
                            }}
                            direction='vertical'
                            className='mySwiper h-[45vh] sm:h-[50vh] '
                            onSwiper={setThumbsSwiper}
                            watchSlidesProgress={true}
                            FreeMode={true}
                            onSlideChange={(swiper) => {
                                const nextBtn = document.querySelector('.custom-zoom-next');
                                const prevBtn = document.querySelector('.custom-zoom-prev');
                                const swiperBtnNext = document.querySelector('.swiper-zoom-next');
                                const swiperBtnPrev = document.querySelector('.swiper-zoom-prev');
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
                            
                        >
                            {
                                imgs.map((img, index) => {
                                    return (
                                        <SwiperSlide key={index} className='sm:w-[100px] md:w-[120px] h-[45vh] sm:h-[50vh] overflow-hidden rounded-lg shadow-sm'>
                                            <div className='cursor-pointer group rounded-md overflow-hidden !h-[120px] sm:h-[200px] sm:w-[100px] md:w-[120px]'>
                                                <img src={img} alt="" className={`sm:w-[100px] md:w-[120px] !h-[120px] sm:h-[200px] group-hover:scale-105 transition-all`} />
                                            </div>
                                        </SwiperSlide>
                                    );
                                })
                            }
                        </Swiper>
                    </div>
                </div>
                <div className='product-zoom-img w-[250px] sm:w-[300px] md:w-[400px] lg:w-[900px] sm:h-[50vh] h-[45vh] rounded-lg overflow-hidden'>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        modules={[Thumbs, FreeMode]}
                        thumbs={{ swiper: thumbsSwiper }
                    }
                    className='sm:h-[50vh] h-[45vh]'
                    >
                        {
                            imgs.map((img, index) => {
                                return (
                                    <SwiperSlide key={index} className='sm:h-[50vh] h-[45vh] w-[250px] sm:w-[300px] md:w-[400px] lg:w-[80%]'>
                                        <Zoom>
                                            <img
                                                alt="That Wanaka Tree, New Zealand by Laura Smetsers"
                                                src={img}
                                                className='w-full h-[45vh] sm:h-[50vh]'
                                            />
                                        </Zoom>
                                    </SwiperSlide>
                                );
                            })
                        }
                    </Swiper>
                </div>
            </div>
            <div className='product-content lg:w-[60%] sm:w-[100%]'>
                <div className='px-[30px]'>
                    <h2 className='text-[16px] sm:text-[22px] font-[600] text-black tracking-wider mb-3'>{product.title}</h2>
                    <div className='flex flex-col gap-2 mb-3'>
                        <span className='text-gray-400 text-[11px] sm:text-[13px]'>
                            Brands : <span className='text-black font-[500 opacity-75]'>
                                {product.brand}
                            </span>
                        </span>
                        <Rating name="half-rating-read" sx={{ fontSize : {xs : '16px' , sm : '20px'} }} defaultValue={3} precision={1} readOnly />
                        <span className='text-[13px] cursor-pointer'>Review (1)</span>
                    </div>
                    <div className='flex gap-4 flex-col mb-3'>
                        <div className='flex gap-4'>
                            <span className='text-[#6b7280] font-[400] text:16px sm:text-[25px] line-through'>${product.regular_price}</span>
                            <span className='text-primary font-[400] text:16px sm:text-[25px]'>${product.sale_price}</span>
                        </div>
                        <div>
                            <span className='text-[12px] sm:text-[15px] text-black font-[200]'>Available In Stock:</span>
                            <span className='text-[#16a34a] text-[10px] sm:text-[14px] font-[500]'> 374657 Items</span>
                        </div>
                    </div>
                    <p className='pr-4 mb-3 text-[12px] sm:text-[16px]'>{product.desc}</p>
                    {
                        product.category === 'fashion' && <div className='flex gap-5 items-center'>
                            <span className='text-[15px] sm:text-[16px] font-[500]'>Size:</span>
                            <div className='flex gap-1'>
                                <Button onClick={() => setProductSize('s')} variant='outlined' className={`!w-[20px] !min-w-[20px] sm:!w-[30px] sm:!min-w-[30px] !h-[20px] sm:!h-[30px] !text-[10px] sm:!text-[14px] transition-all ${productSize == 's' ? '!border-primary !text-white !bg-primary' : '!border-[rgba(0,0,0,0.2)] !text-[rgba(0,0,0,0.6)]'}`}>S</Button>
                                <Button onClick={() => setProductSize('m')} variant='outlined' className={`!w-[20px] !min-w-[20px] sm:!w-[30px] sm:!min-w-[30px] !h-[20px] sm:!h-[30px] !text-[10px] sm:!text-[14px] transition-all ${productSize == 'm' ? '!border-primary !text-white !bg-primary' : '!border-[rgba(0,0,0,0.2)] !text-[rgba(0,0,0,0.6)]'}`}>M</Button>
                                <Button onClick={() => setProductSize('xl')} variant='outlined' className={`!w-[20px] !min-w-[20px] sm:!w-[30px] sm:!min-w-[30px] !h-[20px] sm:!h-[30px] !text-[10px] sm:!text-[14px] transition-all ${productSize == 'xl' ? '!border-primary !text-white !bg-primary' : '!border-[rgba(0,0,0,0.2)] !text-[rgba(0,0,0,0.6)]'}`}>XL</Button>
                                <Button onClick={() => setProductSize('xxl')} variant='outlined' className={`!w-[20px] !min-w-[20px] sm:!w-[30px] sm:!min-w-[30px] !h-[20px] sm:!h-[30px] !text-[10px] sm:!text-[14px] transition-all ${productSize == 'xxl' ? '!border-primary !text-white !bg-primary' : '!border-[rgba(0,0,0,0.2)] !text-[rgba(0,0,0,0.6)]'}`}>XXL</Button>
                            </div>
                        </div>
                    }
                    <p className='text-black text-[12px] sm:text-[14px] my-5'>Free Shipping (Est. Delivery Time 2-3 Days)</p>
                    <div className='flex items-center justify-start gap-5'>
                        <Button onClick={() => addToCart(finalId , productSize)} variant="contained" className=' !text-white !bg-primary !px-5 !border-primary hover:!bg-black transition hover:!border-black !text-[10px] sm:!text-[13px]' startIcon={<ShoppingCartOutlinedIcon className='!text-[15px] sm:!text-[18px]' />}>
                            Add To Cart
                        </Button>
                    </div>
                    <div className='mt-4 hover:text-primary'>
                        <Link to={'/'} className='flex items-center gap-3 text-[13px] sm:text-[13px]'>
                            <GrFavorite />
                            Add To Wishlist
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductZoomContent