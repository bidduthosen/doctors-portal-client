import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Exceptional = () => {
    return (
        <div className='grid md:grid-cols-2 gap-8 mt-36'>
            <img className='h-[576px] w-[458px] mx-auto rounded-lg' src={treatment} alt="" />
            <div className='flex justify-center items-center w-4/5'>
                <div className='p-3'>
                    <div className="font-bold text-5xl mb-6 ">Exceptional Dental Care, on Your Terms</div>
                    <p className='mb-12'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Exceptional</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;