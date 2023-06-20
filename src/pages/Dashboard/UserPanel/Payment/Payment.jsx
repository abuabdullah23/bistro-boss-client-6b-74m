import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../../components/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import useCart from '../../../../hooks/useCart';

// TODO: provide public key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK);

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));

    return (
        <div>
            <div>
                <Helmet>
                    <title>Bistro Boss | Payment</title>
                </Helmet>
                <SectionTitle
                    subHeading={'Start your'}
                    heading={'Payment'}
                ></SectionTitle>

                {/* Payment Method */}
                <div className='my-10 md: px-16'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm price={price} ></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;