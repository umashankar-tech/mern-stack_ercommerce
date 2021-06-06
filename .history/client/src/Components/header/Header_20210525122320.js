import React,{useState,useContext} from 'react';
import './header.css';
import {GlobalState} from './../../GlobalState';
import Menu from './'

function Header() {
    const value = useContext(GlobalState)
    return (
        <div>
           {value}
        </div>
    )
}

export default Header
 