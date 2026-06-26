import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ProductZoomContent from '../ProductZoomContent/ProductZoomContent';
import { IconButton } from '@mui/material';
import { IoMdClose } from "react-icons/io";
import { ContextProductPopup } from '../../Context/ContextProductPopup';
const PopupProduct = () => {
    const { openProductDetailsModel, handleCloseProductDetailsModel } = useContext(ContextProductPopup);
    return (
        <Dialog className='!border-none !outline-none !max-w-[90vw] !m-auto !p-5'
            open={openProductDetailsModel}
            onClose={handleCloseProductDetailsModel}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            role="alertdialog"
            fullWidth={true}
            maxWidth={'lg'}
        >
            <IconButton
                aria-label="close"
                onClick={handleCloseProductDetailsModel}
                sx={(theme) => ({
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                })}
            >
                <IoMdClose />
            </IconButton>
            <div className='w-full p-6'>
                <div className='w-[100%]'>
                    <ProductZoomContent />
                </div>
            </div>
        </Dialog>
    )
}

export default PopupProduct