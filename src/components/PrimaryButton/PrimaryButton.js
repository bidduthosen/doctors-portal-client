import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn rounded-xl btn-success bg-gradient-to-r from-success to-primary text-white">{children}</button>
    );
};

export default PrimaryButton;