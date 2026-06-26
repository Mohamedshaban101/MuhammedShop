import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchBox from '../SearchBox/SearchBox';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { GrFavorite } from "react-icons/gr";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Button, Tooltip } from '@mui/material';
import Navigation from '../Navigation/Navigation';
import CartPanel from './CartPanel';
import { ContextCart } from '../../Context/ContextCart';
import { ContextWishlist } from '../../Context/ContextWishlist';
import { ContextUser } from '../../Context/ContextUser';
import { FaRegUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '0 4px',
    },
}));
const Header = () => {
    const { currentUser, logout } = useContext(ContextUser);
    const { totalItems } = useContext(ContextCart);
    const { wishlistItems } = useContext(ContextWishlist);
    const [stickyNav, setStickyNav] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpenCart(newOpen);
    };
    const navigate = useNavigate();
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 58) {
                setStickyNav(true);
            } else {
                setStickyNav(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header className='bg-white !z-[10000]'>
            <div className={`top-strip py-4 transition-all hidden lg:block delay-150`}>
                <div className="container">
                    <div className='flex items-center justify-between'>
                        <div className='col1 w-[50%]'>
                            <p className='text-[14px]'>Get up to 50% off new season styles, limited time only</p>
                        </div>
                        <div className='col2 w-[50%] flex justify-end items-center'>
                            <ul className='flex items-center gap-3'>
                                <li className='list-none'>
                                    <a href="#" className='text-[13px] font-[500] hover:text-primary transition'>Helper Center</a>
                                </li>
                                <li className='list-none'>
                                    <a href="#" className='text-[13px] font-[500] hover:text-primary transition'>Order Tracking</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`bg-white shadow-lg lg:hidden w-full z-50 flex justify-between flex-col  overflow-hidden transition-[height] duration-300 ${showMenu ? 'h-[450px]' : 'h-[75px]'} ${stickyNav ? 'fixed top-0 left-0 translate-y-0' : 'relative'}`}>
                <div className={`!h-[75px] py-6 px-5 relative top-0 left-0 max-w-[100vw] flex justify-between  items-center`}>
                    <div className='cursor-pointer flex justify-center' onClick={() => setShowMenu(!showMenu)}>
                        <IoMenu className='text-xl sm:text:2xl md:text-3xl' />
                    </div>
                    <ul className='flex gap-4'>
                        <li>
                            <Tooltip title="Favirote">
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={currentUser ? wishlistItems() : 0} color="error" showZero>
                                        <Link to={'/my-list'}>
                                            <GrFavorite className='text-lg md:text-2xl' />
                                        </Link>
                                    </StyledBadge>
                                </IconButton>
                            </Tooltip>
                        </li>
                        <li>
                            <Tooltip title="Cart">
                                <IconButton aria-label="cart" onClick={toggleDrawer(true)}>
                                    <StyledBadge badgeContent={currentUser ? totalItems() : 0} color="error" showZero>
                                        <MdOutlineShoppingCart className='text-lg md:text-2xl' />
                                    </StyledBadge>
                                </IconButton>
                            </Tooltip>
                        </li>
                    </ul>
                    <div>
                        <Link to={'/'}><img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782413274/logo_h1xmgm.png'} className='w-[140px] md:w-[200px]' alt="" /></Link>
                    </div>
                </div>
                <div className='w-[90%] mx-auto flex flex-col gap-2 h-auto'>
                    <div className='w-full'>
                        <SearchBox />
                    </div>
                    <div className='flex justify-between'>
                        <div className="menu-nav duration-1000">
                            <ul className='flex flex-col items-start gap-1 xl:gap-3'>
                                <li className='list-none'>
                                    <Link to={'/'}>
                                        <Button className='!flex !justify-start !text-[12px] w-[120px] btn transition'>Home</Button>
                                    </Link>
                                </li>
                                <li className='list-none relative group'>
                                    <Link to={'/product-list'} state={{ category: 'fashion' }}>
                                        <Button className='!flex !justify-start !text-[12px] w-[120px] btn transition'>Fashion</Button>
                                    </Link>
                                    <div className='hidden group-hover:block absolute top-0 left-[100%] min-w-[150px] bg-white shadow-md z-50'>
                                        <ul>
                                            <li className='list-none w-full'>
                                                <Button onClick={() => {
                                                    navigate('/product-list', {
                                                        state: {
                                                            category: 'fashion',
                                                            subCategory: 'men'
                                                        }
                                                    });
                                                }} className='btn hover:!text-primary !transition !justify-start !w-full'>Men</Button>
                                            </li>
                                            <li className='list-none w-full'>
                                                <Button onClick={() => {
                                                    navigate('/product-list', {
                                                        state: {
                                                            category: 'fashion',
                                                            subCategory: 'women'
                                                        }
                                                    });
                                                }} className='btn hover:!text-primary !transition !w-full !justify-start'>Women</Button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='list-none relative group'>
                                    <Link to={'/product-list'} state={{ category: 'elec' }}>
                                        <Button className='!flex !justify-start !text-[12px] w-[120px] btn transition'>Elecontronices</Button>
                                    </Link>
                                    <div className='hidden group-hover:block absolute top-0 left-[100%] min-w-[150px] bg-white shadow-md z-50'>
                                        <ul>
                                            <li className='list-none w-full'>
                                                <Button onClick={() => {
                                                    navigate('/product-list', {
                                                        state: {
                                                            category: 'elec',
                                                            subCategory: 'watch'
                                                        }
                                                    });
                                                }} className='btn hover:!text-primary !transition !justify-start !w-full'>Smart Watch</Button>
                                            </li>
                                            <li className='list-none w-full'>
                                                <Button onClick={() => {
                                                    navigate('/product-list', {
                                                        state: {
                                                            category: 'elec',
                                                            subCategory: 'phone'
                                                        }
                                                    });
                                                }} className='btn hover:!text-primary !transition !w-full !justify-start'>Mobile</Button>
                                            </li>
                                            <li className='list-none w-full'>
                                                <Button onClick={() => {
                                                    navigate('/product-list', {
                                                        state: {
                                                            category: 'elec',
                                                            subCategory: 'labtop'
                                                        }
                                                    });
                                                }} className='btn hover:!text-primary !transition !w-full !justify-start'>Laptop</Button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='list-none relative group'>
                                    <Link to={'/product-list'} state={{ category: 'bags' }}>
                                        <Button className='!flex !justify-start !text-[12px] w-[120px] btn transition'>Bags</Button>
                                    </Link>
                                    <div className='hidden group-hover:block absolute top-0 left-[100%] min-w-[150px] bg-white shadow-md z-50'>
                                        <ul>
                                            <li className='list-none w-full'>
                                                <Button onClick={() => {
                                                    navigate('/product-list', {
                                                        state: {
                                                            category: 'bags',
                                                            subCategory: 'women'
                                                        }
                                                    });
                                                }} className='btn hover:!text-primary !transition !justify-start !w-full'>Woman Bags</Button>
                                            </li>
                                            <li className='list-none w-full'>
                                                <Button onClick={() => {
                                                    navigate('/product-list', {
                                                        state: {
                                                            category: 'bags',
                                                            subCategory: 'men'
                                                        }
                                                    });
                                                }} className='btn hover:!text-primary !transition !w-full !justify-start'>Men Bags</Button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='list-none relative'>
                                    <Link to={'/product-list'} state={{ category: 'footwear' }}>
                                        <Button className='!flex !justify-start !text-[12px] w-[120px] btn transition'>Footwear</Button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/product-list'} state={{ category: 'groc' }}>
                                        <Button className='!flex !justify-start !text-[12px] w-[120px] btn transition'>Groceries</Button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/product-list'} state={{ category: 'beauty' }}>
                                        <Button className='!flex !justify-start !text-[12px] w-[120px] btn transition'>Beauty</Button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/product-list'} state={{ category: 'jew' }}>
                                        <Button className='!flex !justify-start !text-[12px] w-[120px] btn transition'>Jewellry</Button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <ul className=''>
                            {
                                currentUser ?
                                    <li className='list-none relative group'>
                                        <Button className='transition !text-[12px] !capitalize !text-black flex items-center gap-2 hover:!bg-transparent'>{currentUser?.name} <FaRegUser size={11} /></Button>
                                        <div className='hidden group-hover:block absolute top-[100%] left-0 min-w-[150px] bg-white shadow-md z-50'>
                                            <ul>
                                                <li className='list-none w-full'>
                                                    <Link to={'/my-account'}>
                                                        <Button className='!capitalize !text-black hover:!text-primary !transition !justify-start !w-full text-[12px]'>Profile</Button></Link>
                                                </li>
                                                <li className='list-none w-full'>
                                                    <Button onClick={() => logout()} className='!capitalize !text-black hover:!text-primary !transition !w-full flex gap-[5px] !justify-start !text-[12px]'><IoIosLogOut size={15} />Logout</Button>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    :
                                    <li className='list-none'>
                                        <Link to={'/login'} className='text-[15px] font-[500] hover:text-primary transition'>Login</Link> | &nbsp;
                                        <Link to={'/register'} className='text-[15px] font-[500] hover:text-primary transition'>Register</Link>
                                    </li>
                            }

                        </ul>
                    </div>
                </div>
            </div>
            <div className={`hidden lg:block w-full z-50 transition-all duration-300 ${stickyNav ? 'fixed top-0 left-0 bg-white shadow-lg translate-y-0' : 'relative -translate-y-0'}`}>
                <div className="shadow-md">
                    <div className="center-strip py-4">
                        <div className='container'>
                            <div className='flex items-center justify-between'>
                                <div className='col1 w-[25%]'>
                                    <Link to={'/'}><img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782413274/logo_h1xmgm.png'} alt="" /></Link>
                                </div>
                                <div className='col2 w-[45%]'>
                                    <SearchBox />
                                </div>
                                <div className='col3 w-[30%] flex justify-around items-center pl-5'>
                                    <ul>
                                        {
                                            currentUser ?
                                                <li className='list-none relative group'>
                                                    <Button className='transition !capitalize !text-black flex items-center gap-2 hover:!bg-transparent'>{currentUser?.name} <FaRegUser /></Button>
                                                    <div className='hidden group-hover:block absolute top-[100%] left-0 min-w-[150px] bg-white shadow-md z-50'>
                                                        <ul>
                                                            <li className='list-none w-full'>
                                                                <Link to={'/my-account'}>
                                                                    <Button className='!capitalize !text-black hover:!text-primary !transition !justify-start !w-full'>Profile</Button></Link>
                                                            </li>
                                                            <li className='list-none w-full'>
                                                                <Button onClick={() => logout()} className='!capitalize !text-black hover:!text-primary !transition !w-full flex gap-[5px] !justify-start'><IoIosLogOut size={20} />Logout</Button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                :
                                                <li className='list-none'>
                                                    <Link to={'/login'} className='text-[15px] font-[500] hover:text-primary transition'>Login</Link> | &nbsp;
                                                    <Link to={'/register'} className='text-[15px] font-[500] hover:text-primary transition'>Register</Link>
                                                </li>
                                        }

                                    </ul>
                                    <ul className='flex gap-4'>
                                        <li>
                                            <Tooltip title="Favirote">
                                                <IconButton aria-label="cart" onClick={() => {
                                                    navigate('/my-list');
                                                }}>
                                                    <StyledBadge badgeContent={currentUser ? wishlistItems() : 0} color="error" showZero>
                                                        <GrFavorite size={'20px'} />
                                                    </StyledBadge>
                                                </IconButton>
                                            </Tooltip>
                                        </li>
                                        <li>
                                            <Tooltip title="Cart">
                                                <IconButton aria-label="cart" onClick={toggleDrawer(true)}>
                                                    <StyledBadge badgeContent={currentUser ? totalItems() : 0} color="error" showZero>
                                                        <MdOutlineShoppingCart />
                                                    </StyledBadge>
                                                </IconButton>
                                            </Tooltip>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <CartPanel openCart={openCart} toggleDrawer={toggleDrawer} />
                    </div>
                    <div className='navigation'>
                        <Navigation />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header