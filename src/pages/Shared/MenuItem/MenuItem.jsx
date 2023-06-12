import React from 'react';

const MenuItem = ({ item }) => {
    const { _id, name, recipe, price, image } = item;
    return (
        <div className='md:flex gap-3 items-center justify-between'>
            <div>
                <img style={{borderRadius:'0px 200px 200px 200px'}} className='w-[118px] h-[100px] object-cover border-2 border-[#BB8506]' src={image} alt="Item Image" />
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