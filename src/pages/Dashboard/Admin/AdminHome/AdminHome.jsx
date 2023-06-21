import React from 'react';
import { FaCarAlt, FaUserAlt, FaWallet } from 'react-icons/fa';
import { SiCodechef } from "react-icons/si";
import useMenu from '../../../../hooks/useMenu';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const AdminHome = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    const { menu } = useMenu();

    return (
        <div>
            <h2 className='text-3xl mb-5'>HI, Welcome Back!</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {/* revenue */}
                <div className='bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] rounded-md py-5 px-5 flex gap-6 items-center justify-center text-white'>
                    <FaWallet className='w-8 h-8' />
                    <div>
                        <h3 className='text-3xl font-bold'>1000</h3>
                        <p className='text-lg'>Revenue</p>
                    </div>
                </div>

                {/* Customers */}
                <div className='bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] rounded-md py-5 px-5 flex gap-6 items-center justify-center text-white'>
                    <FaUserAlt className='w-8 h-8' />
                    <div>
                        <h3 className='text-3xl font-bold'>{users.length}</h3>
                        <p className='text-lg'>Customers</p>
                    </div>
                </div>

                {/* Products */}
                <div className='bg-gradient-to-r from-[#FE4880] to-[#FECDE9] rounded-md py-5 px-5 flex gap-6 items-center justify-center text-white'>
                    <SiCodechef className='w-8 h-8' />
                    <div>
                        <h3 className='text-3xl font-bold'>{menu.length}</h3>
                        <p className='text-lg'>Products</p>
                    </div>
                </div>

                {/* Orders */}
                <div className='bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] rounded-md py-5 px-5 flex gap-6 items-center justify-center text-white'>
                    <FaCarAlt className='w-8 h-8' />
                    <div>
                        <h3 className='text-3xl font-bold'>500</h3>
                        <p className='text-lg'>Orders</p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default AdminHome;