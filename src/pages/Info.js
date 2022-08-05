import React from 'react';
import { Container, Card } from 'react-bootstrap';

class Info extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container>
                    <br></br>
                    <Card>
                        <Card.Header><h2>Info/Learn About the Park</h2></Card.Header>
                        <li>How we met</li>
                        <li>Family and party bios</li>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Info;