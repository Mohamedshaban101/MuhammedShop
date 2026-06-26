import { Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { LuShoppingBag } from "react-icons/lu";
import { ContextCart } from '../../Context/ContextCart';
import { ContextUser } from '../../Context/ContextUser';
import { ContextToast } from '../../Context/ContextToast';
import { ContextOrder } from '../../Context/ContextOrder';

const CheckoutContent = ({ toggleCheckoutPanel }) => {
    const { cart, setCart, totalTax, total, subTotal } = useContext(ContextCart);
    const { infoUser, currentUser , user } = useContext(ContextUser);
    const { openToast } = useContext(ContextToast);
    const { orders, setOrders } = useContext(ContextOrder);
    const [showInfo, setShowInfo] = useState(1);
    const navigate = useNavigate();
    
    const handleOrder = () => {
        if (infoUser.length === 0) {
            openToast('error', 'please add address');
            navigate('/checkout');
            return;
        }
        setOrders([...orders, {
            id: Date.now(),
            items: cart,
            userId : currentUser.id,
            totalPrice: total(),
            createdAt: Date.now()
        }]);
        navigate('/');
        openToast('success', 'order received')
        setCart([]);
        return;
    }
    console.log(currentUser);
    return (
        <div className='checkout py-[40px]'>
            <div className='container'>
                <div className='w-[100%] m-auto flex md:flex-row flex-col gap-[20px]'>
                    <div className='w-[100%] sm:w-[60%] h-[250px] sm:h-[350px]'>
                        {
                            currentUser && infoUser.length > 0 ? <div className='h-[100%] shadow-md rounded-lg bg-white p-4'>
                                {
                                    showInfo === 1 ? <div className='shadow-md p-3 flex flex-col gap-[20px] mb-5'>
                                        <div className='flex justify-between'>
                                            <span className='font-bold'>Name</span>
                                            <span>{currentUser?.name}</span>
                                        </div>
                                        <div className='flex justify-between'>
                                            <span className='font-bold'>Country</span>
                                            <span>{infoUser[0].country}</span>
                                        </div>
                                        <div className='flex justify-between'>
                                            <span className='font-bold'>City</span>
                                            <span>{infoUser[0].city}</span>
                                        </div>
                                        <div className='flex justify-between'>
                                            <span className='font-bold'>Street</span>
                                            <span>{infoUser[0].street}</span>
                                        </div>
                                        <div className='flex justify-between'>
                                            <span className='font-bold'>Landmark</span>
                                            <span>{infoUser[0].landmark}</span>
                                        </div>
                                    </div> : <div className='shadow-md p-3 flex flex-col gap-[20px] mb-5'>
                                        <div className='flex justify-between'>
                                            <span className='font-bold'>Name</span>
                                            <span>{currentUser.name}</span>
                                        </div>
                                        <div className='flex justify-between'>
                                            <span className='font-bold'>Country</span>
                                            <span>{infoUser[1].country}</span>
                                        </div>
                                        <div className='flex justify-between'>
                                            <span className='font-bold'>City</span>
                                            <span>{infoUser[1].city}</span>
                                        </div>
                                        <div className='flex justify-between'>
                                            <span className='font-bold'>Street</span>
                                            <span>{infoUser[1].street}</span>
                                        </div>
                                        <div className='flex justify-between'>
                                            <span className='font-bold'>Landmark</span>
                                            <span>{infoUser[1].landmark}</span>
                                        </div>
                                    </div>
                                }
                                {
                                    infoUser.length < 2 && <Button variant='contained' className='!bg-primary !mt-2 !py-2' onClick={toggleCheckoutPanel(true)}>
                                        add another address
                                    </Button>
                                }
                                {
                                    showInfo === 1 && infoUser.length > 1 && <Button variant='contained' className='!bg-primary !mt-2 !py-2' onClick={() => setShowInfo(0)}>
                                        second address
                                    </Button>
                                }
                                {
                                    showInfo === 0 && infoUser.length > 1 && <Button variant='contained' className='!bg-primary !mt-2 !py-2' onClick={() => setShowInfo(1)}>
                                        first address
                                    </Button>
                                }
                            </div> : <div className='h-[100%] shadow-md rounded-lg bg-white p-4'>
                                <div className=''>
                                    <h4 className='font-[600] text-[12px] sm:text-[16px] mb-2 tracking-wide'>Select Delivery Addresst</h4>
                                </div>
                                <div className='flex flex-col items-center gap-2 py-[10px]'>
                                    <div className='w-[50px] sm:w-[100px]'>
                                        <img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782412573/map_cmqryp.png'} alt="" className='w-full' />
                                    </div>
                                    <h4 className='text-[12px] sm:text-[17px] font-[500]'>No Addresses found in your account!</h4>
                                    <span className='font-[300] text-[12px] sm:text-[16px] '>Add a delivery address.</span>
                                    <Button variant='contained' className='!bg-primary !text-[10px] sm:!text-[16px] !mt-2 !py-2' onClick={currentUser ? toggleCheckoutPanel(true) : toggleCheckoutPanel(false) }>
                                        add address
                                    </Button>
                                </div>
                            </div>
                        }
                    </div>
                    <div className={`relative w-[100%] sm:w-[40%] h-[500px] shadow-md rounded-lg bg-white`}>
                        <div className={`w-full p-4 flex flex-col gap-4`}>
                            <h2 className='border-b-[1px] font-[500] text-[14px] sm:text-[18px] border-solid border-gray-200 pb-3'>Your Order</h2>
                            <div className='cart-items h-[200px] overflow-y-auto overflow-x-hidden'>
                                {
                                    currentUser && cart && cart.map((product, index) => {
                                        return (
                                            <div key={index}>
                                                <div className='p-1 flex items-center gap-4 border-b-[1px] border-solid border-gray-400'>
                                                    <div className='checkout-item-img w-[15%] h-[60px] overflow-hidden rounded-lg'>
                                                        <Link to={'/'}>
                                                            <img src={product.img} alt="img1" className='w-full' />
                                                        </Link>
                                                    </div>
                                                    <div className='checkout-item-info flex justify-between w-[85%]'>
                                                        <div className='flex flex-col gap-2 w-full'>
                                                            <Link to={'/'} className='font-[400] text-[12px] sm:text-[15px]'>
                                                                {
                                                                    product.title
                                                                }
                                                            </Link>
                                                            <div className='flex justify-between w-full'>
                                                                <span className='text-[12px] sm:text-[15px] font-[300]'>Qty: <span className='text-primary font-bold'>{product.quantity}</span></span>
                                                                <span className='font-[400] text-[12px] sm:text-[15px] text-black'>${product.quantity * product.price}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            <div className='flex justify-between items-center'>
                                <span className='text-[12px] sm:text-[15px] font-[400]'>Subtotal</span>
                                <span className='text-[12px] sm:text-[15px] font-bold text-primary'>${currentUser ? subTotal() : 0}</span>
                            </div>
                            <div className='flex justify-between items-center'>
                                <span className='text-[12px] sm:text-[15px] font-[400]'>Tax</span>
                                <span className='text-[12px] sm:text-[15px] font-bold text-primary'>${currentUser ? totalTax().toFixed(2) : 0}</span>
                            </div>
                            <div className='flex justify-between items-center'>
                                <span className='text-[12px] sm:text-[15px] font-[400]'>Shipping</span>
                                <span className='text-[12px] sm:text-[15px] font-bold'>Free</span>
                            </div>
                            <div className='flex justify-between items-center'>
                                <span className='text-[12px] sm:text-[15px] font-[400]'>Total</span>
                                <span className='text-[12px] sm:text-[15px] font-bold text-primary'>${currentUser ? total() : 0}</span>
                            </div>
                            <Button onClick={handleOrder} variant='contained' startIcon={<LuShoppingBag className='!text-[13px] sm:!text-[16px]' />} className='!py-2 !bg-primary !font-bold !text-[12px] sm:!text-[15px] !flex !items-center'>
                                checkout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CheckoutContent