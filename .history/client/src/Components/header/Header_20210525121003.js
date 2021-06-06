import React,{useState,useContext} from 'react';
import './header.css'
import {GlobalState} from './../../GlobalState'

function Header() {
    const value = useContext(GlobalState)
    return (
        <div>
           {value}
        </div>
    )
}

export default Header
 