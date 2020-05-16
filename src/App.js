import React, {useState} from "react";
import {Route, Link} from "react-router-dom";
import Pizza from './components/Pizza.js'
import Customers from './components/Customers.js'

const App = () => {
  const [customer, setcustomer]=useState([])
  const person = (object)=>{
    setcustomer([...customer, object])
  }
  
  return (
     <div>
      <h1>Lambda's Pizzaria</h1>
      <button>Home</button>
      <button>Pizza </button>
      
     

  
      <Pizza people={person}/>

      <Customers client={customer}/>
      </div>
  );
};
export default App;
