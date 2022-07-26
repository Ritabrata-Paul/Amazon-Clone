import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from "./Checkout";
import Login from "./Login";


function App() {
  return (
    <Router>
      <div className="app">
      
        <Routes>
          <Route path ='/' element = {<>
          <Header/>
          <Home/>
          
          </>}
          /> 
          <Route path ='/Checkout' element = {<>
          <Header/>
          <Checkout/>
          
          </>}
          /> 
          <Route path ='/Login' element = {<Login/>}/>
          
          
                   
          
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
