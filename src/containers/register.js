import React, { Component } from 'react';
import NavbarComponent from '../components/navbar';
import InputComp from '../components/inputComponent';
import { Container, Row, Col } from 'react-grid-system';
import '../css/components/register.css';

export default class Register extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() { 
    return (
      <div>
        <NavbarComponent page="register"/>
        <div className="register">
          <h1>Registration</h1>
          <form>
            <Container>
              <Row>
                <Col lg={6}>
                  <h3> Personal Information </h3>
                    <InputComp title="First Name" name="firstname"/>
                    <InputComp title="Last Name" name="lastname"/>
                    <InputComp title="Email" name="email"/>
                    <InputComp title="Phone Number" name="number"/>
                    <InputComp title="Birthday" name="birth"/>
                </Col>
                <Col lg={6}>
                    <InputComp title="Address" name="address"/>
                    <InputComp title="Preferred Pronouns" name="pronouns"/>
                  <h3> Frosh Information </h3>
                    <InputComp title="Discipline" name="discipline"/>
                    <InputComp title="Shirt Size" name="shirt"/>
                    <InputComp title="Next   👉🏽" name="next"/>
                </Col>
              </Row>
            </Container>
          </form>
        </div>
      </div>
    )
  }
}