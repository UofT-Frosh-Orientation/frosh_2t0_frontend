import React from 'react';
import { Col } from 'react-grid-system';

export default function Profile(props){
    return(
        <Col md={4}>
            <div className="profile-img">
                <img src={require("../resources/icons/frosh-logo.png")} alt={props.name}/>
            </div>
            <div className="text">
                <h4>{props.name}</h4>
                <h5>{props.role}</h5>
                <p> {props.des} </p>
                <h6> Favourite Part About Frosh </h6>
                <p> {props.fav} </p>
            </div>
        </Col>
    )
}