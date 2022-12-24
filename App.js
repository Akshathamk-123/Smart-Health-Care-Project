

import React, { Component } from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import axios from 'axios';

import logo from "./logo.svg";
import "./App.css";
//import Form from "./pages/Form";
//import "./external.css";
//import styles from "./css/reg.css";
//import "./css/bootstrap.min.css";
//import about from "./about.jpg";



import {BrowserRouter as Router, Link ,Route, Routes} from 'react-router-dom'
  
import Register from "./pages/Register";
  import Login from "./pages/login";
  import Css from "./css/style.css";
  import Home from "./pages/home";
  import Service from "./pages/service";
  import Appointment from "./pages/appointment"
  import About from "./pages/about";
  import Contact from "./pages/contact";
  import ChatBot from "./pages/chatbot";

  import logstyle from "./css/login.css";
  //import Test from "./pages/test";
  import Navbar from "./components/NavBar/index_nav";
  import Footer from "./components/Footer/footer";



class App extends Component { 
  constructor(props){
  super(props); 
 
  }

render() {
  return (
    <Router style={Css}>
        <Navbar/>
        
        <Routes>
 
              <Route path="/home" element={<Home/>} />
              <Route style={logstyle} exact path="/login" element={<Login/>} />
              <Route style={logstyle} path="/Register" element={<Register/>} />
              <Route path="/service" element={<Service/>} />
              <Route path="/appointment" element={<Appointment/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/chatbot" element={<ChatBot/>} />
              
              
 
        </Routes>
        <Footer/>
    </Router>

  )
 }
 }

export default App;

