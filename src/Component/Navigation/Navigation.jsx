import React, { useState } from 'react'
import { Button } from '@mui/material';
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { GoRocket } from "react-icons/go";
import CategoryPanel from '../CategoryPanel/CategoryPanel';
const Navigation = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    }
    return (
        <>
            <nav className='py-2'>
                <div className="container flex items-center justify-between gap-[25px]">
                    <div className="col1 w-[15%]">
                        <Button className='!w-full !flex !gap-2 !text-black' onClick={toggleDrawer(true)}><RiMenu2Fill size={'18px'} /> shop by category <FaAngleDown className='ml-auto font-bold' /></Button>
                    </div>
                    <div className="con2 w-[65%]">
                        <ul className='flex items-center gap-1 xl:gap-3'>
                            <li className='list-none'>
                                <Link to={'/'}>
                                    <Button className='btn transition'>Home</Button>
                                </Link>
                            </li>
                            <li className='list-none relative group'>
                                <Link to={'/product-list'} state={{ category : 'fashion' }}>
                                    <Button className='btn transition'>Fashion</Button>
                                </Link>
                                <div className='hidden group-hover:block absolute top-[100%] left-0 min-w-[150px] bg-white shadow-md z-50'>
                                    <ul>
                                        <li className='list-none w-full'>
                                            <Button onClick={() => {
                                                navigate('/product-list' , {
                                                    state : {
                                                        category : 'fashion',
                                                        subCategory : 'men'
                                                    }
                                                });
                                            }} className='btn hover:!text-primary !transition !justify-start !w-full'>Men</Button>
                                        </li>
                                        <li className='list-none w-full'>
                                            <Button onClick={() => {
                                                navigate('/product-list' , {
                                                    state : {
                                                        category : 'fashion',
                                                        subCategory : 'women'
                                                    }
                                                });
                                            }} className='btn hover:!text-primary !transition !w-full !justify-start'>Women</Button>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='list-none relative group'>
                                <Link to={'/product-list'} state={{ category : 'elec' }}>
                                    <Button className='btn transition'>Elecontronices</Button>
                                </Link>
                                <div className='hidden group-hover:block absolute top-[100%] left-0 min-w-[150px] bg-white shadow-md z-50'>
                                    <ul>
                                        <li className='list-none w-full'>
                                            <Button onClick={() => {
                                                navigate('/product-list' , {
                                                    state : {
                                                        category : 'elec',
                                                        subCategory : 'watch'
                                                    }
                                                });
                                            }} className='btn hover:!text-primary !transition !justify-start !w-full'>Smart Watch</Button>
                                        </li>
                                        <li className='list-none w-full'>
                                            <Button onClick={() => {
                                                navigate('/product-list' , {
                                                    state : {
                                                        category : 'elec',
                                                        subCategory : 'phone'
                                                    }
                                                });
                                            }} className='btn hover:!text-primary !transition !w-full !justify-start'>Mobile</Button>
                                        </li>
                                        <li className='list-none w-full'>
                                            <Button onClick={() => {
                                                navigate('/product-list' , {
                                                    state : {
                                                        category : 'elec',
                                                        subCategory : 'labtop'
                                                    }
                                                });
                                            }} className='btn hover:!text-primary !transition !w-full !justify-start'>Laptop</Button>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='list-none relative group'>
                                <Link to={'/product-list'} state={{ category : 'bags' }}>
                                    <Button className='btn transition'>Bags</Button>
                                </Link>
                                <div className='hidden group-hover:block absolute top-[100%] left-0 min-w-[150px] bg-white shadow-md z-50'>
                                    <ul>
                                        <li className='list-none w-full'>
                                            <Button onClick={() => {
                                                navigate('/product-list' , {
                                                    state : {
                                                        category : 'bags',
                                                        subCategory : 'women'
                                                    }
                                                });
                                            }} className='btn hover:!text-primary !transition !justify-start !w-full'>Woman Bags</Button>
                                        </li>
                                        <li className='list-none w-full'>
                                            <Button onClick={() => {
                                                navigate('/product-list' , {
                                                    state : {
                                                        category : 'bags',
                                                        subCategory : 'men'
                                                    }
                                                });
                                            }} className='btn hover:!text-primary !transition !w-full !justify-start'>Men Bags</Button>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='list-none relative'>
                                <Link to={'/product-list'} state={{ category : 'footwear' }}>
                                    <Button className='btn transition'>Footwear</Button>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/product-list'} state={{category : 'groc'}}>
                                    <Button className='btn transition'>Groceries</Button>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/product-list'} state={{ category : 'beauty' }}>
                                    <Button className='btn transition'>Beauty</Button>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/product-list'} state={{ category : 'jew' }}>
                                    <Button className='btn transition'>Jewellry</Button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="con3">
                        <p className='flex items-center gap-2 xl:text-[15px] text-[13px]'><GoRocket size={'18px'} /> Free International Deliver</p>
                    </div>
                </div>
            </nav>
            <CategoryPanel open={open} toggleDrawer={toggleDrawer} />
        </>
    )
}

export default Navigation