import React from 'react';
import { Container, Card } from 'react-bootstrap';

class Calendar extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container className="contentContainer">
                    <br></br>
                    <Card>
                    <h2>Schedule</h2>
                    <h4>Friday</h4>
                    <li>Check-In</li>
                    <li>BBQ</li>
                    <h4>Saturday</h4>
                    <li>Free Time</li>
                    <li>Ceremony</li>
                    <li>Reception</li>
                    <h4>Sunday</h4>
                    <li>Brunch</li>
                    <li>Check-out</li>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Calendar;