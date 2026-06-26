import React from 'react'
import SidebarAccount from '../Component/SidebarAccount/SidebarAccount'
import { Button } from '@mui/material'

const Address = () => {
  return (
    <div className='profile py-[40px]'>
        <div className="container">
            <div className='flex gap-[40px]'>
                <SidebarAccount active='address'/>
                <div className='w-[700px] bg-white h-[450px] p-5 rounded-lg shadow-md'>
                        <div className='flex justify-between items-center border-b-[1px] border-solid border-gray-300 pb-4'>
                            <span className='font-[500] capitalize text-[17px]'>my profile</span>
                            <Button variant='text' className='!capitalize !text-[17px] !text-black hover:!text-primary hover:!bg-transparent !transition !duration-150'>change password</Button>
                        </div>
                        
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Address