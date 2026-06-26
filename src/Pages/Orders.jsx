import React, { useContext } from 'react'
import SidebarAccount from '../Component/SidebarAccount/SidebarAccount'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { ContextOrderPopup } from '../Context/ContextOrderPopup';
import { ContextOrder } from '../Context/ContextOrder';
import { ContextUser } from '../Context/ContextUser';
function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
) {
    return { name, calories, fat, carbs, protein };
}

const Orders = () => {
    const { handleClickOpenOrderDetailsModel } = useContext(ContextOrderPopup);
    const { orders } = useContext(ContextOrder);
    const { currentUser } = useContext(ContextUser);
    const {getId} = useContext(ContextOrderPopup);
    const items = orders.filter(item => {
        return item.userId === currentUser.id;
    });
    return (
        <div className='profile py-[40px]'>
            <div className="container">
                <div className='flex flex-col lg:flex-row gap-[40px]'>
                    <SidebarAccount active='orders' />
                    <div className='w-[100%] lg:w-[1000px] bg-white h-[450px] p-5 rounded-lg shadow-md'>
                        <div className='flex justify-between items-center border-b-[1px] border-solid border-gray-300 pb-4'>
                            <span className='font-[500] capitalize text-[13px] sm:text-[17px]'>my orders</span>
                        </div>
                        <div className='overflow-auto'>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: {xs : '250px' , sm : '650px'} }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className='!text-[12px] md:!text-[14px]'>Order Id</TableCell>
                                            <TableCell align="right" className='!text-[12px] md:!text-[14px]'>Products</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody className='!overflow-x-auto'>
                                        {
                                            currentUser && items.map((order, index) => {
                                                return (
                                                    <TableRow key={index}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row" className='!text-[12px] md:!text-[14px]'>{order.id}</TableCell>
                                                        <TableCell align="right"><Button variant='text' onClick={() => {
                                                            handleClickOpenOrderDetailsModel();
                                                            getId(order.userId)
                                                        }} className='!capitalize hover:!bg-transparent !text-primary !text-[12px] md:!text-[14px]'>click here to view</Button></TableCell>
                                                    </TableRow>
                                                );
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders