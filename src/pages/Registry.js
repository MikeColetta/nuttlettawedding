import React from 'react';
import { Container, Card } from 'react-bootstrap';

class Registry extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container className="contentContainer">
                    <br></br>
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}>
                            <h2>Registry</h2>
                        </Card.Header>
                        <Card.Body>
                            Check out our registry on <a href='https://registry.theknot.com/katy-nuttman-mike-coletta-august-2023-wa/51681427' target={"_blank"} rel="noreferrer">The Knot</a>.
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Registry;