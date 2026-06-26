import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { Rating } from '@mui/material';
import { replace, useLocation, useNavigate } from 'react-router-dom';
import Products from '../../Products';
const Sidebar = ({ filteredProducts, setProductCategory, productCategory, category , productSize , setProductSize , productRating , setProductRating }) => {
    const [openCollapse, setOpenCollapse] = useState(true);
    const [openAvailFilter, setOpenAvailFilter] = useState(true);
    const [openSizeFilter, setOpenSizeFilter] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const handleCategoryChange = (e) => {
        const { checked, value } = e.target;
        if (checked) {
            setProductCategory(prev => [...prev, value])
            navigate(location.pathname , {
                replace : true,
                state : {
                    ...location.state,
                    subCategory : ''
                }
            });
        } else {
            setProductCategory(productCategory.filter(category => category !== value))
        }
    }
    const handleSizeChange = (e) => {
        const {checked , value} = e.target;
        if(checked){
            setProductSize(prev => [...prev , value]);
        }else{
            setProductSize(productSize.filter(size => size !== value))
        }
    }
    const result = Products.filter((item) => {
        const categoryMatch = productCategory.length === 0 || productCategory.includes(item.category);
        return  categoryMatch;
    });
    const handleRatingProduct = (e) => {
        const {checked , value} = e.target;
        if(checked){
            setProductRating(prev => [...prev , value]);
        }else{
            setProductRating(productRating.filter(rate => rate !== value));
        }
    }
    useEffect(() => {
        if (category) {
            if (!productCategory.includes(category)) {
                setProductCategory([category]);
            }
        }
    }, [category])
    return (
        <div className='sidebar'>
            <div className="box">
                <h2 className='mb-3 xl:text-[16px] text-[12px] xl:font-[600] font-normal flex justify-between items-center'>Shop by Category  <Button className='!w-[30px] !min-w-[30px] hover:!bg-transparent transition-all' onClick={() => setOpenCollapse(!openCollapse)}>{openCollapse ? <IoIosArrowUp className='!text-[#000]' /> : <IoIosArrowDown className='!text-[#000]' />}</Button></h2>
                <Collapse isOpened={openCollapse}>
                    <div className='flex flex-col h-[200px] overflow-y-scroll overflow-x-hidden mb-4 ps-3'>
                        <FormControlLabel control={<Checkbox size='small' />} checked={productCategory.includes('fashion')} className='!w-full' label="Fashion" value={'fashion'} onChange={handleCategoryChange} />
                        <FormControlLabel control={<Checkbox size='small' />} checked={productCategory.includes('elec')} className='!w-full' label="Electronics" value={'elec'} onChange={handleCategoryChange} />
                        <FormControlLabel control={<Checkbox size='small' />} checked={productCategory.includes('bags')} className='!w-full' label="Bags" value={'bags'} onChange={handleCategoryChange} />
                        <FormControlLabel control={<Checkbox size='small' />} checked={productCategory.includes('footwear')} className='!w-full' label="Footwear" value={'footwear'} onChange={handleCategoryChange} />
                        <FormControlLabel control={<Checkbox size='small' />} checked={productCategory.includes('groc')} className='!w-full' label="Groceries" value={'groc'} onChange={handleCategoryChange} />
                        <FormControlLabel control={<Checkbox size='small' />} checked={productCategory.includes('beauty')} className='!w-full' label="beauty" value={'beauty'} onChange={handleCategoryChange} />
                        <FormControlLabel control={<Checkbox size='small' />} checked={productCategory.includes('wellness')} className='!w-full' label="Wellness" value={'wellness'} onChange={handleCategoryChange} />
                        <FormControlLabel control={<Checkbox size='small' />} checked={productCategory.includes('jew')} className='!w-full' label="Jewellery" value={'jew'} onChange={handleCategoryChange} />
                    </div>
                </Collapse>
                <h2 className='mb-3 xl:text-[16px] text-[12px] xl:font-[600] font-normal flex justify-between items-center'> Shop by Category  <Button className='!w-[30px] !min-w-[30px] hover:!bg-transparent transition-all' onClick={() => setOpenAvailFilter(!openAvailFilter)}>{openAvailFilter ? <IoIosArrowUp className='!text-[#000]' /> : <IoIosArrowDown className='!text-[#000]' />}</Button></h2>
                <Collapse isOpened={openAvailFilter}>
                    <div className='flex flex-col h-[200px] overflow-y-scroll overflow-x-hidden mb-4 ps-3'>
                        <FormControlLabel control={<Checkbox size='small' />} className='!w-full' label="Available" />
                        <FormControlLabel control={<Checkbox size='small' />} className='!w-full' label="In Stock" />
                        <FormControlLabel control={<Checkbox size='small' />} className='!w-full' label="Not Available" />
                    </div>
                </Collapse>
                <h2 className='xl:text-[16px] text-[12px] xl:font-[600] font-normal flex items-center justify-between'>Filter By Size <Button onClick={() => setOpenSizeFilter(!openSizeFilter)} className={'!w-[30px] !h-[30px] !min-w-[30px] hover:!bg-transparent transition-all'}>{openSizeFilter ? <IoIosArrowUp color='#000' /> : <IoIosArrowDown color='#000' />}</Button></h2>
                <Collapse isOpened={openSizeFilter}>
                    <FormControlLabel disabled={!productCategory.includes('fashion')} onChange={handleSizeChange} value={'sm'} control={<Checkbox size='small' />} className='!w-full' label={`Small (${
                        result ? result.filter(item => item.size === 'sm').length : Products.map(item => item.size === 'sm').length 
                    })`} />
                    <FormControlLabel disabled={!productCategory.includes('fashion')} onChange={handleSizeChange} value={'md'} control={<Checkbox size='small' />} className='!w-full' label={`Medium (${
                        result.filter(item => item.size === 'md').length
                    })`} />
                    <FormControlLabel disabled={!productCategory.includes('fashion')} onChange={handleSizeChange} value={'lg'} control={<Checkbox size='small' />} className='!w-full' label={`Large (${
                        result.filter(item => item.size === 'lg').length
                    })`} />
                    <FormControlLabel disabled={!productCategory.includes('fashion')} onChange={handleSizeChange} value={'xl'} control={<Checkbox size='small' />} className='!w-full' label={`XL (${
                        result.filter(item => item.size === 'xl').length
                    })`} />
                    <FormControlLabel disabled={!productCategory.includes('fashion')} onChange={handleSizeChange} value={'xxl'} control={<Checkbox size='small' />} className='!w-full' label={`XXL (${
                        result.filter(item => item.size === 'xxl').length
                    })`} />
                </Collapse>
                <div className='mt-4'>
                    <h2 className='xl:text-[16px] text-[12px] xl:font-[600] font-normal mt-4'>Filter By Rating</h2>
                    <div className='flex items-center justify-start'>
                        <FormControlLabel onClick={handleRatingProduct} value={1} className='!mr-0' control={<Checkbox size='small' />} />
                        <Rating size='small' defaultValue={5} className='text-[10px]' precision={1} readOnly />
                    </div>
                    <div className='flex items-center justify-start'>
                        <FormControlLabel onClick={handleRatingProduct} className='!mr-0' value={2} control={<Checkbox size='small' />} />
                        <Rating size='small' defaultValue={4} precision={1} readOnly />
                    </div>
                    <div className='flex items-center justify-start'>
                        <FormControlLabel onClick={handleRatingProduct} className='!mr-0' value={3} control={<Checkbox size='small' />} />
                        <Rating size='small' defaultValue={3} precision={1} readOnly />
                    </div>
                    <div className='flex justify-start items-center'>
                        <FormControlLabel onClick={handleRatingProduct} className='!mr-0' value={4} control={<Checkbox size='small' />} />
                        <Rating size='small' defaultValue={2} precision={2.5} readOnly />
                    </div>
                    <div className='flex justify-start items-center'>
                        <FormControlLabel onClick={handleRatingProduct} className='!mr-0' value={5} control={<Checkbox size='small' />} />
                        <Rating size='small' defaultValue={1} precision={1} readOnly />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar