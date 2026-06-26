import React, { useContext, useMemo, useState } from 'react'
import SidebarAccount from '../Component/SidebarAccount/SidebarAccount'
import { Autocomplete, Button, TextField } from '@mui/material'
import ReactFlagsSelect from "react-flags-select";
import { ContextUser } from '../Context/ContextUser';

const Profile = () => {
    const [selected, setSelected] = useState("");
    const { currentUser } = useContext(ContextUser);
    return (
        <div className='profile py-[40px]'>
            <div className="container">
                <div className='flex flex-col lg:flex-row gap-[40px]'>
                    <SidebarAccount active='profile' />
                    <div className='w-[100%] lg:w-[1000px] bg-white h-[450px] p-5 rounded-lg shadow-md'>
                        <div className='flex justify-between items-center border-b-[1px] border-solid border-gray-300 pb-4'>
                            <span className='font-[500] capitalize text-[13px] sm:text-[17px]'>my profile</span>
                            <Button variant='text' className='!capitalize !text-[13px] !sm:text-[17px] !text-black hover:!text-primary hover:!bg-transparent !transition !duration-150'>change password</Button>
                        </div>
                        <form action="" className='mt-5'>
                            <div className='flex flex-col sm:flex-row gap-3 mb-5'>
                                <TextField
                                    label="Full Name"
                                    type="text"
                                    className='w-[100%] sm:w-[50%] !p-0'
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            height: 50,
                                        },
                                        '& input': {
                                            height: '50px',
                                            padding: '0 14px',
                                            boxSizing: 'border-box',
                                        },
                                        '& .MuiInputLabel-root': {
                                            fontSize: '12px',
                                        },
                                        '& input::placeholder': {
                                            fontSize: '12px',
                                            opacity: 1,
                                        },
                                    }}
                                />
                                <TextField
                                    disabled
                                    id="outlined-disabled"
                                    label="Disabled"
                                    defaultValue={currentUser?.email}
                                    className='w-[100%] sm:w-[50%]'
                                    sx={{ 
                                        '& input':{
                                            fontSize : '12px'
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
                                />
                            </div>
                            <ReactFlagsSelect
                                selected={selected}
                                onSelect={(code) => setSelected(code)}
                                selectButtonClassName='flag-select-btn'
                                className="flag-wrapper"
                            />
                            <Button variant='contained' className='!bg-primary !mt-5 !capitalize !text-[12px]'>update profile</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile