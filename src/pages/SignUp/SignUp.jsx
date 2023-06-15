import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/others/authentication2.png'
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import BackToHome from '../../components/BackToHome';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';

const SignUp = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const email = data.email;
        const password = data.password;
        createUser(email, password)
            .then(result => {
                Swal.fire({
                    icon: 'success',
                    title: 'Welcome...',
                    text: `${result.user.email} is : Successfully Signed Up`,
                })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,
                })
            })
    };
    const { createUser } = useContext(AuthContext);


    return (
        <div className='login-bg'>
            <div className='px-10 py-2'>
                <BackToHome></BackToHome>
            </div>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className='md:px-20 p-5 md:flex md:flex-row-reverse gap-10 items-center drop-shadow-sm'>
                <div className='w-full'>
                    <img src={loginImg} alt="" />
                </div>

                <div className='w-full'>
                    <div className='mb-10'>
                        <h2 className='text-4xl font-bold text-center'>Sign Up</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Name */}
                        <div className='mb-5'>
                            <p className='mb-2'>Name</p>
                            <input className='py-2 px-4 rounded-md w-full' type="text" {...register("name", { required: true })} required name="name" id="name" placeholder='Type Here' />
                            {errors.name && <span className='text-red-500 mt-2'>Name is required</span>}
                        </div>

                        {/* Email */}
                        <div className='mb-5'>
                            <p className='mb-2'>Email</p>
                            <input className='py-2 px-4 rounded-md w-full' type="email" {...register("email", { required: true })} required name="email" id="email" placeholder='Type Here' />
                            {errors.email && <span className='text-red-500 mt-2'>Email is required</span>}
                        </div>

                        {/* Password */}
                        {/* https://stackoverflow.com/questions/5142103/regex-to-validate-password-strength */}
                        <div className='mb-5'>
                            <p className='mb-2'>Password</p>
                            <input className='py-2 px-4 rounded-md w-full' type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/

                            })} required name="password" id="password" placeholder='Enter your password' />
                            {errors.password?.type === 'required' && <span className='text-red-500 mt-2'>Password is required</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-500 mt-2'>Length should be 6 character</span>}
                            {errors.password?.type === 'maxLength' && <span className='text-red-500 mt-2'>Length should be less then 21</span>}
                            {errors.password?.type === 'pattern' && <span className='text-red-500 mt-2'>Password must be One uppercase, one special character, one number and one small character.</span>}
                        </div>

                        <button type='submit' className='w-full py-3 px-5 text-white rounded-md bg-[#D1A054] hover:bg-[#b67a21]'>Sign Up</button>
                    </form>

                    <div className='text-center text-xl mt-5'>
                        <p className='text-[#D1A054] mb-3'>Already registered?<Link to="/login" className='font-bold'> go to log in</Link></p>
                        <p>Or sign up with</p>
                    </div>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default SignUp;