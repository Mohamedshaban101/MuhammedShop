import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ContextOrderPopup } from '../../Context/ContextOrderPopup';
import { IconButton } from '@mui/material';
import { IoMdClose } from "react-icons/io";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ContextOrder } from '../../Context/ContextOrder';
const PopupOrder = () => {
    const { openOrderDetailsModel, handleCloseOrderDetailsModel, orderPopupId } = useContext(ContextOrderPopup);
    const { orders } = useContext(ContextOrder);
    const order = orders.find((item) => {
        return item.userId == orderPopupId
    })
    function createData(
        name,
        calories,
        fat,
        carbs,
        protein,
    ) {
        return { name, calories, fat, carbs, protein };
    }
    return (
        <Dialog className='!border-none !outline-none'
            open={openOrderDetailsModel}
            onClose={handleCloseOrderDetailsModel}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            role="alertdialog"
            fullWidth={true}
            maxWidth={'md'}
            slotProps={{
                paper: {
                    sx: {
                        width: {
                            xs: '90vw',
                            lg: '55vw'
                        },
                        maxWidth: 'none',
                        m: 'auto',
                    }
                }
            }}
        >
            <IconButton
                aria-label="close"
                onClick={handleCloseOrderDetailsModel}
                sx={(theme) => ({
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                })}
            >
                <IoMdClose />
            </IconButton>
            <div className='p-6 mt-5'>
                <div className='w-[100%] m-auto'>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: { xs: '200px', sm: '550px' } }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Product Id</TableCell>
                                    <TableCell align="right">Product Title</TableCell>
                                    <TableCell align="right">Image</TableCell>
                                    <TableCell align="right">Quantity</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">SubTotal</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className='!overflow-x-auto'>
                                {
                                    order?.items.length > 0 && order?.items.map((product, index) => {
                                        return (
                                            <TableRow key={index}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">{product.id}</TableCell>
                                                <TableCell align="right">{product.title}</TableCell>
                                                <TableCell align="left" className='!flex !justify-end'><img src={product.img} alt="" className='w-[100px] h-[70px]' /></TableCell>
                                                <TableCell align="right">{product.quantity}</TableCell>
                                                <TableCell align="right">{product.price}</TableCell>
                                                <TableCell align="right">{product.price * product.quantity}</TableCell>
                                            </TableRow>
                                        );
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </Dialog>
    )
}

export default PopupOrder