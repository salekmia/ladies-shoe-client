import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    const [deleteOrder, setDeleteOrder] = useState(false)
    useEffect(()=> {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => {
            setOrders(data)
        })
    }, [deleteOrder])

    const handleDeleteOrder = id => {
        const procced = window.confirm('Are you sure? You want to delete.')
        if(procced) {
           fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount) {
                setDeleteOrder(true)
                toast.success('Order delete successful', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
        }) 
        }
        setDeleteOrder(false)

    }

    // const handleUpdateStatus = id => {
    //     const procced = window.confirm('You are going to approve it!')
    //     if(procced) {
    //         const url = `http://localhost:5000/orders/${id}`
    //         axios.put(url, {
    //             status: "Shipped"
    //         })
    //     setDeleteProduct(true)
    //     }
    //     setDeleteProduct(false)
    // }

    const handleUpdateStatus = id => {
        const order = {status: 'Shipped'}
        const url = `http://localhost:5000/orders/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setDeleteOrder(true)
                toast.success('Status update successful', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
        })
        setDeleteOrder(false)
    }

    

    return (
        <div>
            <h3 className="text-center mb-5">Manage all <span className="text-primary">orders</span></h3>
            <div>
                {
                    orders.map(order => <div key={order?._id}>
                        <div className="card mb-3" style={{maxWidth: '540px'}}>
                            <div className="row g-0 d-flex align-items-center">
                                <div className="col-md-3">
                                    <img src={order?.img} className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-9">
                                    <div className="card-body">
                                        <h5 className="card-title">{order?.product_title}</h5>
                                        <div className="d-flex justify-content-between align-itmes-center">
                                            <p><b>Price: {order?.price}</b></p>
                                            <p><b>Status: {order?.status}</b></p>
                                        </div>
                                        <div className="d-flex justify-content-between align-itmes-center">
                                            <button onClick={()=> handleUpdateStatus(order?._id)} className="btn-sm btn-primary px-3 rounded-pill my-2">Approve</button>

                                            <button onClick={()=> handleDeleteOrder(order?._id)} className="btn-sm btn-primary px-3 rounded-pill my-2">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
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

export default ManageOrders;