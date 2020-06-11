import React, { Component } from 'react';
import {OutreachHeader,OutreachEvents,OutreachHandbook} from '../components/outreach';
import NavbarComponent from '../components/navbar';

export default class Outreach extends Component {
  render() { 
    return (
      <div>
        <NavbarComponent page="outreach"/>
        <div className="outreach">
          <OutreachHeader/>
          <OutreachEvents/>
          <OutreachHandbook/>
        </div>
      </div>
    )
  }
}