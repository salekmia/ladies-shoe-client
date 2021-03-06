import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const {user, admin, isLoding} = useAuth()
    if(isLoding) {
        return <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
    }
    return (
        <Route 
            {...rest}
            render={({location}) =>
            user.email && admin ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: "/",
                        state: {from: location}
                    }}
                />
            )
        }
        >
            
        </Route>
    );
};

export default AdminRoute;