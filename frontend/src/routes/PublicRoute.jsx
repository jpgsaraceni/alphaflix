/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isAuthenticated from '../services/authentication';

// const PublicRoute = ({ component: Component, restricted, ...rest }) => (
const PublicRoute = ({ component: Component, restricted, path }) => (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
    // {...rest}
        render={() => (
            isAuthenticated() && restricted
                ? <Redirect to="/home" />
            // : <Component {...props} />
                : <Component path={path} />
        )}
    />
);

export default PublicRoute;
