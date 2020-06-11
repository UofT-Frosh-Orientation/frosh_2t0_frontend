import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/components/slideshow.css'
import spaceImg from "./assets/space.png"
import {Link} from 'react-router-dom';

class SlideshowOverlay extends Component {
  render() {
    return (
      <div>
        <Link to="/register">
          <div className="slideshowButton">
            Sign Up Now!
          </div>
        </Link>
        <div className = "slideshowText">
          F!ROSH WEEK 2T0
        </div>
      </div>
    )
  }
}


export default SlideshowOverlay;
