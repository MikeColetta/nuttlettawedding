import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';

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
                            <p>There are two extended stay options available:</p>
                            <p>Option 1: Friday 8/11-Sunday 8/13, $198 per person
                                This includes lodging for two nights, dinner on Friday night, breakfast and lunch on Saturday, with reception dinner paid
                                for by the happy couple, and brunch on Sunday morning.</p>
                            <p> Option 2: Saturday 8/12-Sunday 8/13, $80 per person
                                This includes lodging for one night, and brunch on Sunday morning, with dinner on Saturday night covered by the happy couple.</p>
                            <p>Payment can be given to Katy via check, cash, or Venmo (@TheNuttChild).</p>
                        </Card.Body>
                        <Image src="https://ik.imagekit.io/4lalrpwz0sy/FeesPageImage_fNblNr10J.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662797302182" style={{ height: "100%", width: "100%", margin: "auto" }} className="mt-2 mb-2"></Image>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Fees;