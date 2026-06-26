import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
const BannerBox = ({direction , bannerBox , fade , delay , category}) => {
    return (
        <div data-aos={`${fade}`} data-aos-delay={`${delay}`} className='banner-box relative rounded-lg overflow-hidden h-[100px] sm:h-[200px] w-full group'
        >
            <img src={bannerBox} className='w-full h-full group-hover:scale-[1.1] transition' alt="" />
            <div className={`absolute w-[50%] top-1/2 -translate-y-1/2 flex flex-col gap-1 sm:gap-3 ${direction == 'left' ? 'left-[30px] right-auto' : 'right-[0px] left-auto'}`}>
                <h2 className='text-[9px] sm:text-[15px] font-bold'>Buy Woman with low price</h2>
                <span className='text-primary sm:text-[15px] text-[8px] font-bold'>$999</span>
                <Link to={'/product-list'} state={{ 
                    category : category
                 }} className='underline decoration-solid font-[500] hover:text-primary uppercase transition sm:text-[15px] text-[9px]'>shop now</Link>
            </div>
        </div>
    )
}

export default BannerBox