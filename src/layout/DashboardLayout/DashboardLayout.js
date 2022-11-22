import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../pages/Shared/Navbar/Navbar';
import { FaInfoCircle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const DashboardLayout = () => {
    const {user}= useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <label htmlFor="dashboard-drawer" className="btn btn-outline drawer-button lg:hidden m-3"><FaInfoCircle></FaInfoCircle></label>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-slate-100">
                    <Outlet></Outlet>
                
                </div> 
                <div className="drawer-side ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 text-base-content">
                   
                    <li><Link to='/dashboard'>My Appointments</Link></li>
                    {
                        isAdmin && <>
                            <li><Link to='/dashboard/users'>All Users</Link></li>
                            <li><Link to='/dashboard/addDoctor'>Add a Doctor</Link></li>
                            <li><Link to='/dashboard/manageDoctors'>Manage Doctor</Link></li>
                        </>
                    }
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;