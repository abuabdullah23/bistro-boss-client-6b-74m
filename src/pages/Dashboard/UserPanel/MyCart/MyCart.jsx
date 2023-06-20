import React from 'react';

import SingleCart from './SingleCart';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../../components/SectionTitle';
import useCart from '../../../../hooks/useCart';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => (item.price + sum), 0);
    const totalPrice = parseFloat(total.toFixed(2))
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <SectionTitle
                subHeading={'My Cart'}
                heading={'WANNA ADD MORE?'}
            ></SectionTitle>

            <div className='bg-white p-5 md:p-10 rounded-lg'>
                <div className='uppercase flex items-center justify-between gap-5 font-semibold'>
                    <h2 className='text-3xl'>Total Orders : {cart.length}</h2>
                    <h2 className='text-3xl'>Total Price: ${totalPrice}</h2>
                    <Link to="/dashboard/payment">
                        <button className='bistro-bg hover:bg-[#c98200] p-4 rounded-md uppercase text-white'>Pay</button>
                    </Link>
                </div>

                {/* Table */}
                <div className="overflow-x-auto mt-5 rounded-t-xl">
                    <table className="table">
                        {/* head */}
                        <thead className='text-white text-xl'>
                            <tr className='bg-[#D1A054]'>
                                <th></th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row */}
                            {
                                cart.map((row, index) => <SingleCart
                                    key={row._id}
                                    row={row}
                                    index={index}
                                ></SingleCart>)
                            }
                        </tbody>
                    </table>
                </div>


            </div>

        </div>
    );
};

export default MyCart;