import React from 'react';
import doctorSmall from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='mt-44'
        style={{background: `url(${appointment})`}}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctorSmall}  className="-mt-32 lg:w-1/2 image-full hidden md:block" alt=''/>
                    <div className='p-3'>
                        <h3 className='text-xl font-bold text-primary '>Appointment</h3>
                        <h1 className="text-3xl font-bold text-white my-6">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;