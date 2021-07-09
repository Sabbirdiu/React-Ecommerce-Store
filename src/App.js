import React from "react";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from './components';
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
} from './pages'

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
    
  );
}

export default App;
