import React,{useState,useContext} from 'react';
import './header.css';
import {Link} from 'react-router-dom'
import {GlobalState} from './../../GlobalState';
import Menu from './icon/bars-solid (1).svg';
import Close from './icon/times-solid.svg';
import Cart from './icon/shoppingCart.svg';


function Header() {
    const value = useContext(GlobalState)
    return (
        <div>
            <header>
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>

            <div className="logo">
                <h1>
                    <Link to="/"> Bill/></Link>
                </h1>
            </div>

            <ul style={styleMenu}>
                <li><Link to="/">{isAdmin ? 'Products' : 'Shop'}</Link></li>

                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><Link to="/login">Login ✥ Register</Link></li>
                }

                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>

            </ul>

            {
                isAdmin ? '' 
                :<div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <img src={Cart} alt="" width="30" />
                    </Link>
                </div>
            }
            
        </header>
        </div>
    )
}

export default Header
 