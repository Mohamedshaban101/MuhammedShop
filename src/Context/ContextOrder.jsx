import React, { createContext, useEffect, useState } from 'react';

export const ContextOrder = createContext();

const ContextOrderProvider = ({children}) => {
    const [orders , setOrders] = useState(() => {
        const savedOrder = localStorage.getItem('orders');
        return savedOrder ? JSON.parse(savedOrder) : []
    });

    useEffect(() => {
        localStorage.setItem('orders' , JSON.stringify(orders));
    } , [orders])
    return (
        <ContextOrder.Provider value={{ orders , setOrders }}>
            {children}
        </ContextOrder.Provider>
    );
}

export default ContextOrderProvider;