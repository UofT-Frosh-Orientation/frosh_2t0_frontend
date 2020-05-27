import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/components/slideshow.css'
import {Jumbotron, Button, Carousel} from 'react-bootstrap';

class Slideshow extends Component {
  render() {
    return (
        <Carousel interval={5000}>
            <Carousel.Item>
                <div class="slideshowLandingBG">
                    <br/><br/><br/>
                    <div class="slideshowButton">
                        Register Now!
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="slideshowSlide">
                    <img src="https://photos.smugmug.com/1T9-2T0/Frosh-Week/Frosh-Events/Cheer-off/i-gGx2t7W/0/41239513/XL/_IGP8970-XL.jpg"></img>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="slideshowBG"></div>
            </Carousel.Item>
        </Carousel>
    )
  }
}


export default Slideshow;
