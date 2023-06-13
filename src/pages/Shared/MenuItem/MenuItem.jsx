import React from 'react';

const MenuItem = ({ item }) => {
    const { _id, name, recipe, price, image } = item;
    return (
        <div className='flex gap-3 items-center justify-between'>
            <div style={{height:'100px', width:'118px'}} className='w-[118px] h-[100px]'>
                <img style={{borderRadius:'0px 200px 200px 200px'}} className='object-cover object-top w-full h-full border-2 border-[#BB8506]' src={image} alt="Item Image" />
            </div>
            <div>
                <h2 className='text-[#151515] text-xl uppercase'>{name}---------</h2>
                <p>{recipe}</p>
            </div>
            <div>
                <p className='text-[#BB8506]'>${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;