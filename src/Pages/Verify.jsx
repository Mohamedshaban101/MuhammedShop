import React, { useState } from 'react'
import { Button } from '@mui/material';
import OtpBox from '../Component/OtpBox/OtpBox';
const Verify = () => {
  const [otp , setOtp] = useState(false);

  const handleChange = (value) => {
    setOtp(value);
  }
  const verifyOtp = () => {
    alert(otp);
  }
  return (
    <section className='flex items-center justify-center py-10'>
      <div className='w-[300px] md:w-[400px] bg-white rounded-lg py-5 shadow-md'>
        <div className='w-[80%] m-auto flex flex-col items-center gap-2'>
          <div className='w-[70px]'>
            <img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782412711/verify3_lpmo0e.png'} alt="w-full" />
          </div>
          <h2 className='text-center text-[#000] text-[20px] font-[600]'>Verify OTP</h2>
          <span className='font-[300]'>OTP send to</span>
          <span className='font-[500] text-primary'>muhammedshaban101@gmail.com</span>
          <OtpBox length={6} handleChange={handleChange}/>
          <Button variant='contained' className='!bg-primary !w-full !py-2 !mt-2' onClick={verifyOtp}>
            verify otp
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Verify