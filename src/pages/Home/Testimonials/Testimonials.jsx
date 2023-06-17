import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { FaQuoteLeft } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

// import react rating
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    // console.log(reviews)

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div className='my-20'>
            <SectionTitle
                subHeading={'What Our Clients Say'}
                heading="TESTIMONIALS"
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='flex justify-center text-center'>
                            <div className='px-5 w-2/3'>
                                <div className='flex justify-center my-5'>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                </div>
                                <div className='text-center text-4xl flex justify-center mb-5'>
                                    <FaQuoteLeft />
                                </div>
                                <p>{review.details}</p>
                                <h3 className='text-[#CD9003] text-2xl font-semibold mt-2 uppercase'>{review.name}</h3>
                            </div>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;