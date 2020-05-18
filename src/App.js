import React, {useState} from "react";
import {Route, Link} from "react-router-dom";

import Pizza from './components/Pizza.js'
import Customers from './components/Customers.js'
import Home from './components/Home.js'
const App = () => {
  const [customer, setcustomer]=useState([])
  const person = (object)=>{
    setcustomer([...customer, object])
  }
  
  return (
     <div className="Contain">
       <div className="nav">
      <h1>Lambda's Pizzaria</h1>
      <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/pizza">Order Pizza</Link>
      </div>
      </div>
      <Route exact path="/" component={Home}/>

      <Route path="/pizza">
      <Pizza people={person}/>
      <Customers client={customer}/>
      </Route>

      
      </div>
  );
};
export default App;
