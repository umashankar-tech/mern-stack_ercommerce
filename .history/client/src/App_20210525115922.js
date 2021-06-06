import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {DataProvider} from './GlobalState';
import 
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
