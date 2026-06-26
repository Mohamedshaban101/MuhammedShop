import React, { createContext, useContext, useEffect, useState } from 'react';
import Products from '../Products';
import { ContextToast } from './ContextToast';

export const ContextWishlist = createContext();

const ContextWishlistProvider = ({children}) => {
    const {openToast} = useContext(ContextToast);
    const [wishlist , setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : []
    });

    const addToWishlist = (id) => {
        const product = Products.find(product => product.id === id);
        const existingProduct = wishlist.find(item => item.id === id);
        if(existingProduct){
            openToast('success' , 'already exist in wishlist')
        }else{
            setWishlist([
                ...wishlist,
                {...product}
            ]);
            openToast('success' , 'added successfully');
        }
    }
    const wishlistItems = () => {
        return wishlist.reduce((totalItems , product) => totalItems + 1,0)
    }
    const removeItemWishlist = (id) => {
        setWishlist(wishlist.filter(item => item.id !== id));
        openToast('success' , 'product removed successfully')
    }
    useEffect(() => {
        localStorage.setItem('wishlist' , JSON.stringify(wishlist));
    } , [wishlist])
    return (
        <ContextWishlist.Provider value={{ wishlist , addToWishlist , wishlistItems , removeItemWishlist }}>
            {children}
        </ContextWishlist.Provider>
    );
}
export default ContextWishlistProvider;