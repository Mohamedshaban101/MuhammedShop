import React from 'react'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { LiaShippingFastSolid } from "react-icons/lia";
import { GoFileDirectory } from "react-icons/go";
import { PiGift } from "react-icons/pi";
import { MdHeadsetMic } from "react-icons/md";
import { PiKeyReturnLight } from "react-icons/pi";
import { IoChatboxOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer bg-[#fafafa]'>
            <div className='footer-top pt-[20px] pb-[50px] border-b-[1px] border-solid border-gray-400'>
                <div className='container'>
                    <div className='w-[70%] m-auto'>
                        <Swiper
                            modules={[Pagination, Navigation, Scrollbar]}
                            spaceBetween={30}
                            slidesPerView={5}
                            breakpoints={{
                                1024: {
                                    spaceBetween: 30,
                                    slidesPerView: 3
                                },
                                992: {
                                    spaceBetween: 20,
                                    slidesPerView: 3
                                },
                                768: {
                                    spaceBetween: 10,
                                    slidesPerView: 3
                                },
                                567: {
                                    spaceBetween: 10,
                                    slidesPerView: 2
                                },
                                300: {
                                    spaceBetween: 10,
                                    slidesPerView: 2
                                },
                            }}
                            className='mySwiper'
                        >
                            <SwiperSlide>
                                <div className=' flex flex-col items-center gap-3'>
                                    <LiaShippingFastSolid className='text-[30px] sm:text-[40px]' />
                                    <h3 className='text-[10px] sm:text-[17px] text-black font-[500] tracking-wider'>Free Shipping</h3>
                                    <p className='text-[9px] sm:text-[14px]'>For all Orders Over $100</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=' flex flex-col items-center gap-3'>
                                    <GoFileDirectory className='text-[30px] sm:text-[40px]' />
                                    <h3 className='text-[10px] sm:text-[17px] text-black font-[500] tracking-wider'>Free Shipping</h3>
                                    <p className='text-[9px] sm:text-[14px]'>For all Orders Over $100</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=' flex flex-col items-center gap-3'>
                                    <PiGift className='text-[30px] sm:text-[40px]' />
                                    <h3 className='text-[10px] sm:text-[17px] text-black font-[500] tracking-wider'>Free Shipping</h3>
                                    <p className='text-[9px] sm:text-[14px]'>For all Orders Over $100</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=' flex flex-col items-center gap-3'>
                                    <MdHeadsetMic className='text-[30px] sm:text-[40px]' />
                                    <h3 className='text-[10px] sm:text-[17px] text-black font-[500] tracking-wider'>Free Shipping</h3>
                                    <p className='text-[9px] sm:text-[14px]'>For all Orders Over $100</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=' flex flex-col items-center gap-3'>
                                    <PiKeyReturnLight className='text-[30px] sm:text-[40px]' />
                                    <h3 className='text-[10px] sm:text-[17px] text-black font-[500] tracking-wider'>Free Shipping</h3>
                                    <p className='text-[9px] sm:text-[14px]'>For all Orders Over $100</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className='footer-center mb-[20px] mt-[40px] flex'>
                <div className='container flex flex-col lg:flex-row gap-y-[30px]'>
                    <div className='lg:w-[25%] sm:w-full flex lg:flex-col sm:flex-row sm:justify-between lg:border-r-[1px] border-solid border-gray-400'>
                        <div className='flex flex-col'>
                            <h2 className='text-[12px] sm:text-[18px] font-bold mb-4 text-black'>Contact us</h2>
                            <p className='text-[10px] sm:text-[13px] font-400 mb-4 leading-7'>
                                Classyshop - Mega Super Store
                                <br />
                                507-Union Trade Centre France
                            </p>
                            <Link to={'/'} className='text-[10px] sm:text-[13px] mb-2'>
                                sales@yourcompany.com
                            </Link>
                            <span className='text-primary font-bold text-[14px] sm:text-[21px] mb-4'>(+91) 9876-543-210</span>
                        </div>
                        <div className='flex items-start gap-2'>
                            <IoChatboxOutline className='text-[20px] sm:text-[40px]' color='#ff5252' />
                            <span className='text-[10px] sm:text-[16px] font-600 tracking-wider text-black'>
                                Online Chat
                                <br />
                                Get Expert Help
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-row lg:w-[40%] sm:w-full px-7'>
                        <div className='flex flex-col gap-4 w-[50%]'>
                            <h2 className='text-[12px] sm:text-[20px] font-400 text-black'>Products</h2>
                            <ul className='flex flex-col gap-2'>
                                <li className='group'>
                                    <Link to={'/'} className='text-[10px] sm:text-[14px] group-hover:text-primary'>
                                        Prices drop
                                    </Link>
                                </li>
                                <li className='group'>
                                    <Link to={'/'} className='text-[10px] sm:text-[14px] group-hover:text-primary'>
                                        New products
                                    </Link>
                                </li>
                                <li className='group'>
                                    <Link to={'/'} className='text-[10px] sm:text-[14px] group-hover:text-primary'>
                                        Best sales
                                    </Link>
                                </li>
                                <li className='group'>
                                    <Link to={'/'} className='text-[10px] sm:text-[14px] group-hover:text-primary'>
                                        Contact us
                                    </Link>
                                </li>
                                <li className='group'>
                                    <Link to={'/'} className='text-[10px] sm:text-[14px] group-hover:text-primary'>
                                        Sitemap
                                    </Link>
                                </li>
                                <li className='group'>
                                    <Link to={'/'} className='text-[10px] sm:text-[14px] group-hover:text-primary'>
                                        Stores
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-4 w-[50%]'>
                            <h2 className='text-[12px] sm:text-[20px] font-400 text-black'>Our company</h2>
                            <ul className='flex flex-col gap-2'>
                                <li className='group'>
                                    <Link to={'/'} className='text-[10px] sm:text-[14px] group-hover:text-primary'>
                                        Delivery
                                    </Link>
                                </li>
                                <li className='group'>
                                    <Link to={'/'} className='text-[10px] sm:text-[14px] group-hover:text-primary'>
                                        Legal Notice
                                    </Link>
                                </li>
                                <li className='group'>
                                    <Link to={'/'} className='text-[10px] sm:text-[14px] group-hover:text-primary'>
                                        Terms and conditions of use
                                    </Link>
                                </li>
                                <li className='group'>
                                    <Link to={'/'} className='text-[10px] sm:text-[14px] group-hover:text-primary'>
                                        About us
                                    </Link>
                                </li>
                                <li className='group'>
                                    <Link to={'/'} className='text-[10px] sm:text-[14px] group-hover:text-primary'>
                                        Secure payment
                                    </Link>
                                </li>
                                <li className='group'>
                                    <Link to={'/'} className='text-[10px] sm:text-[14px] group-hover:text-primary'>
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col lg:w-[35%] sm:w-full'>
                        <h2 className='text-[12px] sm:text-[20px] font-400 text-black mb-5'>Subscribe to newsletter</h2>
                        <p className='text-[10px] sm:text-[14px] tracking-wider'>Subscribe to our latest newsletter to get news about special discounts.</p>
                        <form action="" className='mt-5 flex flex-col'>
                            <input type="email" placeholder='Your Email Address' className='w-[90%] text-[10px] sm:text-[16px] px-2 sm:px-4 py-2 sm:py-3 bg-white outline-none border-[1px] border-solid border-gray-300 mb-4' />
                            <Button variant={'contained'} className='!bg-primary hover:!bg-black !text-[11px] sm:!text-[12px] !py-1 sm:!py-2 !w-[100px] sm:!w-[130px]'>
                                subscribe
                            </Button>
                            <FormControlLabel control={<Checkbox defaultChecked
                                sx={{
                                    transform: {
                                        xs: 'scale(0.6)',
                                        sm: 'scale(1)',
                                    },
                                }}
                            />} label="I agree to the terms and conditions and the privacy policy"
                                sx={{
                                    '& .MuiFormControlLabel-label': {
                                        fontSize: {
                                            xs: '10px',
                                            sm: '14px',
                                        },
                                    },
                                }}
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className='foot-bottom bg-white p-3 w-full'>
                <div className='container flex flex-col gap-3 sm:gap-5 justify-between lg:flex-row lg:justify-evenly'>
                    <ul className='flex gap-3'>
                        <li className='w-[20px] sm:w-[30px] h-[20px] sm:h-[30px] text-black border border-solid border-[#0000001a] flex justify-center items-center rounded-full hover:text-white hover:bg-primary transition-all'>
                            <Link to={'/'}>
                                <FaFacebookF className='text-[10px] sm:text-[16px]' />
                            </Link>
                        </li>
                        <li className='w-[20px] sm:w-[30px] h-[20px] sm:h-[30px] text-black border border-solid border-[#0000001a] flex justify-center items-center rounded-full hover:text-white hover:bg-primary transition-all'>
                            <Link to={'/'}>
                                <AiOutlineYoutube className='text-[10px] sm:text-[16px]' />
                            </Link>
                        </li>
                        <li className='w-[20px] sm:w-[30px] h-[20px] sm:h-[30px] text-black border border-solid border-[#0000001a] flex justify-center items-center rounded-full hover:text-white hover:bg-primary transition-all'>
                            <Link to={'/'}>
                                <FaPinterestP className='text-[10px] sm:text-[16px]'/>
                            </Link>
                        </li>
                        <li className='w-[20px] sm:w-[30px] h-[20px] sm:h-[30px] text-black border border-solid border-[#0000001a] flex justify-center items-center rounded-full hover:text-white hover:bg-primary transition-all'>
                            <Link to={'/'}>
                                <FaInstagram className='text-[10px] sm:text-[16px]' />
                            </Link>
                        </li>
                    </ul>
                    <div>
                        <p className='text-[11px] sm:text-[14px] font-[300]'>© 2024 - Ecommerce Template</p>
                    </div>
                    <div className='flex gap-1'>
                        <img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782412848/visa_acpvhq.png'} alt="" />
                        <img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782412848/paypal_qpupet.png'} alt="" />
                        <img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782412847/master_card_ss4ghh.png'} alt="" />
                        <img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782412846/carte_bleue_ncqn2v.png'} alt="" />
                        <img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782412845/american_express_ns8voa.png'} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer