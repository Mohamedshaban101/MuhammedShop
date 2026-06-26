import React, { useEffect, useMemo, useState } from 'react'
import Sidebar from '../Component/Sidebar/Sidebar';
import ProductItem from '../Component/ProductItem/ProductItem';
import { MdMenu } from "react-icons/md";
import { RiLayoutGridFill } from "react-icons/ri";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade'
import { Button, Pagination } from '@mui/material';
import ProductItemListView from '../Component/ProductItemListView/ProductItemListView';
import Products from '../Products';
import { useLocation } from 'react-router-dom';
import { FaFilter } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";

const ProductList = () => {
    const [isItemView, setIsItemView] = useState('grid');
    const [productType, setProductType] = useState('');
    const [productCategory, setProductCategory] = useState([]);
    const [productSize, setProductSize] = useState([]);
    const [productRating, setProductRating] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);
    const [page, setPage] = useState(1);
    const location = useLocation();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const subCategory = location.state?.subCategory;
    const category = location.state?.category;
    useEffect(() => {
        setProductCategory(prev =>
            subCategory
                ? prev.filter(item => item === category)
                : prev
        );
    }, [subCategory])
    const shuffledProducts = useMemo(() => {
        return [...Products].sort(() => Math.random() - 0.5);
    }, [Products]);

    const filteredProducts = shuffledProducts.filter((product) =>
        (productCategory.length === 0 || productCategory.includes(product.category)) &&
        (!subCategory || product.sub_category === subCategory) &&
        (productSize.length === 0 || productSize.includes(product.size)) &&
        (productRating.length === 0 || productRating.includes(product.rating))
    );
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy == 'nameAsc') {
            return String(a.title).localeCompare(String(b.title));
        }
        if (sortBy == 'nameDesc') {
            return String(b.title).localeCompare(String(a.title));
        }
        if (sortBy == 'priceAsc') {
            return a.sale_price - b.sale_price;
        }
        if (sortBy == 'priceDesc') {
            return b.sale_price - a.sale_price;
        }
        return 0
    })
    const itemsPerPage = 8;
    const startIdex = (page - 1) * itemsPerPage;
    const endIndex = startIdex + itemsPerPage;
    const currentProducts = sortedProducts.slice(startIdex, endIndex);
    return (
        <div className='product-list py-5 bg-white'>
            <div className="container">
                <div className="flex gap-[30px] justify-center">
                    <div className={`w-[20%] mx-auto h-full bg-white hidden lg:flex`}>
                        <Sidebar filteredProducts={sortedProducts} setProductCategory={setProductCategory} productSize={productSize} setProductSize={setProductSize} productCategory={productCategory} category={location.state?.category} setProductRating={setProductRating} productRating={productRating} />
                    </div>
                    {
                        showSidebar && <div className={`w-[100%] transition-all duration-300 fixed left-0 z-[1000] top-0 h-full bg-white`}>
                            <div className='w-[90%] mx-auto'> 
                                <div className='flex items-center h-[64px] w-[100%] border-b border-[rgb(217, 221, 228)]'>
                                    <Button onClick={() => setShowSidebar(false)} variant='contained' className='!text-black !bg-transparent !shadow-none !flex !justify-start !items-center'><IoIosArrowBack size={30} /></Button>
                                </div>
                                <Sidebar filteredProducts={sortedProducts} setProductCategory={setProductCategory} productSize={productSize} setProductSize={setProductSize} productCategory={productCategory} category={location.state?.category} setProductRating={setProductRating} productRating={productRating} />
                            </div>
                        </div>
                    }
                    <div className='w-[80%] mx-auto relative'>
                        <div className='bg-[#f1f1f1] p-2 flex justify-between items-center mb-7 rounded-md'>
                            <div className='items-center gap-3 hidden md:flex'>
                                <div className='bg-[#f1f1f1] rounded-md p-2'>
                                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full' onClick={() => setIsItemView('list')}><MdMenu size={20} className={`${isItemView === 'list' ? "text-primary" : 'text-black'}`} /></Button>
                                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full' onClick={() => setIsItemView('grid')}><RiLayoutGridFill size={20} className={`${isItemView === 'grid' ? 'text-primary' : 'text-black'}`} /></Button>
                                </div>
                            </div>
                            <div className='lg:hidden'>
                                <Button onClick={() => setShowSidebar(true)} className='flex items-center gap-2 !bg-transparent !text-primary !shadow-none !text-[12px] sm:!text-[16px]' variant='contained'><FaFilter /> Filter</Button>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <span className='text-[12px] sm:text-[15px]'>Sort By</span>
                                <Button
                                    id="fade-button"
                                    aria-controls={open ? 'fade-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    className='!text-[#000] !bg-white !text-[11px] sm:!text-[13px] !capitalize'
                                >
                                    Name, A To Z
                                </Button>
                                <Menu
                                    id="fade-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'fade-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    TransitionComponent={Fade}
                                >
                                    <MenuItem onClick={() => {
                                        handleClose();
                                        setSortBy('nameAsc');
                                    }} className='!text-[11px] sm:!text-[13px]'>Name, A To Z</MenuItem>
                                    <MenuItem onClick={() => {
                                        handleClose();
                                        setSortBy('nameDesc');
                                    }} className='!text-[11px] sm:!text-[13px]'>Name, Z To A</MenuItem>
                                    <MenuItem onClick={() => {
                                        handleClose();
                                        setSortBy('priceAsc');
                                    }} className='!text-[11px] sm:!text-[13px]'>Price, Low To High</MenuItem>
                                    <MenuItem onClick={() => {
                                        handleClose();
                                        setSortBy('priceDesc');
                                    }} className='!text-[11px] sm:!text-[13px]'>Price, High To Low</MenuItem>
                                </Menu>
                            </div>
                        </div>
                        {
                            isItemView === 'grid' ?
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[10px]">
                                    {
                                        currentProducts.length > 0 ? currentProducts.map((product, index) => {
                                            return (
                                                <ProductItem key={index} imgs={product.imgs} id={product.id} regular_price={product.regular_price} sale_price={product.sale_price} />
                                            );
                                        }) :
                                            shuffledProducts.map((product, index) => {
                                                return (
                                                    <ProductItem imgs={product.imgs} key={index} id={product.id} regular_price={product.regular_price} sale_price={product.sale_price} />
                                                );
                                            })
                                    }
                                </div> :
                                <div className="grid grid-cols-1 gap-[10px]">
                                    {
                                        currentProducts.length > 0 ? currentProducts.map((product, index) => {
                                            return (
                                                <ProductItemListView key={index} imgs={product.imgs} id={product.id} regular_price={product.regular_price} sale_price={product.sale_price} />
                                            );
                                        }) :
                                            shuffledProducts.map((product, index) => {
                                                return (
                                                    <ProductItemListView imgs={product.imgs} key={index} id={product.id} regular_price={product.regular_price} sale_price={product.sale_price} />
                                                );
                                            })
                                    }
                                </div>
                        }
                        <div className='flex justify-center items-center mt-5'>
                            <Pagination
                                sx={{
                                    '& .MuiPaginationItem-root': {
                                        color: '#ff5252',
                                    },
                                }}

                                onChange={(event, value) => setPage(value)} page={page} count={Math.ceil(filteredProducts.length / itemsPerPage)} showFirstButton showLastButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList