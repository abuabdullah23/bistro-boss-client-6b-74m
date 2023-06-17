import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='flex justify-center'>
            <div className='mx-auto text-center'>
                <p className='text-[#D99904]'>---{subHeading}---</p>

                <hr className='my-2 border-2 border-[#E8E8E8]' />
                <h2 className='text-3xl'>{heading}</h2>
                <hr className='my-2 border-2 border-[#E8E8E8]' />
            </div>
        </div>
    );
};

export default SectionTitle;