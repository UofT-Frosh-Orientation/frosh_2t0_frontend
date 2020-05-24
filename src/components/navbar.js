import React, {Component} from 'react'
import './navbar.css'
import navbarIcon from "./assets/2T0Logo.svg"
import blogIcon from "./assets/blog.svg"
import facebookIcon from "./assets/facebook.svg"
import instagramIcon from "./assets/instagram.svg"
import snapchatIcon from "./assets/snapchat.svg"
import twitterIcon from "./assets/twitter.svg"
import youtubeIcon from "./assets/youtube.svg"

class Navbar extends Component {
  render() {
    return (
      <div class="navbar">
        <div class="navbarIcon">
          <img src={navbarIcon} alt="Frosh Week Icon"></img>
        </div>
        <div class="navbarSocialsContainer">
          <img src={instagramIcon} alt="Instagram"></img>
          <img src={snapchatIcon} alt="Snapchat"></img>
          <img src={facebookIcon} alt="Facebook"></img>
          
        </div>
        <div class="navbarLinksContainer">
          <div class="selected"><a href="#Home">Home</a></div>
          <a href="#Registration">Registration</a>
          <a href="#AboutUs">About Us</a>
          <a href="#ContactUs">Contact Us</a>
        </div>
        
      </div>
    )
  }
}


export default Navbar;
