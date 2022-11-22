import React from 'react';

const TestimonialCart = ({testimonial}) => {
    const {img, author, country, description} = testimonial;
    return (
        <div className='rounded-xl shadow-xl drop-shadow-md'>
            <p className='p-7 mb-6'>{description}</p>
            <div className='flex items-center p-7'>
                <div className='border-4 border-primary rounded-full'>
                    <img className='border-4 border-white hover:border-0 rounded-full h-16 w-16' src={img} alt="" />
                </div>
                <div className='pl-4'>
                    <h2>{author}</h2>
                    <h2>{country}</h2>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCart;