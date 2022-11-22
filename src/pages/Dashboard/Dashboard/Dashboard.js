import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    const url = `https://doctors-portal-server-two-theta.vercel.app/bookings?email=${user?.email}`;
    const {data: booking = []} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: ()=> fetch(url, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res=> res.json())
    })

    return (
        <div className='w-[92%] mx-auto'>
            <div className='flex justify-between items-center'>
                <div className="text-2xl font-semibold my-9">My Appointment</div>
                <button className="btn btn-outline">MAY 10, 2022</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Name</th>
                        <th>SERVICE</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Payment</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map((booking, i) => <tr key={booking._id}>
                                <th>{i+1}</th>
                                <td>{booking.patient}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                                <td>
                                {
                                    booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className='btn btn-info btn-sm'>Pay</button></Link>
                                }
                                {booking?.price && booking?.paid && <button className='btn btn-success btn-sm'>Paid</button>}
                                </td>
                            </tr>)
                        }
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;