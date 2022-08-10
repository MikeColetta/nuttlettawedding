import React from 'react';
import { Container, Card } from 'react-bootstrap';

class Fees extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container className="contentContainer">
                    <br></br>
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}>
                            <h2>Fees: Information About Accommodations</h2>
                        </Card.Header>
                        <Card.Body>
                            <p>Guests may only attend Saturday for the ceremony and reception, but we encourage guests to stay the whole weekend!</p>
                            <p>Guests staying with us the entire weekend will get a two night stay on the event property and all meals will be included.</p>
                            <p>Payment can be given to Katy via cash, check, or Venmo (@TheNuttChild).</p>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Fees;