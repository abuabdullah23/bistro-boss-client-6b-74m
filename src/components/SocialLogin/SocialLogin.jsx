import React from 'react';
import { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);

    // redirect after login
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const signedUser = result.user;
                const { displayName, email, photoURL } = signedUser;
                const savedUser = { name: displayName, email: email, photo: photoURL }
                // user info add in MongoDb
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        navigate(from, { replace: true });
                    })

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully Signed Up with Google',
                    showConfirmButton: false,
                    timer: 1000
                })
            })
            .catch(error => {
                console.log(error.message)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Try Again!'
                })
            })
    }

    return (
        <div className='flex gap-10 justify-center mt-5'>
            <button className='flex items-center justify-center w-14 h-14 text-2xl font-bold rounded-full border-2 border-slate-800 hover:bg-slate-300'> <FaFacebook /> </button>

            <button onClick={handleGoogleSignIn} className='flex items-center justify-center w-14 h-14 text-2xl font-bold rounded-full border-2 border-slate-800 hover:bg-slate-300'> <FaGoogle /> </button>

            <button className='flex items-center justify-center w-14 h-14 text-2xl font-bold rounded-full border-2 border-slate-800 hover:bg-slate-300'><FaGithub /></button>
        </div>
    );
};

export default SocialLogin;