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
import toast from 'react-hot-toast';
import { ContextToast } from '../Context/ContextToast';
import { ContextUser } from '../Context/ContextUser';

const Login = () => {
    const { openToast } = useContext(ContextToast);
    const { setUser, user, setCurrentUser } = useContext(ContextUser);
    const [formFields, setFormFields] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };
    const forgetPassword = () => {
        if (formFields.email !== '') {
            navigate('/verify')
        } else {
            openToast('error', 'please enter your email');
        }
    }
    const handleChange = (e) => {
        setFormFields({ ...formFields, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formFields.email === '') {
            openToast('error', 'email is required');
            return;
        }
        if (formFields.password === '') {
            openToast('error', 'password is required');
            return;
        }
        const foundUser = user.find(
            item => item.email === formFields.email && item.password === formFields.password
        );
        if (!foundUser) {
            openToast('error', 'Invalid email or password');
            return;
        }
        setCurrentUser(foundUser);
        openToast('success', 'user login successfully')
        navigate('/');

    }
    return (
        <section className='login flex items-center justify-center py-10'>
            <div className='w-[400px] bg-white rounded-lg py-5 shadow-md'>
                <h2 className='m-auto text-center text-[#000] text-[20px] font-[400] mb-4'>Login to your account</h2>
                <div className='w-[80%] m-auto'>
                    <form action="" className='flex flex-col'>
                        <TextField onChange={handleChange} name='email' fullWidth label="Email Id" id="fullWidth" className='!border-[rgba(0,0,0,0.5)] !mb-4' onChange={(e) => setFormFields({ email: e.target.value })} />
                        <FormControl fullWidth variant="outlined" className='!border-[rgba(0,0,0,0.5)] !mb-4'>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                onChange={handleChange}
                                id="outlined-adornment-password"
                                name='password'
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
                        <span className='text-[15px] font-[500]  hover:text-primary transition-all mb-4 cursor-pointer' onClick={forgetPassword}>
                            Forget Password?
                        </span>
                        <Button onClick={handleSubmit} variant='contained' className='!bg-primary !text-white !py-2 !mb-4'>Login</Button>
                        <span className='text-center font-[400] text-[15px] mb-4'>Not Registered <Link to={'/register'} className='text-primary font-[500]'>Register</Link></span>
                        <span className='text-[15px] font-[400] text-center tracking-wide mb-3'>Or continue with social account</span>
                        <Button variant='contained' className='!bg-[#f1f1f1] !text-black !shadow-none' startIcon={<FcGoogle />}>sign up with google</Button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login

// toast.custom((t) => (
//   <div
//     className={`${
//       t.visible ? 'animate-custom-enter' : 'animate-custom-leave'
//     } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
//   >
//     <div className="flex-1 w-0 p-4">
//       <div className="flex items-start">
//         <div className="flex-shrink-0 pt-0.5">
//           <img
//             className="h-10 w-10 rounded-full"
//             src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
//             alt=""
//           />
//         </div>
//         <div className="ml-3 flex-1">
//           <p className="text-sm font-medium text-gray-900">
//             Emilia Gates
//           </p>
//           <p className="mt-1 text-sm text-gray-500">
//             Sure! 8:30pm works great!
//           </p>
//         </div>
//       </div>
//     </div>
//     <div className="flex border-l border-gray-200">
//       <button
//         onClick={() => toast.dismiss(t.id)}
//         className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//       >
//         Close
//       </button>
//     </div>
//   </div>
// ))