import React from 'react';
import { Col, Row } from 'react-grid-system';
import '../css/components/announcement.css';

function Announcement(props) {
    const maxWords = 60;
    const pastMaxWords = maxWords - 30;

    let words = props.announcement.split(" ");
    let numWords = words.length;

    if(props.status === 'new'){
        return (
            <RecentAnnounce 
                title = {props.title}
                imageSource = {props.imageSource}
                announcement = {(numWords > maxWords) ? words.slice(0,maxWords).join(' ') + "..." : props.announcement}
                readMore={(numWords > maxWords) ? <ReadMoreButton index={props.index} handleReadMore={props.handleReadMore}/> : <span/>}/>
        );
    } else if (props.status === 'old'){
        return(
            <PastAnnounce 
                title = {props.title}
                imageSource = {props.imageSource}
                announcement = {(numWords > pastMaxWords) ? words.slice(0, pastMaxWords).join(' ') + "..." : props.announcement}
                readMore={(numWords > pastMaxWords) ? <ReadMoreButton index={props.index} handleReadMore={props.handleReadMore}/> : <span/>}/>
        );
    }else{
        return (<div/>);
    }
}

function PastAnnounce(props) {

    return(
        // <Col md={2.5}>
        <li className="past-announce">
            <Row>
                <Col md={0.5}/>
                <Col md={11}>
                    <div className="announce-image-container img-old-announce">
                        <img src={props.imageSource} alt={props.title}/>
                    </div>
                </Col>
            </Row>
            <h5 className="past-announce-title">{props.title}</h5>
            <p className="past-announce-para">{props.announcement}</p>
            {props.readMore}
        </li>
        // </Col>
    );
}

function RecentAnnounce(props) {
    return(
        <Row>
            <Col md={5}>
                <div className="announce-image-container img-new-announce">
                    <img src={props.imageSource} alt={props.title}/>
                </div>
            </Col>
            <Col md={7}>
                <h3 className="recent-announce-title">{props.title}</h3>
                <p className="recent-announce-para">{props.announcement}</p>
                {props.readMore}
            </Col>
        </Row>
    );
}


function ReadMoreButton(props) {
    return(
            <button 
                name={props.index} 
                className="read-more"
                onClick={props.handleReadMore}>                
                Read More
            </button>
    );
}


export default Announcement;
