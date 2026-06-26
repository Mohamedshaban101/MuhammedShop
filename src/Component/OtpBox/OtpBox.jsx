import React, { useState } from 'react'

const OtpBox = ({ length, handleChange }) => {
    const [otp, setOtp] = useState(new Array(length).fill(''));
    const handleOtpChange = (e, index) => {
        const value = e.target.value;
        if (isNaN(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        handleChange(newOtp.join(""))
        if (value && index < length - 1) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
    }
    const handleOtpKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            document.getElementById(`otp-input-${index - 1}`).focus();
        }
    }
    return (
        <div className='otpBox flex justify-center items-center gap-[10px]'>
            {
                otp.map((data, index) => {
                    return (
                        <input onChange={(e) => handleOtpChange(e, index)} onKeyDown={(e) => handleOtpKeyDown(e, index)} type='text' key={index} id={`otp-input-${index}`} maxLength={1} className='w-[30px] sm:w-[45px] h-[30px] sm:h-[45px] border border-solid border-[rgba(0,0,0,.03)] rounded-md outline-none text-[17px] text-center' />
                    );
                })
            }
        </div>
    )
}

export default OtpBox