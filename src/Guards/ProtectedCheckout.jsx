import React, { useContext } from 'react'
import { ContextCart } from '../Context/ContextCart';
import { Navigate } from 'react-router-dom';

const ProtectedCheckout = ({children}) => {
    const {cart} = useContext(ContextCart);
    if(cart.length === 0){
        return <Navigate to={'/'} replace/>
    }
  return children;
}

export default ProtectedCheckout