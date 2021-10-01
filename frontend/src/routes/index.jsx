import React from 'react';
// import { Route } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PublicRoute from '../routes/PublicRoute';
import PrivateRoute from '../routes/PrivateRoute';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact to="/login" from="/" />
                <PublicRoute restricted={true} path="/login" component={Login} />
                <PrivateRoute path="/home" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
