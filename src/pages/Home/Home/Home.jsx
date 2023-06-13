import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import CallUs from '../CallUs/CallUs';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import Featured from '../Featured/Featured';
import BistroBoss from '../BistroBoss/BistroBoss';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>

            <Banner />
            <Category />
            <BistroBoss />
            <PopularMenu />
            <CallUs />
            <ChefRecommends />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;