import React, { useContext, useState } from 'react'
import { Link} from 'react-router-dom';
import { Button, Rating } from '@mui/material';
import { FaSortDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ContextCart } from '../../Context/ContextCart';
import { ContextWishlist } from '../../Context/ContextWishlist';
const WishlistItems = ({product}) => {
    const {addToCart} = useContext(ContextCart);
    const {removeItemWishlist} = useContext(ContextWishlist);
    return (
        <div className='wishlist-items'>
            <div className='flex gap-4 p-3 border-b-[1px] border-solid border-gray-200 h-[145px] sm:h-[150px]'>
                <div className='w-[40%] sm:w-[15%] overflow-hidden rounded-lg h-[110px] sm:h-[130px]'>
                    <img src={product?.imgs[0]} alt="w-full h-[120px] sm:h-[150px]" />
                </div>
                <div className='w-[60%] sm:w-[75%] h-[120px] sm:h-[145px] flex justify-between pt-3'>
                    <div className='flex flex-col'>
                        <span className='text-[14px]'>{product.title}</span>
                        <Link to={'/'} className='text-[10px] sm:text-[16px] font-[600] hover:text-primary transition-all'>
                            {product.desc}
                        </Link>
                        <Rating defaultValue={product.rating} precision={2} readOnly sx={{ fontSize : {xs : '12px' , sm : '16px'} }} />
                        <div className='flex gap-3'>
                            <span className='font-bold text-[12px] sm:text-[13px]'>${product.sale_price}</span>
                            <span className='text-[#6b7280] text-[12px] sm:text-[13px] line-through font-bold'>${product.regular_price}</span>
                            <span className='text-primary text-[12px] sm:text-[13px] font-bold'>10% OFF</span>
                        </div>
                        <Button variant='contained' className='!bg-primary !mt-2 !w-fit !capitalize !text-[12px]' sx={{ fontSize : {xs : '10px' , sm:'10px'} }} onClick={() => addToCart(product.id)}>add to cart</Button>
                    </div>
                    <IoMdClose onClick={() => removeItemWishlist(product.id)} className='cursor-pointer font-bold text-[17px] sm:text-[22px]' />
                </div>
            </div>
        </div>
    )
}

export default WishlistItems