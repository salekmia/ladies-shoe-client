import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import login from '../../../../src/images/login.jpg';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import './Login.css';
const Login = () => {
    const {signInUsignGoogle, signInUsingPassword, saveUser} = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/dashboard'
    

    const googleLoginHandle = () => {
        signInUsignGoogle()
        .then(result => {
            history.push(redirect_uri)
            saveUser(result.user.email, result.user.displayName, 'PUT')
        })
        .catch(error => {
            setError(error.message)
        })
        if(error) {
            toast.error(error, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }


    const passwordLoginHandle = () => {
        signInUsingPassword(email, password)
        .then(result => {
            history.push(redirect_uri)
        })
        .catch(error => {
            setError(error.message)
        })
        if(error) {
            toast.error(error, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }



    const emailChange = (e) => {
        setEmail(e.target.value)
    }
    const passwordChange = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={login} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="container d-flex justify-content-center align-items-center  py-4">
                            <div>
                                <h3 className="text-center">Please login</h3>
                                <div className="border p-4">
                                    <input required onBlur={emailChange} className="input-field" type="email" name="email" id="email" placeholder="Enter email" />
                                    <br />
                                    <input  required onBlur={passwordChange} className="input-field" type="password" name="password" id="password" placeholder="Enter password" />

                                    <br />
                                    
                                    <input onClick={passwordLoginHandle} className="my-2 btn btn-primary rounded-pill px-4" type="submit" value="Login" />

                                    <div className="d-flex align-items-center my-4">
                                        <div className="or-line w-100"></div>
                                        <p className="m-0 px-2">or</p>
                                        <div className="or-line w-100"></div>
                                    </div>
                                    
                                    <div className="d-grid gap-2">
                                        <button onClick={googleLoginHandle} className="btn btn-sm btn-primary"><i className="fab fa-google"></i> Login with google</button>

                                        
                                    </div>
                                    <p className="m-4">Don't have an account? <Link to="/register">Register</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
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
        </div>
    );
};

export default Login;