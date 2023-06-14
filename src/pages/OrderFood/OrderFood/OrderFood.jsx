import React, { useState } from 'react';
import Cover from '../../Shared/Cover/Cover';
import coverOrderBg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../components/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';

const OrderFood = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Cover
                bgImage={coverOrderBg}
                title={'Our Shop'}
                subTitle={"Would you like to try a dish?"}
            ></Cover>

            <div className="my-10 text-center">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <div className='mb-10 bg-black text-white text-xl'>
                        <TabList>
                            <Tab>Salad</Tab>
                            <Tab>Pizza</Tab>
                            <Tab>Soups</Tab>
                            <Tab>Desserts</Tab>
                            <Tab>Drinks</Tab>
                        </TabList>
                    </div>

                    {/* salads category */}
                    <TabPanel>
                       <OrderTab items={salads}></OrderTab>
                    </TabPanel>

                    {/* pizza category */}
                    <TabPanel>
                        <OrderTab items={pizza} ></OrderTab>
                    </TabPanel>

                    {/* soups category */}
                    <TabPanel>
                        <OrderTab items={soups}></OrderTab>
                    </TabPanel>

                    {/* desserts category */}
                    <TabPanel>
                       <OrderTab items={desserts}></OrderTab>
                    </TabPanel>

                    {/* drinks category */}
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>

                </Tabs>
            </div>

        </div>
    );
};

export default OrderFood;