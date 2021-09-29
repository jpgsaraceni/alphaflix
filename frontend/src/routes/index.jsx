import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
// import PublicRoute from '../routes/PublicRoute';
// import PrivateRoute from '../routes/PrivateRoute';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact to="/login" from="/" />
                <Route path="/login" component={Login} />
                {/* <PublicRoute restricted={true} path="/login" component={Login} /> */}
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
