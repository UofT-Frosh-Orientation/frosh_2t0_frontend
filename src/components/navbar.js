import React, {Component} from 'react'
import '../css/components/navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Jumbotron, Button, Navbar, Nav, NavItem, NavDropdown,Form,FormControl} from 'react-bootstrap';
// import navbarIcon from "./assets/2T0Logo.svg"
import navbarIcon from "./assets/main_logo_transparent.png"
import blogIcon from "./assets/blog.svg"
import facebookIcon from "./assets/facebook.svg"
import instagramIcon from "./assets/instagram.svg"
import snapchatIcon from "./assets/snapchat.svg"
import twitterIcon from "./assets/twitter.svg"
import youtubeIcon from "./assets/youtube.svg"
import {Link} from 'react-router-dom';

class NavbarComponent extends Component {
  render() {
    return (
    <Navbar expand="md" fixed="top" >
      <Navbar.Brand style={{position: 'absolute'}} >
        <Link to="/">
          <img src={navbarIcon} className="d-inline-block align-top" alt="Frosh Week Icon" width="30" height="30"/>
        </Link>
      </Navbar.Brand>
      <div className="sticky-top" style={{position: 'absolute', display: 'inline-block', float: 'right', right:'0vw'}}>
        <Navbar.Toggle aria-controls="navbar-id" className="sticky-top"/>
      </div>
      <div className = "navbarTitle">
          F!ROSH WEEK 2T0
        </div>
      <Navbar.Collapse id="navbar-id" className="justify-content-center">
        <div className="navbarLink navbarSelected"><NavItem><Link to="/">Home</Link></NavItem></div>
        <div className="navbarLink"><NavItem><Link to="/register">Registration</Link></NavItem></div>
        <div className="navbarLink"><NavItem><Link to="/about">About Us</Link></NavItem></div>
        <div className="navbarLink"><NavItem><Link to="/contact">Contact Us</Link></NavItem></div>
      </Navbar.Collapse>
        <div className="navbarSocialsContainer">
          <img src={instagramIcon} alt="Instagram"></img>
          <img src={snapchatIcon} alt="Snapchat"></img>
          <img src={facebookIcon} alt="Facebook"></img>
        </div>      
    </Navbar>

    )
  }
}


export default NavbarComponent;
