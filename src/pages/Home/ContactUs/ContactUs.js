import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    return (
        <section style={{background : `url(${appointment})`}}>
            <div className="hero">
                <div className="card flex-shrink-0  md:w-2/5 ">
                <div className="card-body">
                <h3 className='text-xl font-bold text-primary mb-3 text-center mt-12'>Testimonial</h3>
                    <div className="text-3xl text-white mb-8 text-center">What Our Patients Says</div>
                    <div className="form-control">
                        <input  type="text" placeholder="Email Address" className="input input-bordered h-12 rounded-lg" />
                    </div>
                    <div className="form-control py-4">
                        <input type="text"  placeholder="Subject" className="input input-bordered h-12 rounded-lg " />
                    </div>
                    <div className="form-control">
                        <textarea className="textarea textarea-bordered h-32 rounded-xl" placeholder="Your message"></textarea>
                    </div>
                    <div className="form-control mt-8 w-1/2 mx-auto">
                    <PrimaryButton>Submit</PrimaryButton>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;