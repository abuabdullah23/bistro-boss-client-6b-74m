import React from 'react';

const FoodCard = ({ item }) => {
    const {_id, image, name, price, recipe } = item;
    return (
        <div className='bg-[#F3F3F3] shadow-lg'>
            <div className='relative'>
                <img className='h-[300px] w-full object-cover' src={image} alt="" />
                <p className='absolute top-7 right-7 bg-slate-900 py-2 px-4 text-white text-lg font-semibold'>${price}</p>
            </div>
            <div className='text-center px-5 py-7'>
                <h2 className='text-3xl font-semibold mb-4'>{name}</h2>
                <p>{recipe}</p>
                <button className='uppercase text-xl text-[#BB8506] mt-5 btn btn-outline border-0 border-b-4 border-[#BB8506] bg-slate-200'>Add To Cart</button>
            </div>
        </div>
    );
};

export default FoodCard;