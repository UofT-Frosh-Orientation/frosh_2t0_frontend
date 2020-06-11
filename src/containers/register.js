import React, { Component } from 'react';
import NavbarComponent from '../components/navbar';
import InputComp from '../components/inputComponent';
import { Container, Row, Col } from 'react-grid-system';

// Stripe
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import '../css/components/register.css';
import PaymentComponent from '../components/payment';

export default class Register extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() { 
    const stripePromise = loadStripe('pk_test_O.....');

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
                    <InputComp title="Instagram Handle" name="insta_handle" optional={true}/>
                    <InputComp title="Phone Number" name="number"/>
                    <InputComp title="Birthday" name="birth"/>
                    <InputComp title="Shipping Address" name="address_english"/>
                    <InputComp title="Shipping Address" subtitle="In your Home Language (if applicable)" name="address_hl" optional={true}/>
                    <InputComp title="Preferred Pronouns" name="pronouns"/>
                </Col>
                <Col lg={6}>
                  <h3> Frosh Information </h3>
                    <InputComp title="Do you have stable wifi?" name="wifi"/>
                    <InputComp title="Discipline" name="discipline"/>
                    <InputComp title="Shirt Size" name="shirt"/>
                    <InputComp title="Availability" name="availability" subtitle="What times during the day are you free/willing to engage in Frosh Week activities?"/>
                    <InputComp title="Agree to Terms of Service" name="terms"/>
                  <h3> Payment </h3>
                    <Elements stripe={stripePromise}>
                      <PaymentComponent/>
                    </Elements>
                </Col>
              </Row>
            </Container>
          </form>
        </div>
      </div>
    )
  }
}