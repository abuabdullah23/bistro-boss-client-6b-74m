import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../components/FoodCard/FoodCard';

const ChefRecommends = () => {
    const [menu] = useMenu();
    const chefRecommends = menu.slice(0, 3).filter(item => item);
    return (
        <div>
            <SectionTitle
                subHeading={"Should Try"}
                heading={"CHEF RECOMMENDS"}
            ></SectionTitle>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-7 mb-20'>
                {
                    chefRecommends.map(item => <FoodCard
                        key={item._id}
                        item={item}
                    ></FoodCard>)
                }
            </div>


        </div>
    );
};

export default ChefRecommends;