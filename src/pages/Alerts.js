import React from 'react';
import { Container, Card } from 'react-bootstrap';


class Alerts extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container className="contentContainer">
                    <br></br>
                    <Card>
                        <Card.Header style={{ backgroundColor: "white" }}>
                            <h2 className='alertsTitle'>Alerts in Effect</h2>
                        </Card.Header>
                        <Card.Body>
                            <h4>COVID-19 Information</h4>
                            <p>At this time, the venue is mandating Covid vaccines for all guests.
                                Please be sure that you have completed your vaccine series and all recommended boosters in order to attend this event.
                                Should there be any updates to this policy, we will update this page.</p>
                            <h4>Being Bear Aware</h4>
                            <p>From the US Forest Service: "Being outdoors means being with wildlife. Many people never encounter a bear. But if you do, here's some simple advice:</p>
                            <ul>
                                <li>DO NOT RUN</li>
                                <li>Remain calm.</li>
                                <li>Group together and pick up small children.</li>
                                <li>Continue to face the bear and back away slowly, talking calmly to identify yourself as a human.</li>
                                <li>If the bear continues to approach, try to scare it away by making yourself as large and imposing as possible
                                    by stretching your arms overhead and making loud noises.</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Alerts;