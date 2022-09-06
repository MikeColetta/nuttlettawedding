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
                            <p>We want our wedding to be a weekend spent with all of our friends and family at “summer camp”.
                                While guests may choose to attend only the ceremony and reception on Saturday, we encourage everyone invited to attend for the entire weekend. </p>
                            <p>Guests will be given the option to spend both Friday and Saturday night with us, or just Saturday night.
                                The charged price for guests lodging with us will include all meals, a room in a cabin or dorm space, and parking on the event property.</p>
                            <p>Stay tuned to this page for updates regarding the price once invitations have been sent out.
                                Payment can be given to Katy via check, cash, or Venmo (@TheNuttChild).</p>
                        </Card.Body>
                        <Image src={FeesPageImage} style={{ height: "100%", width: "100%", margin: "auto" }} className="mt-2 mb-2"></Image>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Fees;