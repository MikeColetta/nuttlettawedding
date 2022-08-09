import React from 'react';
import { Container, Card } from 'react-bootstrap';


class Recreation extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container className="contentContainer">
                    <br></br>
                    <Card style={{ border: "none" }}>
                        <Card.Header>
                            <h2>Recreation</h2>
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

export default Recreation;