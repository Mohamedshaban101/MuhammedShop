import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Rating } from '@mui/material';
import { FaSortDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ContextCart } from '../../Context/ContextCart';
const CartItems = ({ product }) => {
    const { removeItem, updateQuantity, handleUpdateSize } = useContext(ContextCart);
    const [sizeEl, setSizeEl] = useState(null);
    const [qtyEl, setQtyEl] = useState(null);
    const [selectedSize, setSelectedSize] = useState('S');
    const [selectedQty, setSelectedQty] = useState(1);
    const openSize = Boolean(sizeEl);
    const openQty = Boolean(qtyEl);
    const handleSizeClick = (event) => {
        setSizeEl(event.currentTarget);
    };
    const handleSizeClose = (value) => {
        setSizeEl(null);
        if (value !== null) {
            setSelectedSize(value);
        }
    };

    const handleQtyCLick = (event) => {
        setQtyEl(event.currentTarget);
    }

    const handleQtyClose = (value) => {
        setQtyEl(null);
        if (value !== null) {
            setSelectedQty(value)
        }
    }
    if (!product) {
        return (
            <h2>Cart is empty</h2>
        );
    }
    return (
        <div className='cart-item'>
            <div className='flex gap-4 p-3 border-b-[1px] border-solid border-gray-200'>
                <div className='w-[50%] md:w-[30%] lg:w-[25%] xl:w-[15%] h-[150px] overflow-hidden rounded-lg'>
                    <img src={product?.img} alt="w-full h-full block" />
                </div>
                <div className='w-[50%] md:w-[70%] lg:w-[75%] xl:w-[85%] h-[150px] flex justify-between'>
                    <div className='flex flex-col'>
                        <span className='text-[12px] sm:text-[14px]'>Allen Solly</span>
                        <Link to={'/'} className='text-[10px] sm:text-[14px] font-[600] hover:text-primary transition-all'>
                            {product.title}
                        </Link>
                        <Rating defaultValue={3} sx={{ fontSize: { xs: '10px', sm: '14px' } }} precision={2} readOnly size='small' />
                        <div className='flex gap-4 mt-4 mb-3'>
                            {
                                product.category === 'fashion' && <div className='relative'>
                                    <span onClick={handleSizeClick} className='flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] py-1 px-2 rounded-md cursor-pointer'>Size: {selectedSize} <FaSortDown /> </span>
                                    <Menu
                                        id="size-menu"
                                        anchorEl={sizeEl}
                                        open={openSize}
                                        onClose={() => handleSizeClose(null)}
                                        slotProps={{
                                            list: {
                                                'aria-labelledby': 'basic-button',
                                            },
                                            paper: {
                                                sx: {
                                                    minWidth: {
                                                        xs: 10,
                                                        md: 30,
                                                    },
                                                    '& .MuiMenuItem-root': {
                                                        fontSize: {
                                                            xs: '12px',
                                                            md: '14px',
                                                        },
                                                    },
                                                },
                                            },
                                        }}
                                    >
                                        <MenuItem onClick={() => {
                                            handleSizeClose('S');
                                            handleUpdateSize(product.id, 's');
                                        }}>S</MenuItem>
                                        <MenuItem onClick={() => {
                                            handleSizeClose('M');
                                            handleUpdateSize(product.id, 'm');
                                        }}>M</MenuItem>
                                        <MenuItem onClick={() => {
                                            handleSizeClose('L');
                                            handleUpdateSize(product.id, 'l');
                                        }}>L</MenuItem>
                                        <MenuItem onClick={() => {
                                            handleSizeClose('XL');
                                            handleUpdateSize(product.id, 'xl');
                                        }}>XL</MenuItem>
                                        <MenuItem onClick={() => {
                                            handleSizeClose('XXL');
                                            handleUpdateSize(product.id, 'xxl');
                                        }}>XXL</MenuItem>
                                    </Menu>
                                </div>
                            }
                            {
                                product.category !== 'groc' ? <div className='relative'>
                                    <span onClick={handleQtyCLick} className='flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] py-1 px-2 rounded-md cursor-pointer'>Qty: {product.quantity} <FaSortDown /> </span>
                                    <Menu
                                        id='qty-menu'
                                        anchorEl={qtyEl}
                                        open={openQty}
                                        onClose={() => handleQtyClose(null)}
                                        slotProps={{
                                            list: {
                                                'aria-labelledby': 'basic-button'
                                            },
                                            paper: {
                                                sx: {
                                                    minWidth: {
                                                        xs: 10,
                                                        md: 30,
                                                    },
                                                    '& .MuiMenuItem-root': {
                                                        fontSize: {
                                                            xs: '12px',
                                                            md: '14px',
                                                        },
                                                    },
                                                },
                                            },
                                        }}
                                    >
                                        <MenuItem onClick={() => {
                                            updateQuantity(product.id, 1);
                                            handleQtyClose(1);
                                        }}>1</MenuItem>
                                        <MenuItem onClick={() => {
                                            updateQuantity(product.id, 2);
                                            handleQtyClose(2);
                                        }}>2</MenuItem>
                                        <MenuItem onClick={() => {
                                            updateQuantity(product.id, 3);
                                            handleQtyClose(3);
                                        }}>3</MenuItem>
                                        <MenuItem onClick={() => {
                                            updateQuantity(product.id, 4);
                                            handleQtyClose(4);
                                        }}>4</MenuItem>
                                        <MenuItem onClick={() => {
                                            updateQuantity(product.id, 5);
                                            handleQtyClose(5);
                                        }}>5</MenuItem>
                                    </Menu>
                                </div> : <div className='relative'>
                                    <span onClick={handleQtyCLick} className='flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] py-1 px-2 rounded-md cursor-pointer'>Qty: {product.quantity} <FaSortDown /> </span>
                                    <Menu
                                        id='qty-menu'
                                        anchorEl={qtyEl}
                                        open={openQty}
                                        onClose={() => handleQtyClose(null)}
                                        slotProps={{
                                            list: {
                                                'aria-labelledby': 'basic-button'
                                            }
                                        }}
                                    >
                                        <MenuItem onClick={() => {
                                            updateQuantity(product.id, 1);
                                            handleQtyClose(1);
                                        }}>1kg</MenuItem>
                                        <MenuItem onClick={() => {
                                            updateQuantity(product.id, 2);
                                            handleQtyClose(2);
                                        }}>2kg</MenuItem>
                                        <MenuItem onClick={() => {
                                            updateQuantity(product.id, 3);
                                            handleQtyClose(3);
                                        }}>3kg</MenuItem>
                                        <MenuItem onClick={() => {
                                            updateQuantity(product.id, 4);
                                            handleQtyClose(4);
                                        }}>4kg</MenuItem>
                                        <MenuItem onClick={() => {
                                            updateQuantity(product.id, 5);
                                            handleQtyClose(5);
                                        }}>5kg</MenuItem>
                                    </Menu>
                                </div>
                            }
                        </div>
                        <div className='flex gap-3'>
                            <span className='font-bold text-[10px] sm:text-[15px]'>${product.price * product.quantity}</span>
                            <span className='text-primary font-bold text-[10px] sm:text-[15px]'>10% OFF</span>
                        </div>
                    </div>
                    <IoMdClose onClick={() => removeItem(product.id)} size={'22px'} className='cursor-pointer font-bold' />
                </div>
            </div>
        </div>
    )
}

export default CartItems