import React from 'react';
import { Container, Card } from 'react-bootstrap';
import PhotoTiles from '../components/PhotoTiles';


class planYourVisit extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container className="contentContainer">
                    <br></br>
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}>
                            <h2>A Marriage Fourteen Years in the Making</h2>
                        </Card.Header>
                        <Card.Body>
                            <p>
                                To celebrate our wedding we'd like to invite all guests to join us for a weekend in the woods. Please explore this website to find more details
                                about the weekend we have planned. We encourage our guests to stay the whole weekend with us on site at the Pack Forest Conference Center from August
                                11th through 13th, 2023.
                            </p>
                        </Card.Body>
                    </Card>
                </Container>
                <PhotoTiles />
            </div>
        )
    }
}

export default planYourVisit;