import React, { useContext, useState } from 'react'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { FcGoogle } from "react-icons/fc";
import { ContextToast } from '../Context/ContextToast';
import { ContextUser } from '../Context/ContextUser';
import {v4 as uuidv4} from 'uuid';
const Register = () => {
    const { openToast } = useContext(ContextToast);
    const { setUser, user, setCurrentUser } = useContext(ContextUser);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    });
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };


    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

    const handleMouseDownConfirmPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpConfirmPassword = (event) => {
        event.preventDefault();
    };


    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userData.name === '') {
            openToast('error', 'name is required');
            return;
        }
        if (userData.email === '') {
            openToast('error', 'email is required');
            return;
        }
        if (userData.password === '') {
            openToast('error', 'password is required');
            return;
        }
        if (userData.confirm_password === '') {
            openToast('error', 'confirm password is required');
        } else {
            if (userData.password !== userData.confirm_password) {
                openToast('error', 'Password and Confirm Password must match.')
            }
        }
        const userExists = user.some(
            item => item.email === userData.email
        );
        if (userExists) {
            navigate('/login')
            openToast('error', 'already have account')
            return;
        }
        const updateUser = [...user, {id : uuidv4() ,...userData}];
        setUser(updateUser)
        setCurrentUser({id : uuidv4(),...userData});
        navigate('/');
    }
    return (
        <section className='register flex items-center justify-center py-10'>
            <div className='w-[400px] bg-white rounded-lg py-5 shadow-md'>
                <h2 className='m-auto text-center text-[#000] text-[20px] font-[400] mb-4'>Register with a new account</h2>
                <div className='w-[80%] m-auto'>
                    <form action="" className='flex flex-col'>
                        <TextField required onChange={handleChange} name='name' fullWidth label="Full Name" id="fullWidth" className='!border-[rgba(0,0,0,0.5)] !mb-4' />
                        <TextField required onChange={handleChange} name='email' fullWidth label="Email Id" id="fullWidth" className='!border-[rgba(0,0,0,0.5)] !mb-4' />
                        <FormControl fullWidth variant="outlined" className='!border-[rgba(0,0,0,0.5)] !mb-4'>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                onChange={handleChange}
                                name='password'
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            onMouseUp={handleMouseUpPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <FormControl fullWidth variant="outlined" className='!border-[rgba(0,0,0,0.5)] !mb-4'>
                            <InputLabel htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
                            <OutlinedInput
                                required
                                onChange={handleChange}
                                name='confirm_password'
                                id="outlined-adornment-confirm-password"
                                type={showConfirmPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={
                                                showConfirmPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={handleClickShowConfirmPassword}
                                            onMouseDown={handleMouseDownConfirmPassword}
                                            onMouseUp={handleMouseUpConfirmPassword}
                                            edge="end"
                                        >
                                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="confirm password"
                            />
                        </FormControl>
                        <Button onClick={handleSubmit} variant='contained' className='!bg-primary !text-white !py-2 !mb-4'>Register</Button>
                        <span className='text-center font-[400] text-[15px] mb-4'>Already have an account? <Link to={'/login'} className='text-primary font-[500]'>Login</Link></span>
                        <span className='text-[15px] font-[400] text-center tracking-wide mb-3'>Or continue with social account</span>
                        <Button variant='contained' className='!bg-[#f1f1f1] !text-black !shadow-none' startIcon={<FcGoogle />}>sign up with google</Button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Register