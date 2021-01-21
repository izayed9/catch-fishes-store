import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Products from './pages/Products';
import LoginForm from './pages/Login';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={LoginForm} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/products' component={Products} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;