import React, { Component } from 'react';
import OutreachEvents from '../components/outreachEvents';
import NavbarComponent from '../components/navbar';

export default class Outreach extends Component {
  render() { 
    return (
      <div>
        <NavbarComponent page="outreach"/>
        <div className="outreach">
          <OutreachEvents/>
        </div>
      </div>
    )
  }
}