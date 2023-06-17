import React from 'react';
import { FaBars, FaBook, FaCalendar, FaHamburger, FaHome, FaInbox, FaShoppingBag, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { MdReviews } from "react-icons/md";
import { Link, Outlet } from 'react-router-dom';
import ActiveLink from '../components/ActiveLink/ActiveLink';

const Dashboard = () => {

    const navItem = <>
        <li><Link to="/" className='flex flex-col uppercase px-3 py-2 rounded-md justify-center mb-10'>
            <p className="text-3xl font-bold">Bistro Boss</p>
            <p className='tracking-[.6em]'>Restaurant</p>
        </Link></li>
        <li>
            <div className='flex items-center gap-4 justify-start'>
                <FaHome />
                <ActiveLink to="/dashboard/user-home">  User Home</ActiveLink>
            </div>
        </li>


        <li>
            <div className='flex items-center gap-4 justify-start'>
                <FaCalendar />
                <ActiveLink to="/dashboard/reservation"> reservation</ActiveLink>
            </div>
        </li>


        <li>
            <div className='flex items-center gap-4 justify-start'>
                <FaWallet />
                <ActiveLink to="/dashboard/history"> payment history</ActiveLink>
            </div>
        </li>


        <li>
            <div className='flex items-center gap-4 justify-start'>
                <FaShoppingCart/>
                <ActiveLink to="/dashboard/mycart">  my cart</ActiveLink>
            </div>
        </li>


        <li>
            <div className='flex items-center gap-4 justify-start'>
                <MdReviews />
                <ActiveLink to="/dashboard/review">  add review</ActiveLink>
            </div>
        </li>


        <li>
            <div className='flex items-center gap-4 justify-start'>
                <FaBook />
                <ActiveLink to="/dashboard/booking">  my booking</ActiveLink>
            </div>
        </li>

        <hr className='w-full my-5' />
        <li>
            <div className='flex items-center gap-4 justify-start'>
                <FaHome />
                <ActiveLink to="/dashboard/home">  Home</ActiveLink>
            </div>
        </li>


        <li>
            <div className='flex items-center gap-4 justify-start'>
                <FaBars />
                <ActiveLink to="/dashboard/menu">  Menu</ActiveLink>
            </div>
        </li>


        <li>
            <div className='flex items-center gap-4 justify-start'>
                <FaShoppingBag />
                <ActiveLink to="/dashboard/shop">  Shop</ActiveLink>
            </div>
        </li>


        <li>
            <div className='flex items-center gap-4 justify-start'>
                <FaInbox />
                <ActiveLink to="/dashboard/contact">  Contact</ActiveLink>
            </div>
        </li>
    </>

    return (
        <div>
            <div className="drawer md:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col justify-start">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="m-4 btn btn-square btn-ghost fixed z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current md:hidden"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <div className='md:py-10 h-full p-5 bg-[#ececec]'>
                        <Outlet />
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul style={{fontSize: '17px'}} className="menu p-4 w-80 md:h-full bistro-bg uppercase">
                        {/* Sidebar content here */}
                        {navItem}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;