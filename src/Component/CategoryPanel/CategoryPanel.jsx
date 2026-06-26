import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IoCloseSharp } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegMinusSquare } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const CategoryPanel = ({ open, toggleDrawer }) => {
    const [subMenuFashionIndex, setSubMenuFashionIndex] = useState(false);
    const [subMenuElectronicesIndex, setSubMenuElectronicesIndex] = useState(false);
    const [subMenuBagsIndex, setSubMenuBagsIndex] = useState(false);
    const [subMenuFootwearIndex, setSubMenuFootwearIndex] = useState(false);
    const navigate = useNavigate();
    const openSubMenuFashion = (index) => {
        setSubMenuFashionIndex(index)
    }
    const openSubMenuElectronices = (index) => {
        setSubMenuElectronicesIndex(index)
    }
    const openSubMenuBags = (index) => {
        setSubMenuBagsIndex(index)
    }
    const openSubMenuFootwear = (index) => {
        setSubMenuFootwearIndex(index)
    }
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" className={'category-panel'}>
            <div className='w-[75%] m-auto py-3'>
                <img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782413274/logo_h1xmgm.png'} alt="" />
            </div>
            <div className='p-3 flex justify-between items-center'>
                <h3 className='text-[16px]'>Shop By Category</h3>
                <IoCloseSharp className='!cursor-pointer !text-[20px]' onClick={toggleDrawer(false)} />
            </div>
            <div className='scroll p-3'>
                <ul className='w-full'>
                    <li className='list-none'>
                        <Button className='!w-full !flex !items-center !justify-between !text-black !px-3 !capitalize btn' onClick={() => openSubMenuFashion(!subMenuFashionIndex)}>Fashion {subMenuFashionIndex ? <FaRegMinusSquare size={'16px'} /> : <FaRegPlusSquare size={'16px'} />}</Button>
                        {
                            subMenuFashionIndex === true && <ul className='w-[80%] m-auto'>
                                <li className='list-none'>
                                    <Button onClick={() => {
                                        navigate('/product-list', {
                                            state: {
                                                category: 'fashion',
                                                subCategory: 'men'
                                            }
                                        });

                                    }} className='!w-full !flex !justify-start !text-black !capitalize !text-[14px] btn'>Men</Button>
                                </li>
                                <li className='list-none'>
                                    <Button
                                        onClick={() => {
                                            navigate('/product-list', {
                                                state: {
                                                    category: 'fashion',
                                                    subCategory: 'women'
                                                }
                                            });
                                        }}
                                        className='!w-full !flex !justify-start !text-black !capitalize !text-[14px] btn'>Women</Button>
                                </li>
                            </ul>
                        }
                    </li>
                    <li className='list-none'>
                        <Button className='!w-full !flex !items-center !justify-between !text-black !px-3 !capitalize btn' onClick={() => openSubMenuElectronices(!subMenuElectronicesIndex)}>Electronices {subMenuElectronicesIndex ? <FaRegMinusSquare size={'16px'} /> : <FaRegPlusSquare size={'16px'} />}</Button>
                        {
                            subMenuElectronicesIndex === true && <ul className='w-[80%] m-auto'>
                                <li className='list-none'>
                                    <Button
                                        onClick={() => {
                                            navigate('/product-list', {
                                                state: {
                                                    category: 'elec',
                                                    subCategory: 'watch'
                                                }
                                            });
                                        }}
                                        className='!w-full !flex !justify-start !text-black !capitalize !text-[14px] btn'>Smart Watch</Button>
                                </li>
                                <li className='list-none'>
                                    <Button
                                        onClick={() => {
                                            navigate('/product-list', {
                                                state: {
                                                    category: 'elec',
                                                    subCategory: 'phone'
                                                }
                                            });
                                        }}
                                        className='!w-full !flex !justify-start !text-black !capitalize !text-[14px] btn'>Mobile</Button>
                                </li>
                                <li className='list-none'>
                                    <Button
                                        onClick={() => {
                                            navigate('/product-list', {
                                                state: {
                                                    category: 'elec',
                                                    subCategory: 'labtop'
                                                }
                                            });
                                        }}
                                        className='!w-full !flex !justify-start !text-black !capitalize !text-[14px] btn'>Labtops</Button>
                                </li>
                            </ul>
                        }
                    </li>
                    <li className='list-none'>
                        <Button className='!w-full !flex !items-center !justify-between !text-black !px-3 !capitalize btn' onClick={() => openSubMenuBags(!subMenuBagsIndex)}>Bags {subMenuBagsIndex ? <FaRegMinusSquare size={'16px'} /> : <FaRegPlusSquare size={'16px'} />}</Button>
                        {
                            subMenuBagsIndex === true && <ul className='w-[80%] m-auto'>
                                <li className='list-none'>
                                    <Button
                                        onClick={() => {
                                            navigate('/product-list', {
                                                state: {
                                                    category: 'bags',
                                                    subCategory: 'women'
                                                }
                                            });
                                        }}
                                        className='!w-full !flex !justify-start !text-black !capitalize !text-[14px] btn'>Woman Bags</Button>
                                </li>
                                <li className='list-none'>
                                    <Button
                                        onClick={() => {
                                            navigate('/product-list', {
                                                state: {
                                                    category: 'bags',
                                                    subCategory: 'men'
                                                }
                                            });
                                        }}
                                        className='!w-full !flex !justify-start !text-black !capitalize !text-[14px] btn'>Men Bags</Button>
                                </li>
                            </ul>
                        }
                    </li>
                    <li className='list-none'>
                        <Button
                            onClick={() => {
                                navigate('/product-list', {
                                    state: {
                                        category: 'footwear',
                                    }
                                });
                            }}
                            className='!w-full !flex !items-center !justify-between !text-black !px-3 !capitalize btn'>Footwear</Button>
                    </li>

                    <li className='list-none'>
                        <Button
                            onClick={() => {
                                navigate('/product-list', {
                                    state: {
                                        category: 'groc',
                                    }
                                });
                            }}
                            className='!w-full !flex !items-center !justify-between !text-black !px-3 !capitalize btn'>Groceries</Button>
                    </li>
                    <li className='list-none'>
                        <Button
                            onClick={() => {
                                navigate('/product-list', {
                                    state: {
                                        category: 'beauty',
                                    }
                                });
                            }}
                            className='!w-full !flex !items-center !justify-between !text-black !px-3 !capitalize btn'>Beauty</Button>
                    </li>
                    <li className='list-none'>
                        <Button
                            onClick={() => {
                                navigate('/product-list', {
                                    state: {
                                        category: 'jew',
                                    }
                                });
                            }}
                            className='!w-full !flex !items-center !justify-between !text-black !px-3 !capitalize btn'>Jewelley</Button>
                    </li>
                </ul>
            </div>
        </Box>
    );
    return (
        <div className='z-[1000]'>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    )
}

export default CategoryPanel