import React from 'react';
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useMenu from '../../../../hooks/useMenu';
import { Link } from 'react-router-dom';

const SingleItem = ({ item, index }) => {
    const { _id, name, image, category, price } = item;
    const [menu, refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

    const handleDeleteItem = id => {
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
                axiosSecure.delete(`/menu/${_id}`)
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
                    <div className='avatar border rounded-md p-2'>
                        <div className="rounded-lg w-20 h-20">
                            {image && <img src={image} />}
                        </div>
                    </div>
                </div>
            </td>
            <td className='text-slate-600'>
                <p className='text-lg font-semibold'>{name}</p>
                <p>Category: {category}</p>
            </td>
            <td className='text-slate-600 text-lg'>${price}</td>
            <td className='text-left'>
                <Link to={`/dashboard/update-menu/${_id}`}> <button className='bistro-bg hover:bg-[#a86d00] text-white rounded-md py-3 px-3'> <FaPenAlt /> </button></Link>
            </td>
            <td className='text-left'>
                <button onClick={() => handleDeleteItem(_id)} className='bg-[#B91C1C] hover:bg-[#df0e0e] text-white rounded-md py-3 px-3'> <FaTrashAlt /> </button>
            </td>
        </tr>
    );
};

export default SingleItem;