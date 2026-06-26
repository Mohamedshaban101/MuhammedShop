import React from 'react'
import HomeSlider1 from '../Component/HomeSlider1/HomeSlider1'
import HomeCategorySlider from '../Component/HomeCategorySlider/HomeCategorySlider'
import PopularProduct from '../Component/PopularProduct/PopularProduct'
import LatestProduct from '../Component/LatestProduct/LatestProduct'
import FeaturedProduct from '../Component/FeaturedProduct/FeaturedProduct'
import FootwearProduct from '../Component/FootwearProduct/FootwearProduct'
import ElectroncisProduct from '../Component/ElectroncisProduct/ElectroncisProduct'
import BagsProduct from '../Component/BagsProduct/BagsProduct'
import JewelleyProduct from '../Component/JewelleyProduct/JewelleyProduct'
import HomeSlider2 from '../Component/HomeSlider2/HomeSlider2'
import FreeShipping from '../Component/FreeShipping/FreeShipping'
import Blog from '../Component/Blog/Blog';
import BeautyProduct from '../Component/BeautyProduct/BeautyProduct'
import GroceriesProduct from '../Component/GroceriesProduct/GroceriesProduct'
const Home = () => {
  return (
    <div className='home'>
        <HomeSlider1 />
        <HomeCategorySlider/>
        <PopularProduct/>
        <HomeSlider2 />
        <FreeShipping />
        <LatestProduct />
        <FeaturedProduct />
        <FootwearProduct />
        <ElectroncisProduct />
        <BagsProduct />
        <GroceriesProduct />
        <JewelleyProduct />
        <BeautyProduct />
        <Blog/>
    </div>
  )
}

export default Home