import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import SectionTitle from '../../../../components/SectionTitle';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const UpdateItem = () => {
    const { register, handleSubmit } = useForm();
    const item = useLoaderData();
    const [axiosSecure] = useAxiosSecure();

    const onSubmit = data => {
        // update single menu Item
        const {name, price, category, recipe} = data;
        const updateItem = {name, price: parseInt(price), category: category.toLowerCase(), recipe}

        axiosSecure.put('/dashboard/update-menu', updateItem)
        .then(res=>{
            console.log(res.data);
        })    
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Update Item</title>
            </Helmet>
            <SectionTitle
                subHeading={`What's Update?`}
                heading={'UPDATE ITEM'}
            ></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)}
                className='mt-5 border rounded-lg p-5 md:p-16 bg-[#F3F3F3]'>
                {/* row 1 */}
                <div className='md:flex gap-4 mt-4'>
                    <div className='w-full'>
                        <p className='text-lg font-semibold ps-3 mb-1 mt-2'>Recipe Name <span className='text-red-400'>*</span> </p>
                        <input required className='py-2 px-3 border rounded-md w-full' type="text" name="name" {...register("name", { required: true })} id="name" placeholder='Recipe Name' defaultValue={item.name} />
                    </div>
                </div>

                {/* row 2 */}
                <div className='md:flex gap-4 mt-4'>
                    <div className='w-full'>
                        <p className='text-lg font-semibold ps-3 mb-1 mt-2'>Category<span className='text-red-400'>*</span> </p>
                        <select defaultValue={item.category} required className='py-2 px-3 border rounded-md w-full' type="text" name="category" id="category" {...register("category", { required: true })} placeholder='Category' >
                            <option disabled>Select One</option>
                            <option>Salad</option>
                            <option>Soup</option>
                            <option>Pizza</option>
                            <option>Dessert</option>
                            <option>Popular</option>
                            <option>Drinks</option>
                            <option>Offered</option>
                        </select>
                    </div>
                    <div className='w-full'>
                        <p className='text-lg font-semibold ps-3 mb-1 mt-2'>$ Price <span className='text-red-400'>*</span> </p>
                        <input required className='py-2 px-3 border rounded-md w-full' type="number" name="price" {...register("price", { required: true })} id="price" placeholder='Price in Dollar' defaultValue={item.price} />
                    </div>
                </div>
                {/* row 3 */}
                <div className='md:flex gap-4 mt-4'>
                    <div className='w-full'>
                        <p className='text-lg font-semibold ps-3 mb-1 mt-2'> Recipe Details</p>
                        <textarea className='py-2 px-3 border rounded-md w-full h-32' type="text" name="recipe"  {...register("recipe")} id="recipe" placeholder='Recipe Details' defaultValue={item.recipe} />
                    </div>
                </div>
                {/* row-4 */}
                <div className='flex justify-center'>
                    <button className='flex gap-4 items-center text-white py-3 px-5 mt-5 font-bold bg-[#B58130] hover:bg-gradient-to-r to-[#B58130] from-[#835D23] text-xl mb-5' type='submit'>
                        <span>Update Recipe Details</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateItem;

// fetch(`http://localhost:5000/dashboard/update-menu/${item._id}`, {
//             method: "PUT",
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(updateItem)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
                
//             })
//         console.log(data)
//     };

// if (data.modifiedCount > 0) {
//     // ==================== Success Alert
//     Swal.fire({
//         title: 'Updated!',
//         text: 'Successfully updated this Item information!',
//         icon: 'success',
//         confirmButtonText: 'ok'
//     })
//     // ==================== Success Alert 
// } else {
//     // ==================== Error Alert
//     Swal.fire({
//         title: 'Not Updated Anything!',
//         text: `Please change value of this item information!`,
//         icon: 'error',
//         confirmButtonText: 'Ok'
//     })
//     // ==================== Error Alert
// }