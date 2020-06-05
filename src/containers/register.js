import React, { Component } from 'react';
import NavbarComponent from '../components/navbar';

export default class Register extends Component {
  render() { 
    return (
      <div>
        <NavbarComponent page="register"/>
        <div className="about">
          <h4>
              This website is still under construction, please email web@orientation.skule.ca if 
              you have any inquiries or suggestions for this page
          </h4>
        </div>
      </div>
    )
  }
}