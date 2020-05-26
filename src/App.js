import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar.js'
import './App.css';

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
