
import React, { Component } from 'react';
import Navbar from './components/navbar.js'
import './App.css';
import AnnouncementContainer from './components/announcementContainer';
import Slideshow from './components/slideshow';
import NavbarComponent from './components/navbar.js';

class App extends Component {
  render() { 
    return (
      <div className="App">
        <NavbarComponent/>
        <Slideshow/>
      </div>
    )
  }
}

export default App;
