import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../../components/PrimaryButton/Loading/Loading';

const AvailableAppointments = ({selectedDate}) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [ treatment, setTreatment ] = useState(null);
    const date = format(selectedDate, "PP")

    const {data: appointmentOptions = [], refetch, isLoading} = useQuery({
        queryKey: ["appointmentOptions", date],
        queryFn: async()=> {
            const res = await fetch(`https://doctors-portal-server-two-theta.vercel.app/appointmentOptions?data=${date}`)
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }

    // const {data: appointmentOptions = []} = useQuery({
    //     queryKey: ["appointmentOptions"],
    //     queryFn: ()=> fetch('https://doctors-portal-server-two-theta.vercel.app/appointmentOptions')
    //     .then(res => res.json())
    // })

    // useEffect(()=>{
    //     fetch('https://doctors-portal-server-two-theta.vercel.app/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // },[])
    return (
        <div>
            <div className="text-2xl text-success text-center">Available Appointments on {format(selectedDate, 'PP')} </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-24'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                treatment={treatment}
                selectedDate={selectedDate}
                setTreatment={setTreatment}
                refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;