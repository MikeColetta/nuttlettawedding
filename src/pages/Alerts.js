import React from 'react';
import { Container, Card } from 'react-bootstrap';


class Alerts extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container className="contentContainer">
                    <br></br>
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}>
                            <h2>Covid Information</h2>
                        </Card.Header>
                        <Card.Body>
                            <p>At this time, the venue is mandating Covid vaccines for all guests.
                                Please be sure that you have completed your vaccine series and all recommended boosters in order to attend this event.
                                Should there be any updates to this policy, we will update this page</p>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Alerts;