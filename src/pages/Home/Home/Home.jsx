import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import CallUs from '../CallUs/CallUs';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import Featured from '../Featured/Featured';
import BistroBoss from '../BistroBoss/BistroBoss';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <BistroBoss/>
            <PopularMenu/>
            <CallUs/>
            <ChefRecommends/>
            <Featured/>
        </div>
    );
};

export default Home;