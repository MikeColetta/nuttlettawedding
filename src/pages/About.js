import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';
import AboutPageImage from '../assets/images/AboutPage.jpg';


class About extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container className="contentContainer">
                    <br></br>
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}>
                            <h2>About the UW Pack Forest Conference Center</h2>
                        </Card.Header>
                        <Image src={AboutPageImage} style={{ height: "75%", width: "75%", margin: "auto" }} className="mt-2"></Image>
                        <br></br>
                        <Card.Body>
                            <p>The Pack Forest Conference Center lies at the foot of Mount Rainier, nestled among stately Douglas-fir in a 4,300 acre forest.
                                Rich in history, Pack Forest offers top quality meeting rooms and comfortable overnight accommodations. Owned by the University of
                                Washington's School of Environmental and Forest Sciences, Pack Forest is an ideal setting for educational conferences or retreats
                                any time of the year.  The facilities are compliant with ADA (Americans with Disabilities Act) standards.</p>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default About;