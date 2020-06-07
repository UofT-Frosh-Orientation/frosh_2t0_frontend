import React, { Component } from 'react';
import AnnouncementContainer from '../components/announcementContainer';
import Slideshow from '../components/slideshow';
import SlideshowOverlay from '../components/slideshowOverlay';
import NavbarComponent from '../components/navbar';
import ScheduleContainer from '../components/schedule';

export default class Home extends Component {
  render() { 
    return (
      <div>
        <NavbarComponent page="home"/>
        <div className="home">
          <Slideshow/>
          <SlideshowOverlay/>
          <AnnouncementContainer/>
          <ScheduleContainer/>
        </div>
      </div>
    )
  }
}