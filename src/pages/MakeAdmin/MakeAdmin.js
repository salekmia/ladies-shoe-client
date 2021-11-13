import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import admin from '../../../src/images/admin.jpg';
const MakeAdmin = () => {
    const [email, setEmail] = useState()
    const emailChange = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmi = e => {
        const user = {email}
        fetch('https://vast-mesa-86582.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
                toast.success('Admin Make Successful', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            } else if(data.matchedCount){
                toast.warn('This user alredy an admin', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            } else {
                toast.error('This user did not register', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
        })
        e.preventDefault()
    }
    return (
        <>
        <div className="row d-flex justify-content-center align-items-center text-center">
            <div className="col-md-6">
                <img className="img-fluid" src={admin} alt="Admin" />
            </div>
            <div className="col-md-6">
                <form onSubmit={handleAdminSubmi}>
                    <input onBlur={emailChange} required type="email" placeholder="Enter email" className="form-control my-4" />
                    <button type="submit" className="btn btn-primary px-4 rounded-pill">Make Admin</button>
                </form>
            </div>
        </div>
        <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        </>
    );
};

export default MakeAdmin;