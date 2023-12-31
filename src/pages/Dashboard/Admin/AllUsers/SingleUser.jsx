import React from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const SingleUser = ({ user, refetch, index }) => {
    const { _id, photo, name, email } = user;
    const [axiosSecure] = useAxiosSecure();

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

    const handleDeleteUser = id => {
        Swal.fire({
            title: 'Are you sure Delete?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${_id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Successfully Deleted',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: `Don't Deleted`,
                            })
                        }
                    })
            }
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
                        <button className='bg-green-600 hover:bg-green-700 text-white rounded-md py-3 px-3'> <FaUserShield className='w-4 h-4' /> </button>
                        :
                        <button onClick={() => handleMakeAdmin(_id)} className='bistro-bg hover:bg-[#d87a00] text-white rounded-md py-3 px-3'> <HiUserGroup className='w-4 h-4' /> </button>
                }
            </td>

            <td className='text-left'>
                <button onClick={()=> handleDeleteUser(_id)} className='bg-[#B91C1C] hover:bg-[#df0e0e] text-white rounded-md py-3 px-3'> <FaTrashAlt className='w-4 h-4' /> </button>
            </td>
        </tr>
    );
};

export default SingleUser;