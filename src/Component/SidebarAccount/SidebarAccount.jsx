import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { ContextUser } from '../../Context/ContextUser';
const SidebarAccount = ({ active }) => {
    const [activeItemSidebarAccount, setActiveItemSidebarAccount] = useState(active);
    const { currentUser, logout } = useContext(ContextUser);
    return (
        <div className='sidebar-account flex lg:flex-col w-[100%] lg:w-[300px] h-[200px] lg:h-[450px] shadow-md border rounded-lg overflow-hidden'>
            <div className='flex flex-col w-[350px] sm:w-[250px] xl:w-[300px] mx-auto items-center py-4 gap-4 bg-white'>
                <div className='w-[70px] sm:w-[100px] h-[70px] sm:h-[100px] overflow-hidden rounded-full'>
                    <img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782334763/1_1_lujzyr.webp'} alt="" />
                </div>
                <div className='text-center mx-[10px]'>
                    <h4 className='text-[10px] sm:text-[16px] font-[500]'>{currentUser?.name}</h4>
                    <span className='text-[10px] sm:text-[14px]'>{currentUser?.email}</span>
                </div>
            </div>
            <div className='w-full bg-[#f5f0f0]'>
                <ul>
                    <li className={`w-full p-3 hover:bg-[rgba(0,0,0,0.06)] transition ${activeItemSidebarAccount === 'profile' ? 'active' : ''}`} onClick={() => setActiveItemSidebarAccount('profile')}>
                        <Link to={'/my-account'}>
                            <span className='flex gap-[20px] items-center capitalize text-[12px] sm:text-[16px] font-[500]'><FaRegUser className='text-[10px] sm:text-[16px]'/>my profile</span>
                        </Link>
                    </li>
                    <li className={`w-full p-3 hover:bg-[rgba(0,0,0,0.06)] transition ${activeItemSidebarAccount === 'list' ? 'active' : ''}`} onClick={() => setActiveItemSidebarAccount('list')}>
                        <Link to={'/my-list'}>
                            <span className='flex gap-[20px] items-center capitalize text-[12px] sm:text-[16px] font-[500]'><FaRegHeart className='text-[10px] sm:text-[16px]'/>my list</span>
                        </Link>
                    </li>
                    <li className={`w-full p-3 hover:bg-[rgba(0,0,0,0.06)] transition ${activeItemSidebarAccount === 'orders' ? 'active' : ''}`} onClick={() => setActiveItemSidebarAccount('orders')}>
                        <Link to={'/my-orders'}>
                            <span className='flex gap-[20px] items-center capitalize text-[12px] sm:text-[16px] font-[500]'><LuShoppingBag className='text-[10px] sm:text-[16px]' />my orders</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SidebarAccount