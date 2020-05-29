import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/components/slideshow.css'
import spaceImg from "./assets/space.png"
import layer1 from "./assets/layers/1.svg"
import layer2 from "./assets/layers/2.svg"
import layer3 from "./assets/layers/3.svg"
import layer4 from "./assets/layers/4.svg"
import layer5 from "./assets/layers/5.svg"
import layer6 from "./assets/layers/6.svg"
import layer7 from "./assets/layers/7.svg"
import layer8 from "./assets/layers/8.svg"
import layer9 from "./assets/layers/9.svg"
import layer10 from "./assets/layers/10.svg"
import layer11 from "./assets/layers/11.svg"


import {Jumbotron, Button, Carousel} from 'react-bootstrap';

class Slideshow extends Component {
  render() {
    return (
        <Carousel interval={5000}>
            <Carousel.Item>
                <div className="slideshowBG">
                    <div className="animateShip1"><img src={layer1}/></div>
                    <div className="animatePlanet1"><img src={layer2}/></div>
                    <div className="animatePlanet2"><img src={layer3}/></div>
                    <div className="animatePlanet3"><img src={layer4}/></div>
                    <div className="animatePlanet4"><img src={layer5}/></div>
                    <div className="animateConstellation2"><img src={layer6}/></div>
                    <div className="animateShip2"><img src={layer7}/></div>
                    <div className="animateConstellation1"><img src={layer8}/></div>
                    <div className="animateConstellation2"><img src={layer9}/></div>
                    <div className="animatePlanet5"><img src={layer10}/></div>
                    <div className="animatePlanetBig"><img src={layer11}/></div>

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
