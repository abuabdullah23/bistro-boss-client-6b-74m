import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../../components/SectionTitle';
import useMenu from '../../../../hooks/useMenu';
import SingleItem from './SingleItem';

const ManageItems = () => {
    const [menu] = useMenu();
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Manage Items</title>
            </Helmet>
            <SectionTitle
                subHeading={'Hurry Up!'}
                heading={'MANAGE ALL ITEMS'}
            ></SectionTitle>

            <div className='bg-white p-5 md:p-10 rounded-lg'>
                <div className='uppercase font-semibold'>
                    <h2 className='text-3xl'>Total Items : {menu.length}</h2>
                </div>

                {/* Table */}
                <div className="overflow-x-auto mt-5 rounded-t-xl">
                    <table className="table">
                        {/* head */}
                        <thead className='text-white uppercase text-xl'>
                            <tr className='bg-[#D1A054]'>
                                <th></th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row */}
                            {
                                menu.map((item, index) => <SingleItem
                                    key={item._id}
                                    item={item}
                                    index={index}
                                ></SingleItem>)
                            }
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    );
};

export default ManageItems;