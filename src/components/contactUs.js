import React, {Component} from 'react'
import '../css/components/contact.css'
import youtubeIconLarge from "./assets/socialsLarge/youtube-brands.svg"
import tiktokIconLarge from "./assets/socialsLarge/tik-tok-brands.svg"
import snapchatIconLarge from "./assets/socialsLarge/snapchat-brands.svg"
import instagramIconLarge from "./assets/socialsLarge/instagram-brands.svg"
import facebookIconLarge from "./assets/socialsLarge/facebook-brands.svg"


class ContactUsHeader extends Component {
  render() {
    return (
      <div className="contactUs">
        <div className="landingImage">
          <p>Contact Us</p>
          <div className='landingImageOverlay'></div>
          <img src="https://photos.smugmug.com/1T9-2T0/Frosh-Week/Frosh-Events/Cheer-off/i-gGx2t7W/0/41239513/XL/_IGP8970-XL.jpg"></img>
        </div>
      </div>
    )
  }
}

class ContactUsSocials extends Component {
  render() {
    return (
      <div className="contactUs">
        <div className="sectionTitleContainer">
          <div className="sectionTitle">
              Social Media
          </div>
        </div>
        <div className="socialContainerLarge">
          <a href="https://www.facebook.com/froshweekuofteng">
            <div className="socialIconLarge" style={{background:'#5e92f3'}}>
              <img src={facebookIconLarge} alt="Facebook"></img>
            </div>
          </a>
          <a href="https://www.instagram.com/froshweek/">
            <div className="socialIconLarge" style={{background:'#d81b60'}}>
              <img src={instagramIconLarge} alt="Instagram"></img>
            </div>
          </a>
          <div className="socialIconLarge" style={{background:'#fdd835'}}>
            <img src={snapchatIconLarge} alt="Snapchat"></img>
          </div>
          <div className="socialIconLarge" style={{background:'#e53935'}}>
            <img src={youtubeIconLarge} alt="Youtube"></img>
          </div>
          <div className="socialIconLarge" style={{background:'#484848'}}>
            <img src={tiktokIconLarge} alt="TikTok"></img>
          </div>
        </div>
      </div>
    )
  }
}

class ContactUsEmail extends Component {
  render() {
    return (
      <div className="contactUs">
        <div className="sectionTitleContainer">
          <div className="sectionTitle">
              Inquiries and Questions
          </div>
        </div>
        <div className="emailContactContainer">
          <div className="emailContactHeader">
            General inquiries:
          </div>
          <div className="emailContact">
            froshweek@orientation.skule.ca
          </div>
          <div className="emailContactHeader">
            Registration and tech support:
          </div>
          <div className="emailContact">
            support@orientation.skule.ca
          </div>
        </div>
      </div>
    )
  }
}

export {
  ContactUsHeader,
  ContactUsSocials,
  ContactUsEmail,
}