import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const ManageDoctors = () => {

    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const {data: doctors, refetch} = useQuery({
        queryKey: ['doctors'],
        queryFn: async()=> {
           try{
                const res = await fetch('https://doctors-portal-server-two-theta.vercel.app/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = res.json();
                return data;
           }
           catch(error){

           }
        }
    });

    const closeModal = () =>{
        setDeletingDoctor(null);
    }

    const handleDoctorDelete =(data) =>{
        fetch(`https://doctors-portal-server-two-theta.vercel.app/doctors/${data?._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data?.deletedCount){
                toast.success(`${deletingDoctor.name} delete successful.`)
                refetch()
            }
        })

    }
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Specialty</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                        {
                            doctors?.map((doctor, i) => 
                            <tr key={doctor._id}>
                            <th>{i + 1}</th>
                                    <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-20 h-20">
                                                <img src={doctor?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                    </td>
                                    <td className='font-bold'>{doctor?.name}</td>
                                    <td>{doctor?.specialty}</td>
                                    <th>
                                    <label onClick={()=>setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-warning btn-sm">Delete</label>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message ={`If you delete ${deletingDoctor?.name} . It cannot be undone.`}
                doctorData={deletingDoctor}
                handleDoctorDelete={handleDoctorDelete}
                closeModal={closeModal}
                deleteButtonName = 'Delete'
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;