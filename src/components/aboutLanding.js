import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../css/components/about.css';

export default function AboutLanding() {
    return (
        <div className="about-landing">
            <div className="main-img-container">
                <img src={require('../resources/images/about/landing-image.png')} alt="forsh week about"/>
            </div>
            <h1> About Us </h1>
            <AnchorLink id="downArrow" href="#aboutSection">
                <img src={require('../resources/icons/down-arrow.svg')} alt="down arrow"/>
            </AnchorLink>
        </div>
    )
}