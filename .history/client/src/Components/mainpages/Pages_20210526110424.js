import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Cart from './Cart/cart';
import Product from './Products/products';


function Pages() {
    return (
       <Switch>
           <Route path="/" exact component={Product} />

            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />           
            <Route path="/cart" exact component={Cart} />


            
       </Switch>
    )
}

export default Pages
