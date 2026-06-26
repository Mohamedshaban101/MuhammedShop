import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import Button from '@mui/material/Button';
import Products from '../../Products';
import { Link } from 'react-router-dom';
const SearchBox = () => {
  const [searchProducts, setSearchProducts] = useState([]);
  const [letters , setLetters] = useState('');
  const handleChangeInput = (e) => {
    const value = e.target.value;
    const products = Products.filter((product) => {
      return e.target.value !== '' && product.title.toLowerCase().startsWith(value.toLowerCase()) ;
    });
    setLetters(e.target.value);
    setSearchProducts(products);
  }
  return (
    <div className='sreachBox w-[100%] h-[50px] sm:h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-3'>
      <input onChange={handleChangeInput} type="text" className='w-full sm:h-[35px] h-[25px] bg-inherit text-[15px] focus:outline-none' placeholder='Search For Products...' />
      <Button className='!absolute top-[10px] right-[5px] !min-w-[35px] sm:!h-[35px] !h-[25px] z-50 !rounded-full !text-black !text-[22px]'>
        <IoSearch />
      </Button>
      <ul className={`absolute max-h-[200px] overflow-y-auto top-full ${letters !== '' && 'bg-white shadow-lg rounded-lg'} w-full z-[1000] left-0 p-3`}>
        {
          searchProducts.length > 0 ? searchProducts.map((product , index) => {
            return <li key={index} className='border-b-[1px] border-solid border-[#fafafa] p-2 hover:bg-[#fafafa]'>
              <Link to={`/all-products?search=${encodeURIComponent(product.title.toLowerCase())}&category=`} className='w-[100%] block' onClick={() => {
                setSearchProducts([]);
                setLetters('');
              }}>
                <span className='text-primary'>{letters.toLowerCase()}</span>{product.title.toLowerCase().slice(letters.length)}
              </Link>
            </li>
          }) : letters !== '' ?
          <li>no result</li> : ''
        }
      </ul>
    </div>
  )
}

export default SearchBox