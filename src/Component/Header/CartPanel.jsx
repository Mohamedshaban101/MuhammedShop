import React, { useContext, useState } from 'react'
import Drawer from '@mui/material/Drawer';
import { IoMdTrash } from "react-icons/io";
import { Box } from '@mui/material';
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ContextCart } from '../../Context/ContextCart';
import { ContextUser } from '../../Context/ContextUser';
const CartPanel = ({ toggleDrawer, openCart }) => {
    const { cart  , total , subTotal , totalItems , removeItem} = useContext(ContextCart);
    const {currentUser} = useContext(ContextUser);
    return (
        <div className='cart-panel'>
            <Drawer open={openCart} onClose={toggleDrawer(false)} anchor='right'>
                <Box sx={{ width: {xs:'100%',sm:'400px'}, position: 'relative', height: '100vh' }} className=''>
                    <div className='flex justify-between items-center p-3 border-b-[1px] border-solid border-gray-400   bg-white'>
                        <h2 className='text-[14px] sm:text-[18px] font-[500]'>Shopping Cart ({currentUser ? totalItems() : 0})</h2>
                        <IoClose size={'22px'} className='!cursor-pointer' onClick={toggleDrawer(false)} />
                    </div>
                    <div className='cart-items'>
                        {
                            currentUser && cart.length > 0 && cart.map((product, index) => {
                                return (
                                    <div key={index} className='cart-item p-3 flex items-center gap-4 border-b-[1px] border-solid border-gray-400'>
                                        <div className='cart-item-img w-[25%] h-[80px] overflow-hidden rounded-lg'>
                                            <Link to={'/'}>
                                                <img src={product.img} alt="img1" className='w-full' />
                                            </Link>
                                        </div>
                                        <div className='cart-item-info flex justify-between w-[75%]'>
                                            <div className='flex flex-col gap-2'>
                                                <Link to={'/'} className='font-[400] text-[12px] sm:text-[15px]'>
                                                    {product.title}
                                                </Link>
                                                <div className='flex gap-4'>
                                                    <span className='text-[12px] sm:text-[15px] font-[300]'>Qty: <span className='text-primary font-bold'>{product.quantity}</span></span>
                                                    <span className='font-bold text-[12px] sm:text-[15px] text-primary'>${product.price}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <IoMdTrash onClick={() => removeItem(product.id)} size={'22px'} className='!cursor-pointer hover:!text-primary !transition-all' />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className='absolute bottom-0 right-0 left-0 h-[30vh] bg-white ps-2 pt-[50px]'>
                        <div className='flex justify-between px-4 py-3 border-t-[1px] border-solid border-gray-400'>
                            <span className='text-[12px] sm:text-[15px]'><span className='text-primary font-bold'>{currentUser ? totalItems() : 0}</span> Item</span>
                            <span className='font-bold text-[12px] sm:text-[15px] text-primary'>${currentUser ? subTotal() : 0}</span>
                        </div>
                        <div className='flex justify-between px-4 py-3 border-t-[1px] border-solid border-gray-400'>
                            <span className='text-[12px] sm:text-[15px]'>Total (tax excl.)</span>
                            <span className='font-bold text-[12px] sm:text-[15px] text-primary'>${currentUser ? total() : 0}</span>
                        </div>
                        <div className='flex gap-3 px-4 py-3 items-center justify-center'>
                            <Link to={'/cart'}>
                                <Button onClick={toggleDrawer(false)} variant='outlined' className=' !text-primary !border-primary hover:!bg-black hover:!text-white hover:!border-black !transition-all !py-2 !text-[11px] sm:!text-[14px] !w-[100px] sm:!w-[150px]'>
                                    view cart
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Box>
            </Drawer>
        </div>
    )
}

export default CartPanel