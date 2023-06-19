import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../../components/SectionTitle';
import { ImSpoonKnife } from 'react-icons/im';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useMenu from '../../../../hooks/useMenu';

const img_hosting_token = import.meta.env.VITE_image_upload_token;
const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const [axiosSecure] = useAxiosSecure();
    const [, refetch] = useMenu();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.photoUrl[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgUrl = imgResponse.data.display_url;
                    const { name, recipe, category, price } = data;
                    const newItem = { name, recipe, category: category.toLowerCase(), price: parseInt(price), image: imgUrl }
                    // console.log(newItem);
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log(data)
                            if (data.data.insertedId) {
                                refetch();
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Done',
                                    text: `${name} is : Successfully Added in your website.`,
                                })
                            }
                        })
                }
            })
    };

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Add An Item</title>
            </Helmet>
            <SectionTitle
                subHeading={`What's new?`}
                heading={'Add An Item'}
            ></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)}
                className='mt-5 border rounded-lg p-5 md:px-16 md:py-10 bg-[#F3F3F3]'>
                {/* row 1 */}
                <div className='md:flex gap-4 mt-4'>
                    <div className='w-full'>
                        <p className='text-lg font-semibold ps-3 mb-1 mt-2'>Recipe Name <span className='text-red-400'>*</span> </p>
                        <input required className='py-2 px-3 border rounded-md w-full' type="text" name="name" {...register("name", { required: true })} id="name" placeholder='Recipe Name' />
                    </div>
                </div>

                {/* row 2 */}
                <div className='md:flex gap-4 mt-4'>
                    <div className='w-full'>
                        <p className='text-lg font-semibold ps-3 mb-1 mt-2'>Category<span className='text-red-400'>*</span> </p>
                        <select defaultValue="Salad" required className='py-2 px-3 border rounded-md w-full' type="text" name="category" id="category" {...register("category", { required: true })} placeholder='Category' >
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
                        <input required className='py-2 px-3 border rounded-md w-full' type="number" name="price" {...register("price", { required: true })} id="price" placeholder='Price in Dollar' />
                    </div>
                </div>
                {/* row 3 */}
                <div className='md:flex gap-4 mt-4'>
                    <div className='w-full'>
                        <p className='text-lg font-semibold ps-3 mb-1 mt-2'> Recipe Details</p>
                        <textarea className='py-2 px-3 border rounded-md w-full h-32' type="text" name="recipe"  {...register("recipe")} id="recipe" placeholder='Recipe Details' />
                    </div>
                </div>
                {/* row-4 */}
                <input type="file" className="file-input w-full max-w-xs mt-5 rounded-none" name="photoUrl"  {...register("photoUrl", { required: true })} />
                <br />
                <button className='flex gap-4 items-center text-white py-3 px-5 mt-5 w-fit font-bold bg-[#B58130] hover:bg-gradient-to-r to-[#B58130] from-[#835D23] text-xl mb-5' type='submit'>
                    <span>Add Item</span>
                    <ImSpoonKnife />
                </button>
            </form>
        </div>
    );
};

export default AddItems;