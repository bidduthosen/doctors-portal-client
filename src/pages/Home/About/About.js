import React from 'react';
import {  FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from 'react-icons/fa';

const About = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className='rounded-xl bg-gradient-to-r from-success to-primary flex justify-center items-center h-[190px]'>
                <FaRegClock style={{fontSize: '85px', color: 'white'}}></FaRegClock>
                <div className='ml-5 text-white p-2'>
                    <h3 className='font-bold text-xl mb-4'>Opening Hours</h3>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
            <div className='rounded-xl  flex justify-center items-center h-[190px]' style={{backgroundColor: '#3A4256'}}>
                <FaMapMarkerAlt style={{fontSize: '85px', color: 'white'}}></FaMapMarkerAlt>
                <div className='ml-5 text-white p-2'>
                    <h3 className='font-bold text-xl mb-4'>Visit our location</h3>
                    <p>Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div className='rounded-xl bg-gradient-to-r from-success to-primary flex justify-center items-center h-[190px]'>
                <FaPhoneAlt style={{fontSize: '85px', color: 'white'}}></FaPhoneAlt>
                <div className='ml-5 text-white p-2'>
                    <h3 className='font-bold text-xl mb-4'>Contact us now</h3>
                    <p>+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default About;