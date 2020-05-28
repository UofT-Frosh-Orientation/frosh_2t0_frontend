import React, {Component} from 'react'
import '../css/components/navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Jumbotron, Button, Navbar, Nav, NavDropdown,Form,FormControl} from 'react-bootstrap';
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
      <div className="navbarIcon" style={{position: 'absolute'}} >
        <img src={navbarIcon} className="d-inline-block align-top" alt="Frosh Week Icon" width="100%" height="100%"/>
      </div>
      <div className="sticky-top" style={{position: 'absolute', display: 'inline-block', float: 'right', right:'0vw'}}>
        <Navbar.Toggle aria-controls="navbar-id" class="sticky-top"/>
      </div>
      <Navbar.Collapse id="navbar-id" className="justify-content-center">
        <div className="navbarLink navbarSelected"><Nav.Link href="/">Home</Nav.Link></div>
        <div className="navbarLink"><Nav.Link href="/register">Registration</Nav.Link></div>
        <div className="navbarLink"><Nav.Link href="/about">About Us</Nav.Link></div>
        <div className="navbarLink"><Nav.Link href="/contact">Contact Us</Nav.Link></div>
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
