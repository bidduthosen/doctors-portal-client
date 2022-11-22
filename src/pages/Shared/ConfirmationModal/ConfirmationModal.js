import React from 'react';

const ConfirmationModal = ({title, message, doctorData, handleDoctorDelete, closeModal, deleteButtonName}) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="py-4">{message}</p>
                <div className="modal-action">
                <label onClick={()=>handleDoctorDelete(doctorData)} htmlFor="confirmation-modal" className="btn btn-error">{deleteButtonName}</label>
                <label onClick={closeModal} htmlFor="confirmation-modal" className="btn btn-outline">Cancel</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;