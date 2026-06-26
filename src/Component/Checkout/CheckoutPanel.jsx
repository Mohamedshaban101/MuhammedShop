import React, { useContext, useEffect, useState } from 'react'
import Drawer from '@mui/material/Drawer';
import { Box, Button, FormControl, FormControlLabel, FormLabel, TextField } from '@mui/material';
import { IoClose } from "react-icons/io5";
import Autocomplete from '@mui/material/Autocomplete';
import Radio from '@mui/material/Radio';
import ReactFlagsSelect from "react-flags-select";
import { ContextUser } from '../../Context/ContextUser';
import { ContextToast } from '../../Context/ContextToast';
const CheckoutPanel = ({ openCheckoutPanel, toggleCheckoutPanel }) => {
    const { infoUser, setInfoUser } = useContext(ContextUser);
    const { openToast } = useContext(ContextToast);
    const [selectedValue, setSelectedValue] = useState('a');
    const [selected, setSelected] = useState("");
    const [address, setAddress] = useState({
        country: '',
        city: '',
        street: '',
        landmark: ''
    });
    const handleChange = (event) => {
        setAddress({ ...address, [event.target.name]: event.target.value });
    };
    const handleSubmit = () => {
        if (address.country == '') {
            openToast('error', 'country is required');
            return;
        }
        if (address.city == '') {
            openToast('error', 'city is required');
            return;
        }

        if (address.street == '') {
            openToast('error', 'street is required');
            return;
        }
        if (address.landMark == '') {
            openToast('error', 'landMark is required');
            return;
        }

        setInfoUser([...infoUser, { ...address }]);
        toggleCheckoutPanel(false)();
        openToast('success', 'info successfully');
    }
    return (
        <Drawer open={openCheckoutPanel} onClose={toggleCheckoutPanel(false)} anchor='right'>
            <Box sx={{ width: { xs: '100%', sm: '500px' }, position: 'relative', height: '100vh' }}>
                <div className='flex justify-between items-center p-3 border-b-[1px] border-solid border-gray-400   bg-white'>
                    <h2 className='sm:text-[18px] text-[13px] font-[500]'>Add Delivery Address</h2>
                    <IoClose size={'22px'} className='!cursor-pointer' onClick={toggleCheckoutPanel(false)} />
                </div>
                <div className='p-3'>
                    <form action="">
                        <ReactFlagsSelect
                            name='country'
                            selected={selected}
                            onSelect={(code) => {
                                setAddress({ ...address, country: code });
                                setSelected(code)
                            }}
                            selectButtonClassName='flag-select-btn'
                            className="flag-wrapper"
                        />
                        <TextField
                            sx={{
                                '& input': {
                                    fontSize: '12px'
                                }
                                ,
                                '& .MuiInputLabel-root': {
                                    fontSize: '12px',
                                },
                                '& input::placeholder': {
                                    fontSize: '12px',
                                    opacity: 1,
                                },
                            }}
                            onChange={handleChange} size='small' fullWidth label="City" id="fullWidth" className='!border-[rgba(0,0,0,0.5)] !mb-4 !mt-4' name='city' />
                        <TextField
                            sx={{
                                '& input': {
                                    fontSize: '12px'
                                }
                                ,
                                '& .MuiInputLabel-root': {
                                    fontSize: '12px',
                                },
                                '& input::placeholder': {
                                    fontSize: '12px',
                                    opacity: 1,
                                },
                            }}
                            onChange={handleChange} size='small' fullWidth label="Street" id="fullWidth" className='!border-[rgba(0,0,0,0.5)] !mb-4' name='street' />

                        <TextField 
                        sx={{ 
                            '& input' : {
                                fontSize : '12px'
                            },
                            '& .MuiInputLabel-root' : {
                                fontSize : '12px'
                            },
                            '& .input::placeholder' : {
                                fontSize : '12px',
                                opacity : 1
                            }
                         }}
                        onChange={handleChange} size='small' fullWidth label="Landmark" id="fullWidth" className='!border-[rgba(0,0,0,0.5)] !mb-4' name='landmark' />
                    </form>
                    <Button onClick={handleSubmit} variant='contained' className='w-full !bg-primary !py-1 sm:!py-2 !text-[12px] sm:!text-[16px]'>Save</Button>
                </div>
            </Box>
        </Drawer>
    )
}

export default CheckoutPanel