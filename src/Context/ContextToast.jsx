import React, { createContext } from 'react';
import toast from 'react-hot-toast';

export const ContextToast = createContext();

const ContextToastProvidor = ({children}) => {
    const openToast = (status , message) => {
        if(status == 'success'){
            toast.success(message);
        }else{
            toast.error(message);
        }
    }

    return (
        <ContextToast.Provider value={{ openToast }}>
            {children}
        </ContextToast.Provider>
    );
}
export default ContextToastProvidor;