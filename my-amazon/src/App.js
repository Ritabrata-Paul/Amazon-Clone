import React, {useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import 'firebase/compat/auth';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider"; 
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe('pk_test_51LQtxKSHr6ShtB9U77ihrL2ZynMgdMv3U6DAHxZOVcWm7PFVwe9Gyhr41bBRU2D28D9gxqywij89kcndjU3hVeVP00LyUBBCLJ');

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    
    auth.onAuthStateChanged(authUser  => {
      console.log('The user is >>> ', authUser);

      if(authUser)
      {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }
      else{
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }

    });

  }, []);

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
          
          <Route path ='/Payment' element = {<>
          <Header/>
          <Elements stripe={promise}>
            <Payment/>
          </Elements>
          
          
          
          </>}
          />
          
                   
          
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
