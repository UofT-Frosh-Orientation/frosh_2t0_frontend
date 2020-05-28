import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/components/slideshow.css'
import spaceImg from "./assets/space.png"
import {Jumbotron, Button, Carousel} from 'react-bootstrap';

class Slideshow extends Component {
  render() {
    return (
        
        <Carousel interval={5000}>
            <Carousel.Item>
                <div className="slideshowSlide">
                    <img src={spaceImg}></img>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="slideshowSlide">
                    <img src="https://photos.smugmug.com/1T9-2T0/Frosh-Week/Frosh-Events/Cheer-off/i-gGx2t7W/0/41239513/XL/_IGP8970-XL.jpg"></img>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="slideshowBG"></div>
            </Carousel.Item>
        </Carousel>
    )
  }
}


export default Slideshow;
