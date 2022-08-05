import React from 'react';
import { Container, Card } from 'react-bootstrap';

class Fees extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container className="contentContainer">
                    <br></br>
                    <Card>
                        <Card.Header><h2>Fees: Info about accommodations</h2></Card.Header>          
                    <li>Expectations for twin beds, dining hall, shared bathrooms</li>
                    <li>Cost and payment to Katy (Cash, check, Venmo)</li>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Fees;