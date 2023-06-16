import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const FoodCard = ({ item }) => {
    const { _id, image, name, price, recipe } = item;
    const { user } = useContext(AuthContext);
    const [refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = foodItem => {
        console.log(foodItem)
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        refetch(); // to update the number of cart icon
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your food has been saved in cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        } else {
            Swal.fire({
                title: 'Warning',
                text: "Please login to add to cart!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            })
        }
    }
    return (
        <div className='bg-[#F3F3F3] shadow-lg'>
            <div className='relative'>
                <img className='h-[300px] w-full object-cover' src={image} alt="" />
                <p className='absolute top-7 right-7 bg-slate-900 py-2 px-4 text-white text-lg font-semibold'>${price}</p>
            </div>
            <div className='text-center px-5 py-7'>
                <h2 className='text-3xl font-semibold mb-4'>{name}</h2>
                <p>{recipe}</p>
                <button onClick={() => handleAddToCart(item)} className='uppercase text-xl text-[#BB8506] mt-5 btn btn-outline border-0 border-b-4 border-[#BB8506] bg-slate-200'>Add To Cart</button>
            </div>
        </div>
    );
};

export default FoodCard;