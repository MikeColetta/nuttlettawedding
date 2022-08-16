import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';
import fishingPageImage from '../assets/images/FishingPage.jpg';
import hikingPageImage from '../assets/images/HikingPage.jpg';

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
                        <br></br>
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
                            <h4>Hiking</h4>
                        </Card.Header>
                        <Image src={hikingPageImage} className="mt-2" fluid="true" style={{ width: "50%", margin: "auto" }}></Image>
                        <br></br>
                        <Card.Body>
                            <h4>Pack Forest Trails</h4>
                            <p>Trail maps will be available at the wedding venue, but preview what's available at all levels.</p>
                            <h4>Little Mashel Falls</h4>
                            <p>A moderately difficult hike with three waterfalls, and multiple viewing areas,
                                make this a great choice for a nearby hike. The tallest waterfall plunges over 90 feet!</p>
                            <h4>Longmire and Paradise, Mt. Rainier</h4>
                            <p>Mt. Rainier—there are plenty of trails to be found inside the park as well to suit all your hiking needs. Please note that you will need to purchase
                                a park entrance pass to access these trails. A weeklong pass can be purchased for $30, or an annual America The Beautiful Pass,
                                which grants access to all federal lands, can be purchased for $80. Discounts are available for seniors, military, and disabled guests. </p>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Recreation;