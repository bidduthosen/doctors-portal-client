import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);
console.log("pk",stripePromise)

const Payment = () => {
    const bookings = useLoaderData();
    const {treatment, slot, price, appointmentDate} = bookings;
    return (
        <div className='flex justify-center items-center mt-8'>
            <div className="card  bg-base-100 shadow-xl ">
            <div className="card-body">
                <h2 className="card-title">Treatment <strong>{treatment}</strong> </h2>
                <p>pleaser pay <strong>${price}</strong> for you appointment on {appointmentDate} at {slot}</p>
                <div className="">
                <Elements stripe={stripePromise}>
                    <CheckoutForm 
                    bookings={bookings}
                    />
                </Elements>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Payment;