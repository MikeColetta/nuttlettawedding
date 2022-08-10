import React from 'react';
import { Container, Card } from 'react-bootstrap';

class Fees extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container className="contentContainer">
                    <br></br>
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}>
                            <h2>Fees: Information About Accommodations</h2>
                        </Card.Header>
                        <Card.Body>
                            <p>Guests are encouraged to come just Saturday for the ceremony and reception, but we encourage guests to stay the whole weekend!</p>
                            <p>Guests staying with us the entire weekend will get two night stay on the event property and all meals will be included.</p>
                        </Card.Body>
                        <li>Expectations for twin beds, dining hall, shared bathrooms</li>
                        <li>Cost and payment to Katy (Cash, check, Venmo)</li>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Fees;