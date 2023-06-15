import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/others/authentication2.png'
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import BackToHome from '../../components/BackToHome';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';


const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const handleCreateUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

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
    }

    return (
        <div className='login-bg'>
            <div className='px-10 py-5'>
                <BackToHome></BackToHome>
            </div>

            <div className='md:p-20 p-5 md:flex gap-10 items-center'>
                <div className='w-full'>
                    <img src={loginImg} alt="" />
                </div>

                <div className='w-full'>
                    <div className='mb-10'>
                        <h2 className='text-4xl font-bold text-center'>Sign Up</h2>
                    </div>
                    <form onSubmit={handleCreateUser}>
                        <div className='mb-5'>
                            <p className='mb-2'>Name</p>
                            <input className='py-2 px-4 rounded-md w-full' type="text" required name="name" id="name" placeholder='Type Here' />
                        </div>
                        <div className='mb-5'>
                            <p className='mb-2'>Email</p>
                            <input className='py-2 px-4 rounded-md w-full' type="email" required name="email" id="email" placeholder='Type Here' />
                        </div>
                        <div className='mb-5'>
                            <p className='mb-2'>Password</p>
                            <input className='py-2 px-4 rounded-md w-full' type="password" required name="password" id="password" placeholder='Enter your password' />
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