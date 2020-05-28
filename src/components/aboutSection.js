import React from 'react';
import '../css/components/about.css';
import { Container, Row, Col } from 'react-grid-system';

export default function AboutSection(props) {
    if(props.section === "about"){
        return (
            <div className="about-section">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h3>Why Frosh Week?</h3>
                            <p>Congue mauris rhoncus aenean vel elit scelerisque. Sit amet dictum sit amet justo donec. Consequat semper viverra nam libero. Eget sit amet tellus cras adipiscing enim eu. Amet nisl suscipit adipiscing bibendum est. Purus in mollis nunc sed id. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Convallis a cras semper auctor neque. Velit scelerisque in dictum non. Vitae tortor condimentum lacinia quis vel eros donec. </p>
                        </Col>
                        <Col md={6}>
                            <h3>What is Skule?</h3>
                            <p>Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Felis donec et odio pellentesque diam volutpat. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. In eu mi bibendum neque egestas congue quisque egestas diam. Felis imperdiet proin fermentum leo vel orci porta. Faucibus interdum posuere lorem ipsum dolor. Viverra adipiscing at in tellus. </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    } else if (props.section === "web"){
        return (
            <div className="about-section">
                <Container>
                    <Row>
                        <Col>
                            <h3>From the Web Team</h3>
                            <p>
                                Our vision is to create a welcoming, informative, and user friendly virtual platform
                                to guide frosh students to a fun and unique orientation week.
                            </p>
                            <p>
                                We hope to assist you on the best Fr!osh experience possible in these difficult circumstances 
                                and are here to answer any of your questions at all times. Hope to see you at frosh week!
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    } else if (props.section === "team"){
        return(
            <div className="about-section">
                <Container>
                    <Row>
                        <Col>
                            <h3>People Behind Fr!osh</h3>
                            <p>
                                Meet your Orientation Chair and Vice Chairs! These are the people
                                organize Fr!osh and keep your leedurs in check.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}