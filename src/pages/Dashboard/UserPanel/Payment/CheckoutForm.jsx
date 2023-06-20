import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';

const CheckoutForm = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuth();
    const [cardError, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        console.log(price)
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error);
            setCardError(error.message)
        } else {
            setCardError('')
            // console.log('Payment method', paymentMethod)
        }

        setProcessing(true); 

        const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'Unknown',
                        name: user?.displayName || 'anonymous',
                    },
                },
            },
        );
        if(confirmError){
            console.log(confirmError);
        }
        console.log('payment Intent', paymentIntent);
        setProcessing(false)

        if(paymentIntent.status === "succeeded"){
            setTransactionId(paymentIntent.id);
            // TODO: next steps
        }

        console.log('card', card)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='mb-10'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '20px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='text-center mt-16'>
                    <button type="submit" disabled={!stripe || !clientSecret || processing} className='text-lg font-semibold py-2 px-10 bg-blue-700 text-white hover:bg-blue-800 rounded-md w-1/3'>
                        Pay
                    </button>
                </div>
            </form>
            {
                cardError && <p className='text-xl text-red-600 mt-10'>{cardError}</p>
            }
            {
                transactionId && <p className='text-xl text-green-600' > Transaction completed with your Id: {transactionId}</p>
            }
        </>
    );
};

export default CheckoutForm;