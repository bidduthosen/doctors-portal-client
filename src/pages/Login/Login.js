import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const {loginUser, signInGoogle} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [loginError, setLoginError] = useState('');

    const [loginUserEmail, setLoginUserEmail ] = useState('');
    const [token] = useToken(loginUserEmail);

    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate( from, {replace : true});
    }
    const handleLogin = (data) =>{
        setLoginError('');
        loginUser(data.email, data.password)
            .then(result =>{
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email)
            })
            .catch(err =>{
                console.error(err.message);
                setLoginError(err.message)
            })
    }
    const handleSignInGoogle = () =>{
        signInGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate( from, {replace : true});
            })
            .catch(err=> {
                console.error(err.message);
                setLoginError(err.message)
            })
    }
    
    return (
        <div className='md:h-[700px] flex justify-center items-center'>
            <div className='shadow-xl bg-base-100 lg:w-1/4 p-6 rounded-xl'>
                <form onSubmit={handleSubmit(handleLogin)} >
                    <div className="text-3xl text-center mb-7">Login</div>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", 
                    {required: 'Email is required'}
                    
                    )} type="email" placeholder="email" className="input input-bordered w-full" />
                    {errors.email && <small role="alert" className=' text-red-600'>{errors.email?.message}</small>}

                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password",
                    {
                        required: 'password is required', 
                        minLength : {value: 6, message: 'Password must be 6 characters or longer'}
                    }

                    )} type="password" placeholder="password" className="input input-bordered w-full" />
                    <Link><small>Forget password ?</small></Link>
                    <br />
                    {errors.password && <small role="alert" className=' text-red-600'>{errors.password?.message}</small>}

                    <button type='submit' className="btn btn-active w-full my-3 uppercase">Login</button>
                </form>
                {loginError && <p className='text-red-600'>{loginError}</p> }
                <div className='text-center'>
                    <small>New to Doctors Portal? <Link to='/signup' className='text-success'>Create new account</Link></small>
                </div>
                <div className="divider">OR</div>
                <button onClick={handleSignInGoogle} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;