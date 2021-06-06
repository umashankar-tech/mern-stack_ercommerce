import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {DataProvider} from './GlobalState';
import Header from './Components/header';
import HomePages from './'
function App() {
  return (
   <DataProvider>
   <Router>
     <div className="App">
     hello there    
    </div>
   </Router>
    
   </DataProvider>
   
  );
}

export default App;
