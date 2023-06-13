import React from 'react';
import './CategoryCover.css';

const CategoryCover = ({ title, subTitle }) => {
    return (
        <div className='category-cover-bg my-16 py-20'>
            <div className='flex justify-center items-center'>
                <div className='bg-black bg-opacity-75 w-9/12 text-center text-white p-20'>
                    <h2 className='uppercase text-4xl'>{title}</h2>
                    <p>{subTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryCover;