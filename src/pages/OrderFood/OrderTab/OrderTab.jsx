import React from 'react';
import FoodCard from '../../../components/FoodCard/FoodCard';
import CommonButton from '../../../components/CommonButton';
import { Link } from 'react-router-dom';

const OrderTab = ({ items }) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
                {
                    items.map(item => <FoodCard
                        key={item._id}
                        item={item}
                    ></FoodCard>)
                }
            </div>
            <Link>
                <CommonButton btnTitle={"ORDER YOUR FAVOURITE FOOD"}></CommonButton>
            </Link>
        </div>
    );
};

export default OrderTab;