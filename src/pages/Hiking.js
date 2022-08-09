import React from 'react';
import { Container, Card } from 'react-bootstrap';

class Hiking extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container className="contentContainer">
                    <br></br>
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{backgroundColor:"white"}}>
                            <h2>Hiking</h2>
                        </Card.Header>
                        <Card.Body>
                            <p>Menu coming soon!</p>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Hiking;