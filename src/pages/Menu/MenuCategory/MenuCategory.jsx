import React from 'react';
import { Link } from 'react-router-dom';
import CommonButton from '../../../components/CommonButton';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({ items, title }) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 p-5 md:p-0'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <CommonButton
                    btnTitle={'ORDER YOUR FAVOURITE FOOD'}
                ></CommonButton>
            </Link>
        </div>
    );
};

export default MenuCategory;