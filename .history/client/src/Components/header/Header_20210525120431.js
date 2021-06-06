import React,{useState,useContext} from 'react';
import {GlobalState} from './../../GlobalState'

function Header() {
    const value = useContext(G)
    return (
        <div>
            Header Component
        </div>
    )
}

export default Header
 