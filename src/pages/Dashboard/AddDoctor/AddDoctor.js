import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../components/PrimaryButton/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const imgHostingKey = process.env.REACT_APP_imgbb_key;

    const {data: Specialties = [], isLoading} = useQuery({
        queryKey: ['appointmentAddDoctors'],
        queryFn: async()=>{
            const res = await fetch('https://doctors-portal-server-two-theta.vercel.app/appointmentAddDoctors');
            const data = res.json();
            return data;
        }
    });
    
    if(isLoading){
        return <Loading></Loading>
    }

    const handleAddDoctor = data =>{
        // console.log(data.img[0])
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_key}`
        fetch(url,{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                const doctors = {
                    name : data.name,
                    email : data.email,
                    specialty : data.specialty,
                    image: imgData.data.url,
                }
                fetch('https://doctors-portal-server-two-theta.vercel.app/doctors',{
                    method: "POST",
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }, 
                    body: JSON.stringify(doctors)
                })
                    .then(res => res.json())
                    .then(result => {
                        if(result.acknowledged){
                            toast.success(`${data.name} is added successfully`);
                            navigate('/dashboard/manageDoctors')
                        }
                    })
            }
        })
    };
    return (
        <div className='shadow-xl bg-base-100 lg:w-2/4 p-6 md:ml-12 mt-8 rounded-xl'>
            <form onSubmit={handleSubmit(handleAddDoctor)} >

                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("name",
                    {
                        required: 'Name is required'
                    }
                    )} type="text" placeholder="Name" className="input input-bordered w-full" />
                    {errors.name && <small role="alert" className=' text-red-600'>{errors.name?.message}</small>}

                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", 
                    {required: 'Email is required'}
                    )} type="email" placeholder="email" className="input input-bordered w-full" />
                    {errors.email && <small role="alert" className=' text-red-600'>{errors.email?.message}</small>}

                    <select {...register('specialty',
                    {
                        required: 'specialty is required'
                    }
                    )} className="select select-accent w-full my-5">
                        {
                            Specialties?.map(specialty => <option key={specialty._id} value={specialty.name}>{specialty.name}</option>)
                        }
                    </select>

                    <input {...register('img',
                    {
                        required: 'photo is required'
                    }
                    )} type="file" className="file-input file-input-bordered file-input-success w-full my-5" />
                    {errors.img && <small role="alert" className=' text-red-600'>{errors.img?.message}</small>}


                    <button type='submit' className="btn btn-active w-full my-3 uppercase">Add Doctor</button>
                </form>
                {loginError && <p className='text-red-600'>{loginError}</p> }
        </div>
    );
};

export default AddDoctor;