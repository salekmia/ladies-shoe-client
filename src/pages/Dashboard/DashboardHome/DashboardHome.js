import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './DashboardHome.css';
const DashboardHome = () => {
    const {user, admin} = useAuth()


    
    console.log(admin)
    

    return (
        <div id="dashboard_bg">
            <div className="dashboard_text">
                <h2>Hey, <span className="text-primary">{user?.displayName}</span></h2>
                <h4>Welcome to <span className="fs-1 fw-bold">Ladies Shoe 🖐</span></h4>
                {admin && <h5>You are a valuable <span className="text-primary">Admin</span> of our website.</h5>}
                {!admin && <h5>You are a valuable <span className="text-primary">User</span> of our website.</h5>}
                <Link to="/"><button className="btn btn-primary btn-lg px-5 py-1 rounded-pill">Go to home</button></Link>
            </div>
        </div>
    );
};

export default DashboardHome;