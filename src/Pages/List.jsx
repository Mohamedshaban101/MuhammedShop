import React, { useContext } from 'react'
import SidebarAccount from '../Component/SidebarAccount/SidebarAccount'
import { Button } from '@mui/material'
import WishlistItems from '../Component/WishlistItems/WishlistItems'
import { ContextWishlist } from '../Context/ContextWishlist'

const List = () => {
    const { wishlist  , wishlistItems} = useContext(ContextWishlist);
    return (
        <div className='my-list py-[40px]'>
            <div className="container">
                <div className='flex flex-col lg:flex-row gap-[40px]'>
                    <SidebarAccount active='list' />
                    <div className='w-[100%] lg:w-[1000px] bg-white h-[450px] p-5 rounded-lg shadow-md'>
                        <div className='flex flex-col border-b-[1px] border-solid border-gray-300 pb-4 h-[64px]'>
                            <span className='font-[500] capitalize text-[17px]'>my list</span>
                            <h4 className='text-[14px]'>There are <span className='text-primary font-[500]'>{wishlistItems()}</span> products in your list
                            </h4>
                        </div>
                        <div className='overflow-auto h-[360px]'>
                            {
                                wishlist && wishlist.map((product, index) => {
                                    return (
                                        <WishlistItems product={product} key={index}/>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List