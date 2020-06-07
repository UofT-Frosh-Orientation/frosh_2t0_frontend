import React, { Component } from "react";
import '../css/components/register.css';
import InputComp from "../components/inputComponent";
import NavbarComponent from "../components/navbar";
import { Container, Row } from "react-grid-system";
import { Col } from "react-bootstrap";

export default class Login extends Component {
    render(){
        return(
            <div>
                <NavbarComponent page="login"/>
                <div className="register">
                    <h1>Login</h1>
                    <Container>
                        <Row>
                            <Col lg={6}>
                                <form>
                                    <InputComp title="Username" name="username"/>
                                    <InputComp title="Password" name="password"/>
                                </form>
                            </Col>
                        </Row>
                        <a href="/"> Forgot Password? </a>
                    </Container>
                </div>
            </div>
        );
    }
}