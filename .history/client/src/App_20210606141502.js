import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {DataProvider} from './GlobalState';
import './app.css'
//import Header from './Components/header/Header'
import Header from './Components/headers/Header'
import HomePages from './Components/mainpages/Pages'
function App() {
  return (
   <DataProvider>
   <Router>
     <div className="App">
     <div className="header">
       <Header/>
     </div>
     <div className="homepage">
     <HomePages/>  
     </div>         
    </div>
   </Router>
    
   </DataProvider>
   
  );
}

export default App;
  