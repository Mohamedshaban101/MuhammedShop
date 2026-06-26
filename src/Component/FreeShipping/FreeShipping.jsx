import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import BannerBox from '../BannerBox/BannerBox';
const FreeShipping = () => {
  return (
    <div className='free-shipping bg-white py-[30px]'>
        <div className='container'>
            <div className='!w-[90%] hidden sm:flex mx-auto my-[30px]  border-[2px] border-primary border-solid rounded-md py-5 px-4  justify-between items-center'>
                <div className='flex gap-3 items-center'>
                    <LiaShippingFastSolid size={40}/>
                    <span className='xl:text-[20px] text-[15px] uppercase traking-wider font-[500]'>Free Shipping</span>
                </div>
                <div className=''>
                    <p className='text-[15px]'>Free Delivery Now On Your First Order and over $200</p>
                </div>
                <div>
                    <span className='xl:text-[30px] text-[20px] font-bold'>
                        - Only $200*
                    </span>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-2 items-center gap-[5px]'>
                <BannerBox bannerBox={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782411021/banner-box-1_bg9c3w.jpg'} category={'fashion'} direction={'right'} fade='flip-left' delay='50'/>
                <BannerBox bannerBox={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782411021/banner-box-2_rbsoa4.jpg'} category={'footwear'} direction={'right'} fade='flip-left' delay='100'/>
                <BannerBox bannerBox={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782411022/banner-box-4_mezkn0.png'} category={'bags'} direction={'left'} fade='flip-left' delay='150'/>
                <BannerBox bannerBox={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782411021/banner-box-3_dkhzkk.jpg'} category={'elec'} direction={'left'} fade='flip-left' delay='200'/>
            </div>
        </div>
    </div>
  )
}

export default FreeShipping