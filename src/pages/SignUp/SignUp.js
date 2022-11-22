import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';


const SignUp = () => {
    const  {register, handleSubmit, formState: { errors }} = useForm();
    const {createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token){
        navigate('/')
    }

    const handleSignUp = data =>{
        // console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result =>{
                const user = result.user;
                console.log(user);
                toast.success('Create User successfully,.')

                const userInfo = {
                    displayName: data.name,
                }
                updateUser(userInfo)
                    .then(()=>{
                        saveUser(data.name, data.email);
                    })
                    .catch((err)=>{
                        console.error(err.message);
                        setSignUpError(err.message)
                        
                    })
            })
            .catch(err => console.error(err))
    };

    const saveUser = (name, email) =>{
        const user = {name, email};
        fetch('https://doctors-portal-server-two-theta.vercel.app/users', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(res => res.json())
        .then(data =>{
            setCreatedUserEmail(email);
        })
        .catch(err => console.error(err))
    };


    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='shadow-xl bg-base-100 lg:w-2/5 p-6 rounded-xl'>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="text-3xl text-center mb-7">SignUp</div>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register('name',{ required: 'Please give me your name?'})} type="text" placeholder="Name" className="input input-bordered w-full" />
                    {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>}
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register('email', { required: 'email is required'})} type="email" placeholder="email" className="input input-bordered w-full" />
                    {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register('password', {
                        required: 'password is required?',
                        minLength: {value: 6, message: 'password must be 6 character?'},
                        pattern: {value: /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/ , message: 'password provide must be stronger'}
                        })} type="password" placeholder="password" className="input input-bordered w-full" />
                    
                    {/* error message password  */}
                    {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                    <button type='submit' className="btn btn-active w-full my-3 uppercase">signup</button>
                </form>
                {signUpError && <p className='text-red-600'>{signUpError} </p> }
                <div className='text-center'>
                    <small>Already have a account please! <Link to='/login' className='text-success'>login</Link></small>
                </div>
                <div className="divider">OR</div>
                <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;