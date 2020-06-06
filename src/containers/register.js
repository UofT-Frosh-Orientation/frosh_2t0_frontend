import React, { Component } from 'react';
import NavbarComponent from '../components/navbar';
import { Container, Row, Col } from 'react-grid-system';
import '../css/components/register.css';

export default class Register extends Component {
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

function InputComp(props) {
  if(props.name === 'next') {
    return (
      <div className="buttonField">
        <input type="submit" name={props.name} value={props.title}/>
      </div>
    )
  }
  if(props.name === 'shirt') {
    return(
      <div className="inputField">
        <label> {props.title} </label>
        <select name={props.name}>
          <option value="extraLarge"> XL  </option>
          <option value="large">      L   </option>
          <option value="medium">     M   </option>
          <option value="small">      S   </option>
          <option value="extraSmall"> XS  </option>
        </select>
      </div>
    )
  }

  if(props.name === 'pronouns') {
    return(
      <div className="inputField">
        <label>{props.title}</label>
        <select name={props.name}>
          <option value="she/her">  She/Her </option>
          <option value="he/him">   He/Him  </option>
          <option value="other">    Other   </option>
        </select>
      </div>
    )
  }
  return(
    <div className="inputField">
      <label>{props.title}</label>
      <input type="text" name={props.name}/>
    </div>
  );
}