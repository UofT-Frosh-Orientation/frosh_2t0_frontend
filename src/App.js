import React, { Component } from 'react';
import './App.css';
import NavbarComponent from './components/navbar.js';
import Footer from './components/footer.js';
import {
  BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Register from './containers/register';

class App extends Component {
  render() { 
    return (
      <Router>
        <NavbarComponent/>
          <div class="container">
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" exact component={About}/>
              <Route path="/contact" exact component={Contact}/>
              <Route path="/register" exact component={Register}/>
            </Switch>
          </div>
        <Footer/>
      </Router>
    )
  }
}

export default App;
