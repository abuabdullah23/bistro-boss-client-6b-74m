import React from 'react';
import { Link } from 'react-router-dom';

const BackToHome = () => {
    return (
        <div>
            <Link to="/"><button className='py-2 px-4 rounded-md text-xl font-bold hover:bg-[#D1A054] hover:text-white'>Back To Home</button></Link>
        </div>
    );
};

export default BackToHome;