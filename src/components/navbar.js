import React, {Component} from 'react'
import '../css/components/navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Jumbotron, Button, Navbar, Nav, NavDropdown,Form,FormControl} from 'react-bootstrap';
import navbarIcon from "./assets/2T0Logo.svg"
import blogIcon from "./assets/blog.svg"
import facebookIcon from "./assets/facebook.svg"
import instagramIcon from "./assets/instagram.svg"
import snapchatIcon from "./assets/snapchat.svg"
import twitterIcon from "./assets/twitter.svg"
import youtubeIcon from "./assets/youtube.svg"

class NavbarComponent extends Component {
  render() {
    return (
    <Navbar bg="light" expand="md" fixed="top" >
      <Navbar.Brand href="#home" style={{position: 'absolute'}} >
        <img src={navbarIcon} className="d-inline-block align-top" alt="Frosh Week Icon" width="30" height="30"/>
      </Navbar.Brand>
      <div class="sticky-top" style={{position: 'absolute', display: 'inline-block', float: 'right', right:'0vw'}}>
        <Navbar.Toggle aria-controls="navbar-id" class="sticky-top"/>
      </div>
      <Navbar.Collapse id="navbar-id" className="justify-content-center">
        <div class="navbarLink navbarSelected"><Nav.Link href="#Home">Home</Nav.Link></div>
        <div class="navbarLink"><Nav.Link href="#Registration">Registration</Nav.Link></div>
        <div class="navbarLink"><Nav.Link href="#AboutUsn">About Us</Nav.Link></div>
        <div class="navbarLink"><Nav.Link href="#ContactUs">Contact Us</Nav.Link></div>
      </Navbar.Collapse>
        <div class="navbarSocialsContainer">
          <img src={instagramIcon} alt="Instagram"></img>
          <img src={snapchatIcon} alt="Snapchat"></img>
          <img src={facebookIcon} alt="Facebook"></img>
        </div>
      

      
    </Navbar>

    )
  }
}


export default NavbarComponent;
