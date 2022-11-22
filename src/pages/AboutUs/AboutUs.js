import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const AboutUs = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1>About Us {user?.email}</h1>
        </div>
    );
};

export default AboutUs;