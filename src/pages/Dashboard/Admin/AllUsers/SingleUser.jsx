import React from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import Swal from 'sweetalert2';

const SingleUser = ({ user, refetch, index }) => {
    const { _id, photo, name, email } = user;

    const handleMakeAdmin = id => {
        console.log(id)
        fetch(`http://localhost:5000/users/admin/${_id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                Swal.fire({
                    icon: 'success',
                    title: 'Done',
                    text: `${name} : Successfully Has been Admin`,
                })
            })
    }

    return (
        <tr className='hover:bg-[#e7e7e7] shadow-md'>
            <td className='font-bold text-xl'>{index + 1}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className='avatar border rounded-sm p-1'>
                        <div className="rounded-sm w-10 h-10">
                            {photo && <img src={photo} />}
                        </div>
                    </div>
                </div>
            </td>
            <td className='text-slate-600'>
                <p className='text-lg font-semibold'>{name}</p>
                <p>User Email: {email}</p>
            </td>

            <td className='text-left'>
                {
                    user.role === 'admin' ?
                        <button className='bg-green-600 hover:bg-green-700 text-white rounded-md py-3 px-3'> <FaUserShield className='w-5 h-5' /> </button>
                        :
                        <button onClick={() => handleMakeAdmin(_id)} className='bistro-bg hover:bg-[#d87a00] text-white rounded-md py-3 px-3'> <HiUserGroup className='w-5 h-5' /> </button>
                }
            </td>

            <td className='text-left'>
                <button className='bg-[#B91C1C] hover:bg-[#df0e0e] text-white rounded-md py-3 px-3'> <FaTrashAlt className='w-5 h-5' /> </button>
            </td>
        </tr>
    );
};

export default SingleUser;