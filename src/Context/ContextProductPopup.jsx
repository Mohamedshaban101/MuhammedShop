import React, { createContext, useState } from 'react';

export const ContextProductPopup = createContext();
const ContextProductPopupProvider = ({ children }) => {
    const [openProductDetailsModel, setOpenProductDetailsModel] = useState(false);
    const [productPopupId , setProductPopupId] = useState(null);
    const handleClickOpenProductDetailsModel = () => {
        setOpenProductDetailsModel(true);
    }
    const handleCloseProductDetailsModel = () => {
        setOpenProductDetailsModel(false);
    }
    const getId = (id) => {
        setProductPopupId(id);
    }
    return (
        <ContextProductPopup.Provider value={{ openProductDetailsModel, setOpenProductDetailsModel, handleClickOpenProductDetailsModel, handleCloseProductDetailsModel , productPopupId , getId }}>
            {children}
        </ContextProductPopup.Provider>
    )
}

export default ContextProductPopupProvider;