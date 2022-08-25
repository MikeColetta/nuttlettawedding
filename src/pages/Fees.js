import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';
import FeesPageImage from '../assets/images/FeesPageImage.jpg';

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
                            <p>Guests may choose to attend only the ceremony and reception on Saturday, but we encourage everyone invited to attend for the entire weekend!</p>
                            <p>Guests staying with us the entire weekend will get a two night stay on the event property and all meals will be included.</p>
                            <p>Payment can be given to Katy via cash, check, or Venmo (@TheNuttChild).</p>
                        </Card.Body>
                        <Image src={FeesPageImage} style={{ height: "100%", width: "100%", margin: "auto" }} className="mt-2 mb-2"></Image>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Fees;