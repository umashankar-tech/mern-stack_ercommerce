import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {DataProvider} from './GlobalState'
function App() {
  return (
   <DataProvider>
   <Router>
     
   </Router>
     <div className="App">
     hello there    
    </div>
   </DataProvider>
   
  );
}

export default App;
