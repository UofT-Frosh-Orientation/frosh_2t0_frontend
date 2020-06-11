import React from 'react';
import '../css/components/about.css';
import { Container, Row, Col } from 'react-grid-system';
import blurbs from '../util/VC_blurbs.json';
import Profile from './aboutProfile';

export default function AboutSection(props) {
    if(props.section === "about"){
        return (
            <div className="about-section">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h3>About Frosh Week</h3>
                            <p>
                                F!rosh Week, also known as Orientation, welcomes each and every incoming first-year into the vibrant community 
                                of UofT Engineering (“Skule™”). All corners of the UofT Engineering community are displayed through the F!rosh 
                                Week programming, and first years have the opportunity to learn more about all of the fun experiences and 
                                extra-curriculars UofT has to offer. This year, F!rosh Week will be moving into a primarily online setting due 
                                to the current COVID-19 pandemic. Frosh have the opportunity to be placed in F!rosh groups, where they can build 
                                meaningful relationships with upper year “Leedurs” and their future classmates. F!rosh Week aims to introduce YOU 
                                (the frosh!) to your undergraduate journey and give you the excitement and confidence you need to succeed during your 
                                first year of University!

                            </p>
                        </Col>
                        <Col md={6}>
                            <h3>What is Skule?</h3>
                            <p>
                            Skule™ is what we call the Engineering community here at UofT! It includes all Engineering students studying at UofT, 
                            and you will find that Skule™  is a tightly-knit community full of exciting extra-curricular activities and experiences. 
                            You may be wondering why Skule™ is spelled that way… it’s because engineering can’t spell! There’s a place and club for 
                            everyone in Skule™, whether you play an instrument, like sports, or even like playing video games. F!rosh Week gives you 
                            (the frosh!) a brief introduction into this exciting community, and we encourage you to look for ways to get involved with 
                            it, even as a first year! 
                            </p>
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
        let vcs = blurbs.map(b => {
            return <Profile
                        name={b.name}
                        role={b.role}
                        img={b.img}
                        des={b.description}
                        fav={b.favourite_part}/>
        });

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
                    <Row>
                        {vcs}
                    </Row>
                </Container>
            </div>
        )
    }
}