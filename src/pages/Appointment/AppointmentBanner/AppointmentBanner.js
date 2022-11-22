import React from 'react';
import chair from '../../../assets/images/chair.png'
import appointment from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    return (
        <section 
        style={{background: `url(${appointment})`}}
        >
            <div className="hero py-52">
                <div className="hero-content flex-col md:flex-row-reverse lg:gap-32 gap-10">
                    <img src={chair} alt='chair' className="rounded-lg w-1/2" />
                    <div className='bg-base-100 shadow-xl rounded-xl '>
                    <DayPicker
                    mode='single'
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    ></DayPicker>
                    </div>
                </div>
                </div>
        </section>
    );
};

export default AppointmentBanner;