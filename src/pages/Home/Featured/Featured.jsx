import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured-bg md:py-10 text-white mb-10'>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>

            <div className='flex justify-center items-center'>
                <div className='md:flex gap-10 justify-center items-center w-3/4'>
                    <div>
                        <img className='3/4' src={featuredImg} alt="" />
                    </div>
                    <div>
                        <p>March 20, 2023</p>
                        <p>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;