import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import { Helmet } from 'react-helmet-async';
import SingleUser from './SingleUser';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>
            <SectionTitle
                subHeading={'How many??'}
                heading={'MANAGE ALL USERS'}
            ></SectionTitle>

            <div className='bg-white md:px-10 my-10 p-5 rounded-lg'>
                <div className='uppercase flex items-center justify-between gap-5 font-semibold'>
                    <h2 className='text-3xl'>Total Users: {users.length}</h2>
                </div>

                {/* Table */}
                <div className="overflow-x-auto mt-5 rounded-t-xl">
                    <table className="table">
                        {/* head */}
                        <thead className='text-white text-xl uppercase'>
                            <tr className='bg-[#D1A054]'>
                                <th></th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Single User */}
                            {
                                users.map((user, index) => <SingleUser
                                    key={user._id}
                                    user={user}
                                    index={index}
                                    refetch={refetch}
                                ></SingleUser>)
                            }
                        </tbody>
                    </table>
                </div>


            </div>

            <div>
            </div>
        </div>
    );
};

export default AllUsers;