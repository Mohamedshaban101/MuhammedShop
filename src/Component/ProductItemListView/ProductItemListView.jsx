import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Rating } from '@mui/material';
import { MdOutlineZoomOutMap } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { ContextCart } from '../../Context/ContextCart';
import { ContextWishlist } from '../../Context/ContextWishlist';
import { ContextProductPopup } from '../../Context/ContextProductPopup';


const ProductItemListView = (props) => {
    const { cart, addToCart } = useContext(ContextCart);
    const { addToWishlist } = useContext(ContextWishlist);
    const {handleClickOpenProductDetailsModel} = useContext(ContextProductPopup);
    return (
        <div className='product-item flex gap-[30px] items-center shadow-lg overflow-hidden rounded-md border-[2px] p-3 border-[rgba(0,0,0,0.1)]'>
            <div className='group relative md:w-[30%] w-[50%] h-[300px] overflow-hidden'>
                <div className='img h-[300px] w-full relative overflow-hidden rounded-md'>
                    <Link to={'/'}>
                        <img src={props?.imgs[0]} alt="img1" className='w-full h-full' />
                        {
                            props?.imgs[1] && <img src={props?.imgs[1]} alt="img2" className='w-full absolute top-0 left-0 duration-700 opacity-0 transition-all group-hover:opacity-100' />
                        }
                    </Link>
                </div>
                <span className='absolute top-[10px] left-[10px] p-1 bg-primary rounded-md text-[12px] text-white'>%8</span>
                <div className='flex items-center flex-col w-[60px] top-[-140px] group-hover:top-[10px] right-[10px] z-[10] absolute gap-4 transition-all'>
                    <Button onClick={handleClickOpenProductDetailsModel} className='hover:!bg-primary btn !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !flex !justify-center !items-center !bg-white'>
                        <MdOutlineZoomOutMap size={'20px'} color='#000' className='btn-item' />
                    </Button>
                    <Button onClick={() => addToWishlist(props.id)} className='hover:!bg-primary btn !w-[35px] !min-w-[35px] !h-[35px] !rounded-full !flex !justify-center !items-center !bg-white'>
                        <FaRegHeart size={'20px'} color='#000' className='btn-item' />
                    </Button>
                    <Button className='hover:!bg-primary btn !w-[35px] !min-w-[35px] !h-[35px] !rounded-full !flex !justify-center !items-center !bg-white'>
                        <IoGitCompareOutline size={'20px'} color='#000' className='btn-item' />
                    </Button>
                </div>
            </div>
            <div className="product-info md:w-[70%] w-[50%] py-4 px-3 flex flex-col items-start justify-center">
                <Link to={'/'}>
                    <h6 className='text-[14px] hover:text-primary transition'>Kasee</h6>
                </Link>
                <Link to={'/'}>
                    <h3 className='text-[15px] text-[rgba(0,0,0,.9)] hover:text-primary font-[500] transition'>Embroidered Satin Saree...</h3>
                </Link>
                <Rating name='half-rating-read' className='mt-1' defaultValue={2.5} precision={1} readOnly />
                <div className='price flex justify-start gap-[10px] items-center'>
                    <span className='line-through text-gray-500'>${props.regular_price}</span>
                    <span className='text-primary'>${props.sale_price}</span>
                </div>
                <Button onClick={() => addToCart(props.id)} variant="outlined" className='!w-[200px] !mt-[20px] !text-primary !border-primary hover:!text-white hover:!bg-black transition hover:!border-black' startIcon={<MdOutlineShoppingCart />}>
                    Add To Cart
                </Button>
            </div>
        </div>
    )
}

export default ProductItemListView