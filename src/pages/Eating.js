import React from 'react';
import { Container, Card } from 'react-bootstrap';


class Eating extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container className="contentContainer">
                    <br></br>
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}>
                            <h2>Eating</h2>
                        </Card.Header>
                        <Card.Body>
                            <p>If you're staying with us for the weekend, food will be provided. Stay tuned to this page for a menu coming soon!</p>
                            <br></br>
                            <p>If you're not staying with us, here are some local recommendations:</p>
                            <ul>
                                <li>restaurant recommendations go on this list.</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Eating;