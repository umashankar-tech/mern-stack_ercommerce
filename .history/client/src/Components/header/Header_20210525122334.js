import React,{useState,useContext} from 'react';
import './header.css';
import {GlobalState} from './../../GlobalState';
import Menu from './icon/bars-solid (1).svg';
import Close fro

function Header() {
    const value = useContext(GlobalState)
    return (
        <div>
           {value}
        </div>
    )
}

export default Header
 