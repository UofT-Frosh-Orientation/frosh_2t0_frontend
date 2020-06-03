import React, { Component } from 'react';
import './App.css';
import NavbarComponent from './components/navbar.js';
import Footer from './components/footer.js';
import {
  HashRouter as Router,
  Switch,
  Route} from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Register from './containers/register';
import Outreach from './containers/outreach';

class App extends Component {
  render() { 
    return (
      <Router>
        <NavbarComponent/>
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" exact component={About}/>
              <Route path="/contact" exact component={Contact}/>
              <Route path="/register" exact component={Register}/>
              <Route path="/outreach" exact component={Outreach}/>
            </Switch>
          </div>
        <Footer/>
      </Router>
    )
  }
}

export default App;
