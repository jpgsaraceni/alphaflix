import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import isAuthenticated from '../services/authentication';

// const PrivateRoute = ({ component: Component, ...rest }) => (
const PrivateRoute = ({ component: Component, path }) => (

    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /login page
    <Route
    // {...rest}
    // render={(props) => (
        render={() => (
            isAuthenticated()
            // ? <Component {...props} />
                ? <Component path={path} />
                : <Redirect to="/login" />
        )}
    />
);

PrivateRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
    path: PropTypes.string.isRequired,
};

export default PrivateRoute;
