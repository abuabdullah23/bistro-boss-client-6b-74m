import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='mx-auto md:w-3/12 text-center my-10'>
            <p className='text-[#D99904]'>---{subHeading}---</p>

            <hr className='my-2 border border-[#E8E8E8]' />
            <h2 className='text-3xl'>{heading}</h2>
            <hr className='my-2 border border-[#E8E8E8]' />
        </div>
    );
};

export default SectionTitle;