import React, { Component } from 'react';
import {ContactUsHeader,ContactUsSocials,ContactUsEmail} from '../components/contactUs';
import NavbarComponent from '../components/navbar';

export default class Contact extends Component {
  render() { 
    return (
      <div>
        <NavbarComponent page="contact"/>
        <div className="contact">
          <ContactUsHeader/>
          <ContactUsSocials/>
          <ContactUsEmail/>
        </div>
      </div>
    )
  }
}