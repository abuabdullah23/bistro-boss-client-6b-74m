import React from 'react';

const CommonButton = ({btnTitle}) => {
    return (
        <div className='text-center'>
            <button className='btn btn-outline border-0 border-b-4 hover:bg-black hover:text-white text-xl mt-10 mb-10 uppercase'>{btnTitle}</button>
        </div>
    );
};

export default CommonButton;