import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import SectionTitle from '../../../components/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import coverImg from '../../../assets/menu/banner3.jpg'
import MenuItem from '../../Shared/MenuItem/MenuItem';
import CommonButton from '../../../components/CommonButton';
import CategoryCover from '../../../components/CategoryCover/CategoryCover';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');

    return (
        <div>
            {/* for Title */}
            <Helmet><title>Bistro Boss | Menu</title></Helmet>

            {/* Cover Menu */}
            <Cover
                bgImage={coverImg}
                title={"Our Menu"}
                subTitle={"Would you like to try a dish?"}
            ></Cover>

            {/* Offered category section */}
            <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"}></SectionTitle>
            <MenuCategory
                items={offered}
                title="offered"
            ></MenuCategory>


            {/* Desserts Menu Section */}
            <CategoryCover
                title={"Desserts"}
                subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></CategoryCover>

            <MenuCategory
                items={desserts}
                title="desserts"
            ></MenuCategory>

            {/* Pizza Menu Section */}
            <CategoryCover
                title={"Pizza"}
                subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></CategoryCover>
            <MenuCategory
                items={pizza}
                title="pizza"
            ></MenuCategory>

            {/* salads Menu Section */}
            <CategoryCover
                title={"Salads"}
                subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} ></CategoryCover>
            <MenuCategory
                items={salads}
                title={"salads"}
            ></MenuCategory>

            {/* Soups Menu Section */}
            <CategoryCover
                title={"Soups"}
                subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></CategoryCover>
            <MenuCategory
                items={soups}
                title={'soups'}
            ></MenuCategory>

        </div>
    );
};

export default Menu;