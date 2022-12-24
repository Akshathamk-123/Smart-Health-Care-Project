
/*import React from "react";
import { Link } from "react-router-dom";
//import { connect } from "react-redux";
//import { signOut } from "../../actions/authAction";
import "./style_nav.css";

function NavBar(props) {
  function toggleNav() {
    animateSlider();
    const burgerButton = document.getElementById("burger");
    burgerButton.classList.toggle("is-active");
  }

  function animateSlider() {
    const slider = document.getElementsByClassName("slider")[0];
    document.getElementById("root").style.overflow = "hidden";
    slider.classList.toggle("active");

    const list = document.getElementsByClassName("list")[0];
    list.childNodes.forEach((e, index) => {
      if (e.style.animation) e.style.animation = "";
      else
        e.style.animation = `listItemFade 0.5s ease forwards ${
          index / 5 + 0.3
        }s`;
    });
  }

  return (
    <nav className="nav-wrapper">
      <div id="burger" class="ico-btn" onClick={toggleNav}>
        <span class="ico-btn__burger"></span>
      </div>


      /*<div id="slider" className="slider">
        <ul className="list">
          <Link onClick={toggleNav} to="/movies">
            Home
          </Link>
          {!props.loggedIn ? (
            <>
              <Link onClick={toggleNav} to="/login">
                Login
              </Link>

              <Link onClick={toggleNav} to="/resigter">
                Register
              </Link>
            </>
          ) : (
            <Link
              onClick={() => {
                toggleNav();
                //props.signOut();
              }}
              to="/#"
            >
              Log out
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
//    signOut: () => dispatch(signOut()),
  };
};

export default NavBar;*/
//export default connect(mapStateToProps, mapDispatchToProps)(Navbar);


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <nav style={{backgroundColor:"#354F8E"}}>
    <Navbar bg="#01d28e" expand="lg">
      <Container>
        <Navbar.Brand href="/Home" style={{color:"#00E7FF",}}>Health Care</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/chatbot">Chatbot</Nav.Link>
            <Nav.Link href="/service">Service</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/Register">Register</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
           
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </nav>
  );
}

export default BasicExample;