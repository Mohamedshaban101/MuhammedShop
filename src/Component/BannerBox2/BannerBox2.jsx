import React from 'react'
import { Link } from 'react-router-dom';
const BannerBox2 = (props) => {
  return (
    <div data-aos={`${props.fade}`} data-aos-delay={`${props.delay}`} className='group banner-box2 overflow-hidden rounded-md w-full h-[200px] relative'>
        <img src={props.bannerBox} alt="bannder box" className='w-full group-hover:scale-105 transition-all' />
    </div>
  )
}

export default BannerBox2