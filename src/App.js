import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from "./Home";
import About from "./About";
import Subjects from "./Subjects";
import Contact from "./Contact";

import Navbar from "./Navbar";
import Footer from "./Footer";

// importing Bootsrtap   
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle";



function App() {
  return (
    <>

      <Navbar/>

      <Switch>
      
        
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/subject" component={Subjects}/>
          <Route exact path="/contact" component={Contact}/>

          {/* by default anything url is given he will be send back to HOME PAGE */}
          <Redirect to="/"></Redirect>
          
      </Switch>
      {/* <Footer></Footer> */}
    
    </>
  );
}

export default App;
