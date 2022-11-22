import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import './Banner.css';

const Banner = () => {
    return (
        <div className='grid lg:grid-cols-2 background-img'>
            <div className='flex justify-center items-center m-4 '>
                <div>
                    <div className="text-5xl font-bold my-4">Your New Smile Starts
                    <br />
                     Here</div>
                    <p className='mb-8'>Find Ivf Doctor In India. Search Faster, Better & Smarter Now! Get Results for Ivf Doctor In India. Find Results from Multiple Sources. Simple in Use. Multiple Sources Combined. Fast and Trusted. All the Answers. Easy Access Information. Discover Us Now!</p>
                    <PrimaryButton>GET STARTED</PrimaryButton>
                    </div>
            </div>
            <div className='flex justify-center items-center'>
                <img className='w-full p-3' src={chair} alt="" />
            </div>
        </div>
    );
};

export default Banner;