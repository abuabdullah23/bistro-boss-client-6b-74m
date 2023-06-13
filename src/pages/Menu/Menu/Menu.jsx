import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import SectionTitle from '../../../components/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import coverImg from '../../../assets/menu/banner3.jpg'
import MenuItem from '../../Shared/MenuItem/MenuItem';
import CommonButton from '../../../components/CommonButton';
import CategoryCover from '../../../components/CategoryCover/CategoryCover';

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');

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

            {/* category section */}
            <SectionTitle
                subHeading={"Don't miss"}
                heading={"TODAY'S OFFER"}
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 p-5 md:p-0'>
                {
                    offered.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <CommonButton
                btnTitle={'ORDER YOUR FAVOURITE FOOD'}
            ></CommonButton>

            {/* Desserts Menu Section */}
            <CategoryCover
                title={"Desserts"}
                subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></CategoryCover>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 p-5 md:p-0'>
                {
                    dessert.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <CommonButton
                btnTitle={'ORDER YOUR FAVOURITE FOOD'}
            ></CommonButton>

            {/* Pizza Menu Section */}
            <CategoryCover
                title={"Pizza"}
                subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></CategoryCover>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 p-5 md:p-0'>
                {
                    pizza.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <CommonButton
                btnTitle={'ORDER YOUR FAVOURITE FOOD'}
            ></CommonButton>


            {/* salads Menu Section */}
            <CategoryCover
                title={"Salads"}
                subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></CategoryCover>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 p-5 md:p-0'>
                {
                    salad.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <CommonButton
                btnTitle={'ORDER YOUR FAVOURITE FOOD'}
            ></CommonButton>

            {/* Soups Menu Section */}
            <CategoryCover
                title={"Soups"}
                subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></CategoryCover>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 p-5 md:p-0'>
                {
                    soup.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <CommonButton
                btnTitle={'ORDER YOUR FAVOURITE FOOD'}
            ></CommonButton>





        </div>
    );
};

export default Menu;