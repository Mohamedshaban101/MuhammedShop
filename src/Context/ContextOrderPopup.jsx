import React, { createContext, useState } from 'react';

export const ContextOrderPopup = createContext();
const ContextOrderPopupProvider = ({ children }) => {
    const [openOrderDetailsModel, setOpenOrderDetailsModel] = useState(false);
    const [orderPopupId,setOrderPopupId] = useState(null)
    const handleClickOpenOrderDetailsModel = () => {
        setOpenOrderDetailsModel(true);
    }
    const handleCloseOrderDetailsModel = () => {
        setOpenOrderDetailsModel(false);
    }
    const getId = (id) => {
        setOrderPopupId(id);
    }
    // console.log(orderPopupId)
    return (
        <ContextOrderPopup.Provider value={{ openOrderDetailsModel, setOpenOrderDetailsModel, handleClickOpenOrderDetailsModel, handleCloseOrderDetailsModel , getId , orderPopupId }}>
            {children}
        </ContextOrderPopup.Provider>
    )
}

export default ContextOrderPopupProvider;