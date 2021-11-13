import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth()
    const [orders, setOrders] = useState([]);
    const [deleteProduct, setDeleteProduct] = useState([]);
    
    
    useEffect(() => {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => {
            setOrders(data)
        })
    }, [deleteProduct])

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
                setDeleteProduct(true)
                toast.success('Order cancel successful', {
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
        }
        setDeleteProduct(false)

    }

    const myOrders = orders.filter(order => order.email === user.email)

    return (
        <div>
            <h5><b>My orders</b></h5>
            <div className="row row-cols-1 row-cols-lg-2 g-4">
                {
                    myOrders.map(myOrder => <div className="" key={myOrder._id}>
                        <div className="card mb-3" style={{maxWidth: '400px'}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={myOrder?.img} className="img-fluid rounded-start" alt=""/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{myOrder?.product_title}</h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p><b>Price: {myOrder?.price}</b></p>
                                            <p><b>Status: {myOrder?.status}</b></p>
                                        </div>
                                        <button onClick={()=> handleDeleteOrder(myOrder?._id)} className="btn-sm btn-primary px-3 rounded-pill my-2">Cancel order</button>
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

export default MyOrders;

// Something new for chack git git push