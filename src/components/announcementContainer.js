import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import '../css/components/announcement.css';
import Announcement from './announcement';
import announceData from '../util/announcements.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function AnnouncementContainer() {

    //states
    const announceWidth = 200;
    let maxLeft = useRef((announceData.length-2) * announceWidth);
    let [overlayTitle, setOverlayTitle] = useState("");
    let [overlayPara, setOverlayPara] = useState("");
    let [overlayImg, setOverlayImg] = useState("bugbear.png");
    let [overlayDisplay, setOverlayDisplay] = useState("none");
    let [leftMargin, setLeftMargin] = useState(0);

    //read announcements from JSON file
    let count=0;
    let pastAnnounceData = announceData.slice(1);
    let pastAnnouncements = (pastAnnounceData != null || pastAnnounceData !== []) ? 
        pastAnnounceData.map(a => {
            count++;
            return <Announcement
                status="old"
                title={a.title}
                announcement={a.announcement}
                imageSource={require('../resources/images/announcements/' + a.image)}
                key={count}
                index={count}
                handleReadMore={handleReadMore}
            />
        }) : <span/>

    //component did mount
    useEffect(() => {
        let announceConWidth = document.getElementById("announceList").clientWidth;
        maxLeft.current =  (announceData.length - 2 - Math.floor(announceConWidth/announceWidth)) * announceWidth;
    }, []);

    //Button Functions
    function handleReadMore(e) {
        let elem = announceData[parseInt(e.target.name)];
        setOverlayTitle(elem.title);
        setOverlayPara(elem.announcement);
        setOverlayImg(elem.image);
        setOverlayDisplay("block");
        document.getElementById("homeContainer").style.filter = "blur(10px)";
    }

    function handleCloseOverlay(){
        setOverlayDisplay("none");
        document.getElementById("homeContainer").style.filter = "none";
    }

    function scrollRight() {
        if(leftMargin <= 0 && Math.abs(leftMargin) <= maxLeft.current){
            setLeftMargin(leftMargin - announceWidth);
        }
    }

    function scrollLeft() {
        if(Math.abs(leftMargin) > 0){
            setLeftMargin(leftMargin + announceWidth);
        }
    }

    //Announcement Container HTML render
    return(
        <div>
            <AnnouncementOverlay
                display = {overlayDisplay}
                title = {overlayTitle}
                announcement = {overlayPara}
                imageSource = {overlayImg}
                closeOverlay = {handleCloseOverlay}
                />
            <div id="homeContainer" style={{transition: "0.2s ease-in-out"}}>
                <h1 className="section-title"> Announcements </h1>
                <div style={{ width: '80%', margin: 'auto'}}> 
                    <Container>
                        <Announcement
                            status="new"
                            title={announceData[0].title}
                            announcement={announceData[0].announcement}
                            imageSource={require('../resources/images/announcements/' + announceData[0].image)}
                            index={0}
                            handleReadMore={handleReadMore}
                        />
                    </Container>
                </div>
                <div className="old-announcement-container">
                    <button className="scroll-buttons" id="leftAnnounce" onClick={scrollLeft}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    <div className="card-overlay">
                        <ul id="announceList" className="card-container" style={{marginLeft: leftMargin}}>
                            {pastAnnouncements}
                        </ul>
                    </div>
                    <button className="scroll-buttons" id="rightAnnounce">
                        <FontAwesomeIcon icon={faAngleRight} onClick={scrollRight}/>
                    </button>
                </div>
                <h1> Keep updated by following us!</h1>
                <ul className="socials">
                    <li><a href="https://www.facebook.com/froshweekuofteng"><img src={require('../resources/icons/socials/facebook.png')}/></a></li>
                    <li><a href="https://www.instagram.com/froshweek/"><img src={require('../resources/icons/socials/instagram.png')}/></a></li>
                    <li><a href=""><img src={require('../resources/icons/socials/snapchat.png')}/></a></li>
                </ul>
            </div>
        </div>
    );
}

function AnnouncementOverlay(props) {
    return(
        <div id="announceOverlay" style={{display: props.display, transition: "0.3s ease-in-out"}}>
            <button id="closeAnnouncement" onClick={props.closeOverlay}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="announce-overlay-container">
                <Row>
                    <Col sm={3.5}/>
                    <Col md={5}>
                        <div className="announce-image-container">
                            <img src={require("../resources/images/announcements/" + props.imageSource)} className="announce-image" alt={props.title}/>
                        </div>
                    </Col>
                </Row>
                <div className="overlay-text">
                    <h5 className="past-announce-title">{props.title}</h5>
                    <p className="past-announce-para">{props.announcement}</p>
                </div>
            </div>
        </div>
    );
}

export default AnnouncementContainer;