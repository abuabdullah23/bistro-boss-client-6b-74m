import React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className='flex gap-10 justify-center mt-5'>
            <button className='flex items-center justify-center w-14 h-14 text-2xl font-bold rounded-full border-2 border-slate-800 hover:bg-slate-300'> <FaFacebook/> </button>
            <button className='flex items-center justify-center w-14 h-14 text-2xl font-bold rounded-full border-2 border-slate-800 hover:bg-slate-300'> <FaGoogle/> </button>
            <button className='flex items-center justify-center w-14 h-14 text-2xl font-bold rounded-full border-2 border-slate-800 hover:bg-slate-300'><FaGithub/></button>
        </div>
    );
};

export default SocialLogin;