import React, { Component } from 'react';
import AboutLanding from '../components/aboutLanding';
import AboutSection from '../components/aboutSection';

export default class About extends Component {
  render() { 
    return (
      <div className="about">
        <AboutLanding/>
        <span id="aboutSection"/>
        <br/><br/>
        <AboutSection section="about"/>
        <hr/>
        <AboutSection section="team"/>
        <hr/>
        <AboutSection section="web"/>
      </div>
    )
  }
}