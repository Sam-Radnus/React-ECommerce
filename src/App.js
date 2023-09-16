import logo from './logo.svg';
import React,{useState,useEffect} from "react";
import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import ProductOrderForm from './components/ProductOrderForm';


function App() {
  
  return (
    <div className="App">
     <Router>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Shop/>} ></Route>
      <Route exact path="/payment" element={<ProductOrderForm/>} ></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
