import React from 'react';
import { FaBars, FaBook, FaCalendar, FaHome, FaInbox, FaShoppingBag, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { MdReviews } from "react-icons/md";
import { Link, Outlet } from 'react-router-dom';
import ActiveLink from '../components/ActiveLink/ActiveLink';
import useCart from '../hooks/useCart';
import { ImSpoonKnife, ImList2 } from "react-icons/im";
import { HiUserGroup } from "react-icons/hi";
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart();

    // TODO: load data from the server to admin have to dynamic
    // const isAdmin = false;
    // const isAdmin = true;
    const {isAdmin} = useAdmin();

    const navItem = <>
        <li><Link to="/" className='flex flex-col uppercase px-3 py-2 rounded-md justify-center mb-10'>
            <p className="text-3xl font-bold">Bistro Boss</p>
            <p className='tracking-[.6em]'>Restaurant</p>
        </Link></li>

        {/* Conditional Rendering */}
        {
            isAdmin
                ?
                <>
                    <li>
                        <div className='flex items-center gap-4 justify-start tracking-normal'>
                            <FaHome />
                            <ActiveLink to="/dashboard/admin-home">  Admin Home</ActiveLink>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center gap-4 justify-start tracking-normal'>
                            <ImSpoonKnife />
                            <ActiveLink to="/dashboard/add-items"> Add Items</ActiveLink>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center gap-4 justify-start tracking-normal'>
                            <ImList2 />
                            <ActiveLink to="/dashboard/manage-items"> Manage Items</ActiveLink>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center gap-4 justify-start tracking-normal'>
                            <FaBook />
                            <ActiveLink to="/dashboard/manage-bookings">  Manage Bookings</ActiveLink>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center gap-4 justify-start tracking-normal'>
                            <HiUserGroup />
                            <ActiveLink to="/dashboard/all-users">All users</ActiveLink>
                        </div>
                    </li>
                </>
                :
                <>
                    <li>
                        <div className='flex items-center gap-4 justify-start tracking-normal'>
                            <FaHome />
                            <ActiveLink to="/dashboard/user-home">  User Home</ActiveLink>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center gap-4 justify-start tracking-normal'>
                            <FaCalendar />
                            <ActiveLink to="/dashboard/reservation"> reservation</ActiveLink>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center gap-4 justify-start tracking-normal'>
                            <FaWallet />
                            <ActiveLink to="/dashboard/history"> payment history</ActiveLink>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center gap-4 justify-start tracking-normal'>
                            <FaShoppingCart />
                            <ActiveLink to="/dashboard/mycart">  my cart</ActiveLink>
                            <span className="indicator-item badge badge-neutral text-white">{cart?.length || 0}</span>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center gap-4 justify-start tracking-normal'>
                            <MdReviews />
                            <ActiveLink to="/dashboard/review">  add review</ActiveLink>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center gap-4 justify-start tracking-normal'>
                            <FaBook />
                            <ActiveLink to="/dashboard/booking">  my booking</ActiveLink>
                        </div>
                    </li>
                </>
        }


        <hr className='w-full my-5' />
        <li>
            <div className='flex items-center gap-4 justify-start tracking-normal'>
                <FaHome />
                <ActiveLink to="/dashboard/home"> Home</ActiveLink>
            </div>
        </li>


        <li>
            <div className='flex items-center gap-4 justify-start tracking-normal'>
                <FaBars />
                <ActiveLink to="/dashboard/menu"> Menu</ActiveLink>
            </div>
        </li>


        <li>
            <div className='flex items-center gap-4 justify-start tracking-normal'>
                <FaShoppingBag />
                <ActiveLink to="/dashboard/shop">  Shop</ActiveLink>
            </div>
        </li>


        <li>
            <div className='flex items-center gap-4 justify-start tracking-normal'>
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
                    
                    {/* style={{ width: '1024px' }} md:absolute md:left-64 overflow-y-auto */}
                    <div className='md:py-10 p-5 bg-[#ececec]'>
                        <Outlet />
                    </div>
                </div>

                <div className="drawer-side h-screen">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    {/* md:fixed md:top-0 */}
                    <ul style={{ fontSize: '16px' }} className="menu p-4 w-64 md:h-full bistro-bg uppercase">
                        {/* Sidebar content here */}
                        {navItem}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;