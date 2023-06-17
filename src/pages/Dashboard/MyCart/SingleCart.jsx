import React from 'react';
import { FaTrash } from 'react-icons/fa';

const SingleCart = ({ row, index }) => {
    const { price, email, name, image } = row;
    return (
        <tr>
            <td className='font-bold text-xl'>{index + 1}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className='avatar border rounded-md p-2'>
                        <div className="rounded-lg w-24 h-24">
                            {image && <img src={image} />}
                        </div>
                    </div>
                </div>
            </td>
            <td className='text-slate-600'>
                <p className='text-lg font-semibold'>{name}</p>
                <p>User Email: {email}</p>
            </td>
            <td className='text-slate-600 text-lg'>${price}</td>
            <td className='text-center '>
                <button className='bg-[#B91C1C] hover:bg-[#df0e0e] text-white rounded-md py-3 px-3'> <FaTrash /> </button>
            </td>
        </tr>

    );
};

export default SingleCart;