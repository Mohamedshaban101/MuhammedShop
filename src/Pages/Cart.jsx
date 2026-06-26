import React, { useContext, useEffect, useState } from 'react'
import { IoBagCheckOutline } from "react-icons/io5";
import CartItems from '../Component/CartItems/CartItems';
import { Button } from '@mui/material';
import { ContextCart } from '../Context/ContextCart';
import { useNavigate } from 'react-router-dom';
import { ContextToast } from '../Context/ContextToast';
import { ContextUser } from '../Context/ContextUser';

const Cart = () => {
    const { cart, subTotal, total , totalItems } = useContext(ContextCart);
    const {openToast} = useContext(ContextToast);
    const {currentUser} = useContext(ContextUser);
    const [stickyCartTotal, setStickyCartTotal] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset >= 270) {
                setStickyCartTotal(true);
            } else {
                setStickyCartTotal(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
    }, [])
    const handleCheckout = () => {
        if (cart.length === 0) {
            navigate("/cart");
            openToast('error' , 'cart is empty');
            return;
        }

        navigate("/checkout");
    }
    return (
        <div className='py-[40px]'>
            <div className='sm:container w-[100%]'>
                <div className='w-[85%] m-auto flex md:flex-row flex-col gap-[20px]'>
                    <div className='md:w-[70%] w-[100%] shadow-md rounded-lg bg-white p-4'>
                        <div className='p-3'>
                            <h4 className='font-[600] text-[14px] sm:text-[16px] mb-2'>Your Cart</h4>
                            <span className='font-[300] text-[13px] sm:text-[15px]'>There are <span className='text-primary font-bold'>{totalItems()}</span> products in your cart</span>
                        </div>
                        <hr />
                        <div className='cart-items h-[400px] overflow-y-auto'>
                            {
                                currentUser && cart && cart.map((product, index) => {
                                    return (
                                        <CartItems product={product} key={index} />
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className={`relative md:w-[30%] w-[70%] mx-auto h-[300px] shadow-md rounded-lg bg-white`}>
                        <div className={`w-full p-4 flex flex-col gap-4`}>
                            <h2 className='border-b-[1px] border-solid border-gray-200 pb-3'>Carts Totals</h2>
                            <div className='flex justify-between items-center'>
                                <span className='text-[11px] sm:text-[15px] font-[400]'>Subtotal</span>
                                <span className='text-[11px] sm:text-[15px] font-bold text-primary'>${subTotal()}</span>
                            </div>
                            <div className='flex justify-between items-center'>
                                <span className='text-[11px] sm:text-[15px] font-[400]'>Shipping</span>
                                <span className='text-[11px] sm:text-[15px] font-bold'>Free</span>
                            </div>
                            <div>
                                <span className='text-[11px] sm:text-[15px] font-[400]'>Estimate for</span>
                            </div>
                            <div className='flex justify-between items-center'>
                                <span className='text-[11px] sm:text-[15px] font-[400]'>Total</span>
                                <span className='text-[11px] sm:text-[15px] font-bold text-primary'>${total()}</span>
                            </div>
                            <Button onClick={handleCheckout} variant='contained' startIcon={<IoBagCheckOutline className='!text-[16px] sm:!text-[20px]' />} className='!bg-primary hover:!bg-black !transition-all !py-2 !text-[12px] sm:!text-[14px]'>
                                checkout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart