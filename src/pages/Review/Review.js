import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../hooks/useAuth';

const Review = () => {
    const {user} = useAuth()
    const [review, setReview] = useState({})

    const handleOnBlur = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newReview = {...review};
        newReview[feild] = value;
        setReview(newReview)
    }

    console.log(review)

    const handleReviewSubmit = e => {
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                toast.success('Your Review successfully added', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
        })
        e.target.reset()
        setReview({})
        e.preventDefault()
    }
    return (
        <div>
            <div className="border rounded p-4">
            <h3 className="text-center">Write Your <span className="text-primary">Review</span></h3>
                <form onSubmit={handleReviewSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">Your Name</label>
                        <input defaultValue={user?.displayName} name="name" onBlur={handleOnBlur} className="form-control" type="text" id="name" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">Your Email</label>
                        <input defaultValue={user?.email} name="email" onBlur={handleOnBlur} className="form-control" type="email" id="email" />
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label" htmlFor="review">Your Review</label>
                        <textarea  name="review" onBlur={handleOnBlur} className="form-control" id="review" cols="30" rows="5"></textarea>
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="rating">Select Rating</label>
                        <select  name="rating" onBlur={handleOnBlur} id="rating" className="form-select">
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select>
                    </div>

                    <div className="d-grid"><button type="submit" className="btn btn-primary px-5 rounded-pill">Submit Review</button></div>
                </form>
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

export default Review;