import React, { Component } from "react";
import NavbarComponent from "../components/navbar";
import { Container, Row } from "react-grid-system";
import { Col } from "react-bootstrap";

export default class MyAccount extends Component{
    constructor(){
        super();
        this.state = {
            account : {
                first_name: 'asdfas',
                last_name: 'asdf',
                email: '',
                phone_number: '',
                birthday: '',
                address: '',
                pronouns: '',
                discipline: '',
                shirt_size: '',
                frosh_group: '',
                paid: false
            },
            accountHTML : <div/>,
            length : 0
        }
    }

    componentDidMount(){
        //call APIs here
        let len = 0;
        let temp = Object.keys(this.state.account).map((key, index) => {
            let title = key.replace('_',' ')
            len = index;
            return( <div className="accountField" key={index}>
                        <label> {title} </label>
                        <p> {this.state.account[key]}</p>
                    </div>)
        });
        this.setState({accountHTML: temp, length: len + 1});
    }

    render(){
        return(
            <div>
                <NavbarComponent page="account"/>
                <div className="register">
                    <h1> Account Information </h1>
                    <Container>
                        <Row>
                            <Col lg={8}>
                                {this.state.accountHTML}
                                <button> Edit </button>
                            </Col>
                            <Col>
                                <button> Change Password </button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}