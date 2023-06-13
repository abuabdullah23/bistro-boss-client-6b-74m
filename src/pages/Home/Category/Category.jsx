import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import swiper img
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle';

const Category = () => {
    return (
        <>
            <SectionTitle
                subHeading={"From 11:00am to 10:00pm"}
                heading={"ORDER ONLINE"}
            >
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-5 text-white"
            >
                <SwiperSlide><img src={slide1} alt="" />
                    <h3 className='uppercase text-2xl shadow -mt-20 text-center'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" /><h3 className='uppercase text-2xl shadow -mt-20 text-center'>Pizza</h3></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" /><h3 className='uppercase text-2xl shadow -mt-20 text-center'>Soup</h3></SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" /><h3 className='uppercase text-2xl shadow -mt-20 text-center'>desserts</h3></SwiperSlide>
                <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Category;