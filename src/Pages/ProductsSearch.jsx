import React, { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Products from '../Products';
import ProductItem from '../Component/ProductItem/ProductItem';
import { Pagination } from '@mui/material';
const ProductsSearch = () => {
    const [page, setPage] = useState(1);
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search');
    const category = searchParams.get('category');
    const shuffledProducts = useMemo(() => {
        return [...Products].sort(() => Math.random() - 0.5);
    }, [Products]);
    const filteredProducts = shuffledProducts.filter(product => {
        const matchesSearch = search ? product.title.toLowerCase().includes(search.toLowerCase()) : true;
        const matchesCategory = category ? product.category === category  : true;
        return matchesSearch && matchesCategory;
    });
    const itemsPerPage = search ? 8 : 12;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, endIndex);
    return (
        <div className='products-search py-5'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-6 gap-[10px]'>
                    {
                        currentProducts.map((product, index) => {
                            return (
                                <ProductItem key={index} imgs={product.imgs} rating={product.rating} id={product.id} regular_price={product.regular_price} sale_price={product.sale_price} />
                            );
                        })
                    }
                </div>
                <div className='flex justify-center items-center mt-5'>
                    <Pagination
                        sx={{
                            '& .MuiPaginationItem-root': {
                                color: '#ff5252',
                            },
                        }}
                        onChange={(event, value) => setPage(value)} style={{ color: '#ff5252' }} page={page} count={Math.ceil(filteredProducts.length / itemsPerPage)} showFirstButton showLastButton />
                </div>
            </div>
        </div>
    )
}

export default ProductsSearch