import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast'

const BookingModal = ({treatment, setTreatment, selectedDate, refetch}) => {
    const {user} = useContext(AuthContext);
    
    // treatment just a another name of appointmentOptions with name slots etc.
    const {name, slots, price} = treatment;
    const date   = format(selectedDate, "PP");

    const handleBooking = event =>{
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const booking ={
            appointmentDate: date,
            treatment: name,
            patient: patientName,
            slot,
            phone,
            email,
            price,
        }
        fetch('https://doctors-portal-server-two-theta.vercel.app/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success('Booking confirmed!')
                    setTreatment(null);
                    refetch()
                }
                else{
                    toast.error(data.message);
                    setTreatment(null)
                }
            })
        
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <div className="font-semibold text-2xl absolute left-2 top-2 p-3">{name}</div>
                <form onSubmit={handleBooking} className='mt-16'>
                    <input value={date} disabled className="input input-bordered w-full my-2" />
                    <select name='slot' className="select select-bordered w-full my-2">
                        {
                            slots.map((slot, index)=> <option 
                            value={slot}
                            key={index}
                            >{slot}</option>)
                        }
                    </select>
                    <input name='name' type="text" defaultValue={user?.displayName} readOnly placeholder="Full Name" className="input input-bordered w-full my-2" />
                    <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full my-2" />
                    <input name='email' type="email" defaultValue={user?.email} readOnly placeholder="Email" className="input input-bordered w-full my-2" />
                    <button type='submit' className="btn btn-active w-full mt-3">SUBMIT</button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default BookingModal;