import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { Rating } from '@mui/material';
import { MdOutlineZoomOutMap } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { ContextProductPopup } from '../../Context/ContextProductPopup';
import { ContextCart } from '../../Context/ContextCart';
import { ContextWishlist } from '../../Context/ContextWishlist';
import { ContextUser } from '../../Context/ContextUser';
import { ContextToast } from '../../Context/ContextToast';
const Products = () => React.lazy(() => import('../../Products'));

const ProductItem = (props) => {
    const { handleClickOpenProductDetailsModel, getId } = useContext(ContextProductPopup);
    const { cart, addToCart } = useContext(ContextCart);
    const { addToWishlist } = useContext(ContextWishlist);
    const { currentUser } = useContext(ContextUser);
    const { openToast } = useContext(ContextToast);
    const navigate = useNavigate();
    return (
        <div data-aos='zoom-in' data-aos-delay='50' className='product-item flex sm:flex-col shadow-lg overflow-hidden rounded-md border-[2px] border-[rgba(0,0,0,0.1)]'>
            <div className='group relative overflow-hidden w-[55%] h-[130px] sm:h-[180px] sm:w-full'>
                <div className='img h-[130px] sm:h-[180px] w-full relative overflow-hidden'>
                    <Link to={`/product/${props.id}`}>
                        <img src={props.imgs?.[0]} alt="img1" className='w-full h-full' loading='lazy' />
                        {
                            props.imgs?.[1] && <img src={props.imgs?.[1]} alt="img2" className='w-full h-full absolute top-0 left-0 duration-700 opacity-0 transition-all group-hover:opacity-100' />
                        }
                    </Link>
                </div>
                <span className='absolute top-[10px] left-[10px] p-1 bg-primary rounded-md text-[8px] sm:text-[12px] text-white'>%8</span>
                <div className='flex items-center flex-col w-[60px] top-[-140px] group-hover:top-[10px] right-[10px] absolute gap-3 transition-all'>
                    <Button onClick={() => {
                        handleClickOpenProductDetailsModel(),
                            getId(props.id)
                    }} className='!hidden sm:!flex hover:!bg-primary btn !w-[30px] !h-[30px] !min-w-[30px] !rounded-full !justify-center !items-center !bg-white'>
                        <MdOutlineZoomOutMap size={'20px'} color='#000' className='btn-item' />
                    </Button>
                    <Button onClick={() => {
                        if (currentUser) {
                            addToWishlist(props.id)
                        } else {
                            navigate('/login');
                            openToast('success', 'must be login first')
                        }
                    }} className='hover:!bg-primary btn !w-[30px] !min-w-[30px] !h-[30px] !rounded-full !flex !justify-center !items-center !bg-white'>
                        <FaRegHeart size={'20px'} color='#000' className='btn-item' />
                    </Button>
                    <Button className='hover:!bg-primary btn !w-[30px] !min-w-[30px] !h-[30px] !rounded-full !flex !justify-center !items-center !bg-white'>
                        <IoGitCompareOutline size={'20px'} color='#000' className='btn-item' />
                    </Button>
                </div>
            </div>
            <div className="product-info py-4 px-3">
                <Link to={`/product/${props.id}`}>
                    <h6 className='text-[8px] sm:text-[14px] hover:text-primary transition'>Kasee</h6>
                </Link>
                <Link to={`/product/${props.id}`}>
                    <h3 className='text-[8px] sm:text-[15px] text-[rgba(0,0,0,.9)] hover:text-primary font-[500] transition'>Embroidered Satin Saree...</h3>
                </Link>
                <Rating name='half-rating-read' sx={{ fontSize : {xs : '12px' , sm : '20px'} }} className='mt-1' defaultValue={props.rating} precision={1} readOnly />
                <div className='price flex justify-between items-center'>
                    <span className='line-through text-[8px] sm:text-[15px]  text-gray-500'>${props.regular_price}</span>
                    <span className='text-primary text-[8px] sm:text-[15px]'>${props.sale_price}</span>
                </div>
                <Button variant='outlined' sx={{ fontSize : {xs : '7px' , sm : '13px'} }} className='!mt-3 w-full flex gap-1 sm:gap-3 !border-primary !text-primary hover:!border-black hover:!bg-black hover:!text-white !transition-all' onClick={() => {
                    if (currentUser) {
                        addToCart(props.id , 'm')
                    } else {
                        navigate('/login');
                        openToast('success', 'must be login first')
                    }
                }}><MdOutlineShoppingCart className='!text-[15px] sm:!text-[20px]' /> add to cart</Button>
            </div>
        </div>
    )
}

export default ProductItem