import React, { Component } from 'react';
import AnnouncementContainer from '../components/announcementContainer';
import Slideshow from '../components/slideshow';
import SlideshowOverlay from '../components/slideshowOverlay';

export default class Home extends Component {
  render() { 
    return (
      <div className="home">
        <Slideshow/>
        <SlideshowOverlay/>
        <AnnouncementContainer/>
      </div>
    )
  }
}