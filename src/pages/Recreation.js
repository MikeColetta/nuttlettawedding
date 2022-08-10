import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';
import fishingPageImage from '../assets/images/FishingPage.jpg';



class Recreation extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container className="contentContainer">
                    <br></br>
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}>
                            <h2>Recreation</h2>
                        </Card.Header>
                    </Card>
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}>
                            <h4 className='mt-2'>Fishing</h4>
                        </Card.Header>
                        <Image src={fishingPageImage} className="mt-2" fluid="true" style={{ width: "50%", margin: "auto" }}></Image>
                        <Card.Body>
                            <h6 style={{ textAlign: "center" }}>There are lots of fishing options around the venue. Here are a few recommendations!</h6>
                            <h4>Nisqually River</h4>
                            <p>Closest spot to the venue and open for all game fish at the time of the wedding.</p>
                            <h4>La Grande Resevoir</h4>
                            <p>South of the Nisqually River is the La Grande Resevoir. Fishing is open all year round, but finding a spot
                                might be tricky.</p>
                            <h4>Alder Lake</h4>
                            <p>Farther south of La Grande Resevoir is Alder Lake. A wide open lake with year-round fishing opportunities. Talk to Mike about
                                borrowing a kayak.
                            </p>
                        </Card.Body>
                    </Card>
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}>
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

export default Recreation;