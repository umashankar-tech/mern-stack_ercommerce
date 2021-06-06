import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Cart from './Cart/cart';
import Product from './Products/products';


function Pages() {
    return (
       <Switch>
           <Route path="/" exact component={Product}/>
       </Switch>
    )
}

export default Pages
