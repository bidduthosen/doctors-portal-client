import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <section style={{
            background: `url(${footer})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <footer className="footer p-10  text-base-content">
                <div>
                    <span className="footer-title">Services</span> 
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div> 
                <div>
                    <span className="footer-title">Company</span> 
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div> 
                <div className='md:ml-16'>
                    <span className="footer-title">Legal</span> 
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
                </footer> 
                <footer className="footer px-10 pt-28 mb-4 text-base-content border-base-300">
                <div className="md:place-self-center">
                    <div className="grid grid-flow-col gap-4">
                    Copyright 2022 All Rights Reserved
                    </div>
                </div>
                </footer>
        </section>
    );
};

export default Footer;