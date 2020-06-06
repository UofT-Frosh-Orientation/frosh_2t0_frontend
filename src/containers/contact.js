import React, { Component } from 'react';
import ContactUs from '../components/contactUs';
import NavbarComponent from '../components/navbar';

export default class Contact extends Component {
  render() { 
    return (
      <div>
        <NavbarComponent page="contact"/>
        <div className="contact">
          <ContactUs/>
        </div>
      </div>
    )
  }
}