import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard/Login'
import Admin from './pages/Dashboard/Admin'
import Products from './pages/Dashboard/Product'
import CreateProducts from './pages/Dashboard/CreateProduct'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/cart" component={Cart} />
                <Route path="/entrar" component={Login} />
                <Route path="/cadastro" component={Register} />
                <Route path="/dashboard/login/" component={Dashboard} />
                <Route path="/dashboard/admin/" component={Admin} />
                <Route path="/dashboard/products/" component={Products} />
                <Route path="/dashboard/create-product/" component={CreateProducts} />
            </Switch>
        </BrowserRouter>
    )
}