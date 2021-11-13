import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../../hooks/useAuth';
import register from '../../../images/register.jpg';
import Header from '../../Shared/Header/Header';
import './Register.css';
const Register = () => {
    const {signInUsignGoogle, signUpUsingPassword, setUserName, setUser, user, saveUser} = useAuth()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'

    const googleLoginHandle = () => {
        signInUsignGoogle()
        .then(result => {
            history.push(redirect_uri)
            saveUser(result.user.email, result.user.displayName, 'PUT')
        })
        .catch(error => {
            setError(error.message)
        })
    }


    const passwordSignUpHandle = () => {
        signUpUsingPassword(email, password)
        .then(result => {
            history.push(redirect_uri)
            setUserName(name)
            .then(()=> {
                setUser({...user, displayName:name})
                saveUser(email, name, 'POST')
                window.location.reload()
            })
        })
        .catch(error =>{
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

    const nameChange = (e) => {
        setName(e.target.value)
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
                                <div className="container d-flex justify-content-center align-items-center  py-4">
                            <div>
                                <h3 className="text-center">Signup here</h3>
                                <div className="border p-4">
                                    <input required onBlur={nameChange} className="input-field" type="text" name="name" id="name" placeholder="Enter name" />
                                    <br />
                                    <input required  onBlur={emailChange} className="input-field" type="email" name="email" id="email" placeholder="Enter email" />
                                    <br />
                                    <input required onBlur={passwordChange} className="input-field" type="password" name="password" id="password" placeholder="Enter password" />
                                    <br />

                                    <input onClick={passwordSignUpHandle} className="my-2 btn btn-primary rounded-pill px-4" type="submit" value="Sing up" />

                                    <div className="d-flex align-items-center my-4">
                                        <div className="or-line w-100"></div>
                                        <p className="m-0 px-2">or</p>
                                        <div className="or-line w-100"></div>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button onClick={googleLoginHandle} className="btn btn-sm btn-primary"><i className="fab fa-google"></i> Sign up with google</button>

                                    </div>
                                    <p className="m-4">Already have an account? <Link to="/login">Login</Link></p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={register} alt="" />
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

export default Register;