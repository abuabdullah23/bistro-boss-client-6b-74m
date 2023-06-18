import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useCart from '../../../../hooks/useCart';

const SingleCart = ({ row, index }) => {
    const { _id, price, email, name, image } = row;
    const [cart, refetch] = useCart();

    const handleDeleteCart = (id) => {
        console.log(id)
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
                fetch(`http://localhost:5000/carts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Successfully Deleted',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            refetch();
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
                <p>User Email: {email}</p>
            </td>
            <td className='text-slate-600 text-lg'>${price}</td>
            <td className='text-center '>
                <button onClick={() => handleDeleteCart(_id)} className='bg-[#B91C1C] hover:bg-[#df0e0e] text-white rounded-md py-3 px-3'> <FaTrashAlt /> </button>
            </td>
        </tr>

    );
};

export default SingleCart;