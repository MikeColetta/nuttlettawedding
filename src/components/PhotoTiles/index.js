import React from "react";
import "./style.css";
import { Row, Col, Card, Container } from "react-bootstrap";
import Directions from "../../assets/images/phototiles/Directions.jpg";
import Eating from "../../assets/images/phototiles/Eating.jpg";
import Accomodations from "../../assets/images/phototiles/Accomodations.jpg";
import About from "../../assets/images/phototiles/About.jpg";
import Recreation from "../../assets/images/phototiles/Recreation.jpg";
import Calendar from "../../assets/images/phototiles/Calendar.jpg";
import Hiking from "../../assets/images/phototiles/Hiking.jpg";
import Fishing from "../../assets/images/phototiles/Fishing.jpg";
import Fees from "../../assets/images/phototiles/Fees.jpg";

function PhotoTiles() {
    return (
        <Container>
            <Row>
                <Col>
                    <Card className="photoTileCard">
                        <Card.Img variant="top" src={Directions} />
                        <Card.Body>
                            <Card.Title>Directions/Transportation</Card.Title>
                            <Card.Text>Address, map, and directions on how to get to the wedding!</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="photoTileCard">
                        <Card.Img variant="top" src={Eating} />
                        <Card.Body>
                            <Card.Title>Eating</Card.Title>
                            <Card.Text>Drinks, Food, and the Menu!</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="photoTileCard">
                        <Card.Img variant="top" src={Accomodations} />
                        <Card.Body>
                            <Card.Title>Accomodations</Card.Title>
                            <Card.Text>A brief description of where you will be staying!</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <Card className="photoTileCard">
                        <Card.Img variant="top" src={About} />
                        <Card.Body>
                            <Card.Title>About the Venue</Card.Title>
                            <Card.Text>Everything you need to know about the UW Pack Forest Conference Center!</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="photoTileCard">
                        <Card.Img variant="top" src={Recreation} />
                        <Card.Body>
                            <Card.Title>Recreation</Card.Title>
                            <Card.Text>Fun stuff to do around the venue!</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="photoTileCard">
                        <Card.Img variant="top" src={Calendar} />
                        <Card.Body>
                            <Card.Title>Calendar/Schedule</Card.Title>
                            <Card.Text>Important Dates and Times for the Event!</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <Card className="photoTileCard">
                        <Card.Img variant="top" src={Hiking} />
                        <Card.Body>
                            <Card.Title>Hiking</Card.Title>
                            <Card.Text>Trails around the venue!</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="photoTileCard">
                        <Card.Img variant="top" src={Fishing} />
                        <Card.Body>
                            <Card.Title>Fishing</Card.Title>
                            <Card.Text>Fishing around the venue!</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="photoTileCard">
                        <Card.Img variant="top" src={Fees} />
                        <Card.Body>
                            <Card.Title>Fee Information</Card.Title>
                            <Card.Text>Cost and expenses for the weekend!</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default PhotoTiles;