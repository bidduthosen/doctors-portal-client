import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const  error = useRouteError();

    const {LogoutUser} = useContext(AuthContext);
    const handleLogOutUser = () =>{
        LogoutUser()
            .then(()=>{})
            .catch(()=>{})
    }
    return (
        <div>
            <p className='text-red-500'>Something Wrong</p>
            <p className='text-red-300'>{error.statusText || error.message}</p>
            <h1>please <button onClick={handleLogOutUser}>sign Up</button> and Login back</h1>
        </div>
    );
};

export default DisplayError;