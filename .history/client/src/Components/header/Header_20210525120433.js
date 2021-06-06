import React,{useState,useContext} from 'react';
import {GlobalState} from './../../GlobalState'

function Header() {
    const value = useContext(GlobalState)
    return (
        <div>
            Header Component
        </div>
    )
}

export default Header
 