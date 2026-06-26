import React, { useContext, useEffect, useState } from 'react'
import { Button } from '@mui/material';
import CheckoutPanel from '../Component/Checkout/CheckoutPanel';
import CheckoutContent from '../Component/Checkout/CheckoutContent';
const Checkout = () => {
    const [openCheckoutPanel, setOpenCheckoutPanel] = useState(false);
    const toggleCheckoutPanel = (newOpen) => () => {
        setOpenCheckoutPanel(newOpen);
    };
    
    return (
        <>
            <CheckoutContent toggleCheckoutPanel={toggleCheckoutPanel} />
            <CheckoutPanel toggleCheckoutPanel={toggleCheckoutPanel} openCheckoutPanel={openCheckoutPanel} />
        </>
    )
}

export default Checkout