import React from 'react';
import { Container } from 'react-bootstrap';

class Fees extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container className="contentContainer">
                    <h2>Fees: Info about accommodations</h2>
                    <li>Expectations for twin beds, dining hall, shared bathrooms</li>
                    <li>Cost and payment to Katy (Cash, check, Venmo)</li>
                </Container>
            </div>
        )
    }
}

export default Fees;