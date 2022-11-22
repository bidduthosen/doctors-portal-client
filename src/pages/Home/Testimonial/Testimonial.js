import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import quote from '../../../assets/icons/quote.svg'
import TestimonialCart from './TestimonialCart';

const Testimonial = () => {
    const testimonialData =[
        {
            id: 1,
            author: "Winson Herry",
            country: "California",
            img: people1,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here  content",
        },
        {
            id: 2,
            author: "Winson Herry",
            country: "California",
            img: people2,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here  content",
        },
        {
            id: 3,
            author: "Winson Herry",
            country: "California",
            img: people3,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here  content",
        }
    ]
    return (
        <div className='mt-28'>
            <div className='flex justify-between items-center mb-11'>
                <div className='p-3'>
                    <h3 className='text-xl font-bold text-primary'>Testimonial</h3>
                    <div className="text-3xl text-black">What Our Patients Says</div>
                </div>
                <img className='w-24 h-20 md:w-48 md:h-36 ' src={quote} alt="" />
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {
                    testimonialData.map(testimonial=> <TestimonialCart
                    key={testimonial.id}
                    testimonial={testimonial}
                    ></TestimonialCart>)
                }
            </div>
            
        </div>
    );
};

export default Testimonial;