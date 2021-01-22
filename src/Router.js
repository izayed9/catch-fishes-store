import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import CartPage from './pages/CartPage';
import LoginForm from './pages/Login';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import Signup from './pages/Signup';

const Router = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path='/' component={Products} />
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/cart' component={CartPage} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;