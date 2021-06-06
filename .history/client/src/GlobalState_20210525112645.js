import React, {createContext, useState, useEffect} from 'react'


import axios from 'axios'

export const GlobalState = createContext()


export const DataProvider = ({children}) =>{
    const [token, setToken] = useState(false)


    useEffect(() =>{
        
    },[])


    
   
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}