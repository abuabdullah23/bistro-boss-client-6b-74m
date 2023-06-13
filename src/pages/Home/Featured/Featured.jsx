import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured-bg bg-fixed text-white mb-10'>
            <div className='w-full h-full bg-black bg-opacity-60 py-16'>
                <SectionTitle
                    subHeading={"Check it out"}
                    heading={"FROM OUR MENU"}
                ></SectionTitle>

                <div className='flex justify-center items-center'>
                    <div className='md:flex gap-10 justify-center items-center w-3/4 '>
                        <div>
                            <img className='3/4' src={featuredImg} alt="" />
                        </div>
                        <div>
                            <p>March 20, 2023</p>
                            <p>WHERE CAN I GET SOME?</p>
                            <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <button className='btn btn-outline border-0 border-b-4 text-white mt-4'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;