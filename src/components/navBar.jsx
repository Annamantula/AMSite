import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const NavBar = () => {
  return (
    <Navbar
      className="sticky-nav"
      collapseOnSelect
      expand="md"
      fixed="top"
      style={{ padding: "30px",opacity: "0.9", }}
    >
      <Container className="container-fluid">
        <Nav className="navbar bg-body-tertiary fixed-top">
  <div className="container-fluid" id="content">
    <a className="navbar-brand mx-5" href="#about" style={{fontSize:"47px", color:"#413f3f"}}>Anna Mantula</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title mx-5" id="offcanvasNavbarLabel">Anna Mantula</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item mx-2 px-3" style={{fontSize:"22px", color:"#413f3f"}}>
            <a className="nav-link active" aria-current="page" href="#about">About</a>
          </li>
          <li className="nav-item dropdown mx-2 px-3" style={{fontSize:"22px", color:"#413f3f"}}>
            <a className="nav-link dropdown-toggle" href="#projects" id="projectsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Projects
            </a>
            <ul className="dropdown-menu my-dropdown-menu" aria-labelledby="projectsDropdown">
            <li>
      <a href="#ALSA" className="dropdown-item">
        ALSA
      </a>
    </li>
    <li>
      <a href="#PRIAN" className="dropdown-item">
        PRIAN
      </a>
    </li>
    <li>
      <a href="#Strangers Things" className="dropdown-item">
        Strangers Things
      </a>
    </li>
    <li>
      <a href="#tic-tac-toe" className="dropdown-item">
        Tic-Tac-Toe
      </a>
    </li>
  </ul>
            </li>
            <li className="nav-item mx-2 px-3" style={{fontSize:"22px", color:"#413f3f"}}>
            <a className="nav-link" aria-current="page" href="#skillset">Skillset</a>
          </li>
          <li className="nav-item btn mx-2 px-3" style={{fontSize:"22px", color:"#413f3f", backgroundColor: "#dbfdb0",
          // boxShadow: "2px 2px 3px 0px #999999"
          }}>
            <a className="nav-link" aria-current="page" href="#contacts">Contacts</a>
          </li>   
        </ul>
      </div>
    </div>
  </div>
</Nav>
      </Container> 
    </Navbar>
  );
};

export default NavBar;