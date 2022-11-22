import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const {data: allUsers = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn : ()=> fetch('https://doctors-portal-server-two-theta.vercel.app/users')
            .then(res => res.json())
    });
    
    const handleAdminRole = id => {
        fetch(`https://doctors-portal-server-two-theta.vercel.app/users/admin/${id}`,{
            method: 'PUT',
            headers: {
                authorization : `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0){
                    toast.success('Make admin successful.');
                    refetch()
                }
                console.log(data)
            })
    }
    return (
        <div className='w-[92%] mx-auto my-6'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        allUsers.map((user, i)=> <tr key={user._id}>
                            <th>{i + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user?.role !== 'admin' && <button onClick={()=>handleAdminRole(user._id)} className="btn btn-outline btn-sm btn-info">Make Admin</button>}</td>
                            <td><button className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </td>
                        </tr>)
                    }
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default AllUsers;