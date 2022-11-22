import React from 'react';

const AppointmentOption = ({appointmentOption, setTreatment}) => {
    const {name, slots, price} = appointmentOption;
    return (
        <div className="card text-neutral-content shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-primary text-2xl font-semibold">{name}</h2>
                <p className='text-black'>{slots.length > 0 ? slots[0]: 'Try Another Day'}</p>
                <p className='text-black'>{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
                <p className='text-black'>Price: ${price}</p>

                <div className="card-actions justify-center">
                <label  onClick={()=> setTreatment(appointmentOption)} className='btn rounded-xl btn-success bg-gradient-to-r from-success to-primary text-white' disabled={slots.length === 0} htmlFor="booking-modal">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;