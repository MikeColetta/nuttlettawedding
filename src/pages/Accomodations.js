import React from 'react';
import { Container, Card } from 'react-bootstrap';


class Accomodations extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container className="contentContainer">
                    <br></br>
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}>
                            <h2>Accomodations</h2>
                        </Card.Header>
                        <Card.Text>
                            <p>Accomodation information coming soon!</p>
                        </Card.Text>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Accomodations;