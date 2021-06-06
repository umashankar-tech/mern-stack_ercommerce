import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {DataProvider} from './GlobalState';
//import Header from './Components/header/Header'
import Header from './Components/headers/Header'
import HomePages from './Components/mainpages/Pages'
function App() {
  return (
   <DataProvider>
   <Router>
     <div className="App">
    <Header/>
     <HomePages/>      
    </div>
   </Router>
    
   </DataProvider>
   
  );
}

export default App;
  