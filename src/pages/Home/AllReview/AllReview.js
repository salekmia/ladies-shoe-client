import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import useAuth from '../../../hooks/useAuth';
import './AllReview.css';
const AllReview = () => {
    const [reviews, setReviews] = useState([])
    const {user} = useAuth()
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    }, [])
    console.log(reviews)
    return (
        <div className="container my-5">
            <h3 className="my-3 text-center">Customer <span className="text-primary">Reviews</span></h3>
            <p className="paragrap text-center">See what our customers have to say about us. <br /> There are a lot of customer reviews here.</p>
            
            <div className="row row-cols-1 row-cols-md-3 g-2 my-3">
                {
                    reviews.map(review => <div className="col" key={review?._id}>
                        <div style={{backgroundColor: '#EBEBF2', color: '#1b1b1b'}} className="p-4 rounded custom-card d-flex flex-column justify-content-center align-items-center">
                            <div><i style={{color: '#DEE2F4', fontSize: '60px'}} className="fas fa-quote-right"></i></div>
                            <h5><b>{review?.name || user?.name}</b></h5>
                            <Rating 
                            readonly 
                            initialRating={review?.rating || 5}
                            className="text-primary"
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star" 
                            ></Rating>
                            <p className="lead">{review?.review}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllReview;