import React, { useContext, useEffect, useRef, useState } from 'react';
import './Login.css';
import loginImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import BackToHome from '../../components/BackToHome';
import { AuthContext } from '../../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';


const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true)

    const { signIn } = useContext(AuthContext);

    // for Captcha
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                Swal.fire({
                    icon: 'success',
                    title: 'Welcome...',
                    text: `${result.user.email} is : Successfully Logged In`,
                })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,
                })
            })

    }

    const handleValidateCaptcha = (event) => {
        const user_captcha_value = event.target.value;
        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Captcha Matched',
                showConfirmButton: false,
                timer: 500
            })
        }
        else {
            setDisabled(true)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Captcha Does Not Match!'
            })
        }
    }

    return (
        <div className='login-bg'>
            <div className='px-10 py-2'>
                <BackToHome></BackToHome>
            </div>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className='md:px-20 p-5 md:flex gap-10 items-center drop-shadow-sm'>
                <div className='w-full'>
                    <img src={loginImg} alt="" />
                </div>

                <div className='w-full'>
                    <div className='mb-10'>
                        <h2 className='text-4xl font-bold text-center'>Login</h2>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className='mb-5'>
                            <p className='mb-2'>Email</p>
                            <input className='py-2 px-4 rounded-md w-full' type="email" required name="email" id="email" placeholder='Type Here' />
                        </div>
                        <div className='mb-5'>
                            <p className='mb-2'>Password</p>
                            <input className='py-2 px-4 rounded-md w-full' type="password" required name="password" id="password" placeholder='Enter your password' />
                        </div>

                        {/* captcha */}
                        <div className='mb-5'>
                            <LoadCanvasTemplate />

                            <input onBlur={handleValidateCaptcha} className='py-2 px-4 rounded-md w-full mt-4' type="text" required name="captcha" id="captcha" placeholder='Type Captcha here' />
                            {/* <button className='mt-3 py-2 px-3 rounded-md text-blue-600 hover:text-white bg-white hover:bg-[#D1A054]'>Validate</button> */}
                        </div>
                        <button disabled={disabled} type='submit' className='w-full py-3 px-5 text-white rounded-md bg-[#D1A054] hover:bg-[#b67a21]'>Sign In</button>
                    </form>

                    <div className='text-center text-xl mt-5'>
                        <p className='text-[#D1A054] mb-3'>New here? <Link to="/sign-up" className='font-bold'>Create a New Account</Link></p>
                        <p>Or sign in with</p>
                    </div>
                    <SocialLogin />
                </div>
            </div >
        </div>
    );
};

export default Login;