import React, { createContext, useContext, useEffect, useState } from 'react';
import Products from '../Products';
import { ContextToast } from './ContextToast';
export const ContextCart = createContext();

const ContextCartProvider = ({ children }) => {
    const { openToast } = useContext(ContextToast);
    const [loading, setLoading] = useState(false);
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const addToCart = (id, productSize) => {
        const product = Products.find(product => product.id === id);
        const existingProduct = cart.find(item => item.id == id);

        if (existingProduct) {
            setCart(
                cart.map((item) =>
                    item.id == id ? {
                        ...item,
                        quantity: item.quantity + 1,
                    } : {
                        id : item.id,
                        title: item.title,
                        img: item.imgs[0],
                        price: item.price,
                        category: item.category,
                        brand: item.brand,
                        unit : product.category === 'groc' ? 'kg' : 'peice'
                    }
                )
            )
        } else {
            setCart([
                ...cart,
                {
                    id : product.id,
                    title: product.title,
                    img: product.imgs[0],
                    price: product.sale_price,
                    category: product.category,
                    brand: product.brand,
                    quantity: 1,
                    size: product.category === 'fashion' && productSize,
                    unit : product.category === 'groc' ? 'kg' : 'peice'
                },
            ]);
            openToast('success', 'added successfully');
        }
    }
    const subTotal = () => {
        return cart.reduce((totalPrice, product) => totalPrice + product.price * product.quantity, 0)
    }
    let tax = .15;
    const total = () => {
        return subTotal() + subTotal() * tax;
    }
    const totalTax = () => {
        return subTotal() *  tax;
    }
    const totalItems = () => {
        return cart.reduce((totalItems, product) => totalItems + product.quantity, 0);
    }
    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id))
        openToast('success', 'product removed successfully')

    }
    const updateQuantity = (id, quantity) => {
        setCart(
            cart.map(item => item.id == id  ? { ...item, quantity } : item)
        );
    }
    const handleUpdateSize = (id , size) => {
        setCart(
            cart.map(item => item.id == id ? {...item , size : size} : item)
        );
    }
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    return (
        <ContextCart.Provider value={{ cart, setCart, addToCart, total, subTotal, totalItems, removeItem, updateQuantity, loading, setLoading, totalTax , handleUpdateSize }}>
            {
                children
            }
        </ContextCart.Provider>
    );
}

export default ContextCartProvider;