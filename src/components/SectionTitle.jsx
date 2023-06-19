import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='flex justify-center mb-10'>
            <div className='mx-auto text-center'>
                <p className='text-[#D99904] italic'>---{subHeading}---</p>

                <hr className='my-2 border-2 border-[#E8E8E8]' />
                <h2 className='text-3xl px-10 uppercase'>{heading}</h2>
                <hr className='my-2 border-2 border-[#E8E8E8]' />
            </div>
        </div>
    );
};

export default SectionTitle;