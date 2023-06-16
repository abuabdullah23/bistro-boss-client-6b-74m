import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navOptions =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Contact Us</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/menu">Our Menu</Link></li>
            <li><Link to="/order/offered">Order Food</Link></li>
            <li><Link to="/secret">Secret</Link></li>
        </>

    // handleLogOut
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Welcome...',
                    text: `Successfully Log Out`,
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
        <>
            <div className="navbar fixed z-10 max-w-7xl bg-[#151515] bg-opacity-80 text-white">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black uppercase">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to="/" className='uppercase px-3 py-2 hover:bg-black rounded-md'>
                        <p className="text-2xl font-semi-bold">Bistro Boss</p>
                        <p className='tracking-[.32em]'>Restaurant</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 uppercase">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end md:flex gap-5 mr-10 text-lg font-semibold">
                    {
                        user
                            ? <>
                                <button onClick={handleLogOut} className='hover:bg-white hover:text-black py-2 px-3 rounded-md'>Log Out</button>
                                <img className='w-10 h-10 rounded-full object-cover cursor-pointer' src={user?.photoURL} title={user?.displayName} alt={user?.displayName} />
                            </>
                            : <Link className='hover:bg-white hover:text-black py-2 px-3 rounded-md' to="/login">Login</Link>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;