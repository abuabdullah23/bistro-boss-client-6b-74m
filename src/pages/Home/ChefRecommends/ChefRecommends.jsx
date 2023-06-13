import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import recommendsImg1 from '../../../assets/home/slide1.jpg';
import recommendsImg2 from '../../../assets/home/slide2.jpg';
import recommendsImg3 from '../../../assets/home/slide3.jpg';

const ChefRecommends = () => {
    return (
        <div>
            <SectionTitle
            subHeading={"Should Try"}
            heading={"CHEF RECOMMENDS"}
            ></SectionTitle>
            <div className='my-20 grid grid-cols-1 md:grid-cols-3 gap-7'>
                {/* Recommends 1 */}
                <div className='bg-[#F3F3F3]'>
                    <div>
                        <img className='h-[300px] w-full object-cover' src={recommendsImg1} alt="" />
                    </div>
                    <div className='text-center p-10'>
                        <h2 className='text-3xl font-semibold mb-4'>Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className='uppercase text-xl text-[#BB8506] mt-5 btn btn-outline border-0 border-b-4 border-[#BB8506] bg-slate-200'>Add To Cart</button>
                    </div>
                </div>
                {/* Recommends 2 */}
                <div className='bg-[#F3F3F3]'>
                    <div>
                        <img className='h-[300px] w-full object-cover' src={recommendsImg2} alt="" />
                    </div>
                    <div className='text-center p-10'>
                        <h2 className='text-3xl font-semibold mb-4'>Pizza</h2>
                        <p>Tomato, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className='uppercase text-xl text-[#BB8506] mt-5 btn btn-outline border-0 border-b-4 border-[#BB8506] bg-slate-900'>Add To Cart</button>
                    </div>
                </div>
                {/* Recommends 3 */}
                <div className='bg-[#F3F3F3]'>
                    <div>
                        <img className='h-[300px] w-full object-cover' src={recommendsImg3} alt="" />
                    </div>
                    <div className='text-center p-10'>
                        <h2 className='text-3xl font-semibold mb-4'>Soup</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className='uppercase text-xl text-[#BB8506] mt-5 btn btn-outline border-0 border-b-4 border-[#BB8506] bg-slate-200'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommends;