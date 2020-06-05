import React, {Component} from 'react'
import '../css/components/navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Jumbotron, Button, Navbar, Nav, NavItem, NavDropdown,Form,FormControl} from 'react-bootstrap';
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
    let homeSelect = "navbarLink", 
        aboutSelect = "navbarLink", 
        regSelect = "navbarLink", 
        contactSelect = "navbarLink", 
        outreachSelect = "navbarLink";

    switch (this.props.page) {
      case "home": homeSelect += " navbarSelected"; break;
      case "about": aboutSelect += " navbarSelected"; break;
      case "register": regSelect += " navbarSelected"; break;
      case "contact": contactSelect += " navbarSelected"; break;
      case "outreach": outreachSelect += " navbarSelected"; break;
      default: break;
    }

    return (
    <Navbar expand="md" fixed="top" >
      <Navbar.Brand style={{position: 'absolute'}} >
        <Link to="/">
          <img src={navbarIcon} className="d-inline-block align-top navbarIcon" alt="Frosh Week Icon"/>
        </Link>
      </Navbar.Brand>
      <div className="sticky-top" style={{position: 'absolute', display: 'inline-block', float: 'right', right:'0vw'}}>
        <Navbar.Toggle aria-controls="navbar-id" className="sticky-top"/>
      </div>
      <div className = "navbarTitle">
        F!ROSH WEEK 2T0
      </div>
      <Navbar.Collapse id="navbar-id" className="justify-content-center">

        <div className={homeSelect} ><NavItem><Link to="/">Home</Link></NavItem></div>
        <div className={regSelect}><NavItem><Link to="/register">Registration</Link></NavItem></div>
        <div className={aboutSelect}><NavItem><Link to="/about">About Us</Link></NavItem></div>
        <div className={contactSelect}><NavItem><Link to="/contact">Contact Us</Link></NavItem></div>
        <div className={outreachSelect}><NavItem><Link to="/outreach">Outreach</Link></NavItem></div>

      </Navbar.Collapse>
        <div className="navbarSocialsContainer">
          <a href="https://www.instagram.com/froshweek/"><img src={instagramIcon} alt="Instagram"></img></a>
          <a href="https://www.facebook.com/froshweekuofteng"><img src={facebookIcon} alt="Facebook"></img></a>
        </div>      
    </Navbar>

    )
  }
}


export default NavbarComponent;
